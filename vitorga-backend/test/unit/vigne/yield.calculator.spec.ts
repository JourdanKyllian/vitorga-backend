import { YieldCalculator } from '../../../src/vigne/calculators/yield.calculator';

const makeVigne = (
  overrides: Partial<{
    annee_plantation: number;
    densite: number;
    exposition: string;
    poids_moyen_grappe: number;
    is_active: boolean;
  }> = {},
) => ({
  annee_plantation: 2010,
  densite: 5000,
  exposition: 'OUEST',
  poids_moyen_grappe: 0.15,
  is_active: true,
  ...overrides,
});

const makeParcelle = (surface_ha: number, is_active = true) => ({
  surface_ha,
  is_active,
});

describe('YieldCalculator', () => {
  let calculator: YieldCalculator;
  const CURRENT_YEAR = new Date().getFullYear();

  beforeEach(() => {
    calculator = new YieldCalculator();
  });

  describe('getTauxPerte', () => {
    it('should return 0.30 for vines under 5 years old', () => {
      const vigne = makeVigne({ annee_plantation: CURRENT_YEAR - 3 });

      const result = calculator.calculate(vigne, makeParcelle(1));

      const expected = 5000 * (1 - 0.3) * 0.15 * 1;
      expect(result.rendementHa).toBeCloseTo(expected, 2);
    });

    it('should return 0.10 for vines between 5 and 15 years old', () => {
      const vigne = makeVigne({ annee_plantation: CURRENT_YEAR - 10 });

      const result = calculator.calculate(vigne, makeParcelle(1));

      const expected = 5000 * (1 - 0.1) * 0.15 * 1;
      expect(result.rendementHa).toBeCloseTo(expected, 2);
    });

    it('should return 0.05 for vines over 15 years old', () => {
      const vigne = makeVigne({ annee_plantation: CURRENT_YEAR - 20 });

      const result = calculator.calculate(vigne, makeParcelle(1));

      const expected = 5000 * (1 - 0.05) * 0.15 * 1;
      expect(result.rendementHa).toBeCloseTo(expected, 2);
    });
  });

  describe('exposition bonus/malus', () => {
    it('should add 10% bonus for SUD exposition', () => {
      const vigne = makeVigne({
        exposition: 'SUD',
        annee_plantation: CURRENT_YEAR - 20,
      });

      const result = calculator.calculate(vigne, makeParcelle(1));

      const base = 5000 * (1 - 0.05) * 0.15;
      expect(result.rendementHa).toBeCloseTo(base * 1.1, 2);
    });

    it('should add 5% bonus for EST exposition', () => {
      const vigne = makeVigne({
        exposition: 'EST',
        annee_plantation: CURRENT_YEAR - 20,
      });

      const result = calculator.calculate(vigne, makeParcelle(1));

      const base = 5000 * (1 - 0.05) * 0.15;
      expect(result.rendementHa).toBeCloseTo(base * 1.05, 2);
    });

    it('should subtract 15% for NORD exposition', () => {
      const vigne = makeVigne({
        exposition: 'NORD',
        annee_plantation: CURRENT_YEAR - 20,
      });

      const result = calculator.calculate(vigne, makeParcelle(1));

      const base = 5000 * (1 - 0.05) * 0.15;
      expect(result.rendementHa).toBeCloseTo(base * 0.85, 2);
    });

    it('should apply no bonus or malus for OUEST exposition', () => {
      const vigne = makeVigne({
        exposition: 'OUEST',
        annee_plantation: CURRENT_YEAR - 20,
      });

      const result = calculator.calculate(vigne, makeParcelle(1));

      const base = 5000 * (1 - 0.05) * 0.15;
      expect(result.rendementHa).toBeCloseTo(base, 2);
    });
  });

  describe('rendement parcelle', () => {
    it('should multiply rendement_ha by surface_ha', () => {
      const vigne = makeVigne({
        annee_plantation: CURRENT_YEAR - 20,
        exposition: 'OUEST',
      });
      const parcelle = makeParcelle(3.5);

      const result = calculator.calculate(vigne, parcelle);

      expect(result.rendementParcelle).toBeCloseTo(result.rendementHa * 3.5, 2);
    });

    it('should round result to 2 decimal places', () => {
      const vigne = makeVigne({ annee_plantation: CURRENT_YEAR - 20 });
      const parcelle = makeParcelle(3.7);

      const result = calculator.calculate(vigne, parcelle);

      const decimals = result.rendementParcelle.toString().split('.')[1];
      expect(decimals?.length ?? 0).toBeLessThanOrEqual(2);
    });

    it('should never return negative rendement', () => {
      const vigne = makeVigne({ densite: 0 });
      const parcelle = makeParcelle(5);

      const result = calculator.calculate(vigne, parcelle);

      expect(result.rendementParcelle).toBeGreaterThanOrEqual(0);
    });

    it('should return 0 when density is 0', () => {
      const vigne = makeVigne({ densite: 0 });
      const parcelle = makeParcelle(3);

      const result = calculator.calculate(vigne, parcelle);

      expect(result.rendementParcelle).toBe(0);
    });
  });

  describe('cas limites', () => {
    it('should return 0 when parcelle is inactive', () => {
      const vigne = makeVigne();
      const parcelle = makeParcelle(3, false);

      const result = calculator.calculate(vigne, parcelle);

      expect(result.rendementParcelle).toBe(0);
    });

    it('should return 0 when vigne is inactive', () => {
      const vigne = makeVigne({ is_active: false });
      const parcelle = makeParcelle(3);

      const result = calculator.calculate(vigne, parcelle);

      expect(result.rendementParcelle).toBe(0);
    });

    it('should sum yields for multiple vignes on same parcelle', () => {
      const vignes = [
        makeVigne({
          densite: 5000,
          annee_plantation: CURRENT_YEAR - 20,
          exposition: 'SUD',
        }),
        makeVigne({
          densite: 4500,
          annee_plantation: CURRENT_YEAR - 3,
          exposition: 'NORD',
        }),
      ];
      const parcelle = makeParcelle(3.5);

      const total = calculator.calculateTotal(vignes, parcelle);

      const r1 = calculator.calculate(vignes[0], parcelle).rendementParcelle;
      const r2 = calculator.calculate(vignes[1], parcelle).rendementParcelle;
      expect(total).toBeCloseTo(r1 + r2, 2);
    });
  });
});
