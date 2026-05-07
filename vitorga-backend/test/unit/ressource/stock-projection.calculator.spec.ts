import { StockProjectionCalculator } from '../../../src/ressource/calculators/stock-projection.calculator';

const makeRessource = (stockActuel: number, seuilAlerte: number) => ({
  id: 1,
  nom: 'Soufre en poudre',
  stock_actuel: stockActuel,
  seuil_alerte: seuilAlerte,
  unite_mesure: 'kg',
});

const makeIntervention = (statut: string, quantite: number) => ({
  id: Math.random(),
  statut,
  quantite,
});

describe('StockProjectionCalculator', () => {
  let calculator: StockProjectionCalculator;

  beforeEach(() => {
    calculator = new StockProjectionCalculator();
  });

  describe('calculateProjectedStock', () => {
    it('should return current stock when no interventions are planned', () => {
      const ressource = makeRessource(150, 50);
      const interventions = [];

      const result = calculator.calculateProjectedStock(
        ressource,
        interventions,
      );

      expect(result.stockProjecte).toBe(150);
    });

    it('should subtract PLANIFIEE interventions from current stock', () => {
      const ressource = makeRessource(150, 50);
      const interventions = [
        makeIntervention('PLANIFIEE', 40),
        makeIntervention('PLANIFIEE', 35),
      ];

      const result = calculator.calculateProjectedStock(
        ressource,
        interventions,
      );

      expect(result.stockProjecte).toBe(75);
    });

    it('should subtract EN_COURS interventions from current stock', () => {
      const ressource = makeRessource(150, 50);
      const interventions = [makeIntervention('EN_COURS', 30)];

      const result = calculator.calculateProjectedStock(
        ressource,
        interventions,
      );

      expect(result.stockProjecte).toBe(120);
    });

    it('should ignore TERMINEE interventions in projection', () => {
      const ressource = makeRessource(150, 50);
      const interventions = [makeIntervention('TERMINEE', 50)];

      const result = calculator.calculateProjectedStock(
        ressource,
        interventions,
      );

      expect(result.stockProjecte).toBe(150);
    });

    it('should ignore ANNULEE interventions in projection', () => {
      const ressource = makeRessource(150, 50);
      const interventions = [makeIntervention('ANNULEE', 80)];

      const result = calculator.calculateProjectedStock(
        ressource,
        interventions,
      );

      expect(result.stockProjecte).toBe(150);
    });

    it('should handle mix of statuses correctly', () => {
      const ressource = makeRessource(150, 50);
      const interventions = [
        makeIntervention('PLANIFIEE', 40),
        makeIntervention('EN_COURS', 35),
        makeIntervention('ANNULEE', 20),
        makeIntervention('TERMINEE', 30),
      ];

      const result = calculator.calculateProjectedStock(
        ressource,
        interventions,
      );

      expect(result.stockProjecte).toBe(75);
    });

    it('should allow negative projected stock', () => {
      const ressource = makeRessource(50, 30);
      const interventions = [makeIntervention('PLANIFIEE', 80)];

      const result = calculator.calculateProjectedStock(
        ressource,
        interventions,
      );

      expect(result.stockProjecte).toBe(-30);
    });
  });

  describe('isAlerte', () => {
    it('should return true when projected stock is below seuil_alerte', () => {
      const ressource = makeRessource(150, 50);
      const interventions = [makeIntervention('PLANIFIEE', 110)];

      const result = calculator.calculateProjectedStock(
        ressource,
        interventions,
      );

      expect(result.isAlerte).toBe(true);
    });

    it('should return false when projected stock is above seuil_alerte', () => {
      const ressource = makeRessource(150, 50);
      const interventions = [makeIntervention('PLANIFIEE', 40)];

      const result = calculator.calculateProjectedStock(
        ressource,
        interventions,
      );

      expect(result.isAlerte).toBe(false);
    });

    it('should return true when projected stock exactly equals seuil_alerte', () => {
      const ressource = makeRessource(150, 50);
      const interventions = [makeIntervention('PLANIFIEE', 100)];

      const result = calculator.calculateProjectedStock(
        ressource,
        interventions,
      );

      expect(result.isAlerte).toBe(true);
    });
  });

  describe('calculateCriticite', () => {
    it('should return 0 when stock is well above threshold', () => {
      const ressource = makeRessource(200, 50);
      const interventions = [];

      const result = calculator.calculateProjectedStock(
        ressource,
        interventions,
      );

      expect(result.criticite).toBe(0);
    });

    it('should return 30 when projected stock is 30% below threshold', () => {
      const ressource = makeRessource(150, 50);
      const interventions = [makeIntervention('PLANIFIEE', 115)];

      const result = calculator.calculateProjectedStock(
        ressource,
        interventions,
      );

      expect(result.criticite).toBe(30);
    });

    it('should return 100 when projected stock is negative', () => {
      const ressource = makeRessource(50, 30);
      const interventions = [makeIntervention('PLANIFIEE', 100)];

      const result = calculator.calculateProjectedStock(
        ressource,
        interventions,
      );

      expect(result.criticite).toBe(100);
    });

    it('should not exceed 100 even when stock is very negative', () => {
      const ressource = makeRessource(10, 30);
      const interventions = [makeIntervention('PLANIFIEE', 500)];

      const result = calculator.calculateProjectedStock(
        ressource,
        interventions,
      );

      expect(result.criticite).toBeLessThanOrEqual(100);
    });

    it('should handle seuil_alerte of 0 without division error', () => {
      const ressource = makeRessource(100, 0);
      const interventions = [];

      expect(() =>
        calculator.calculateProjectedStock(ressource, interventions),
      ).not.toThrow();
    });
  });
});
