import { EquipeValidationService } from '../../../src/equipe/equipe-validation.service';

const makeUser = (id: number, roleNom: string, equipeId?: number) => ({
  id,
  firstname: `User${id}`,
  lastname: 'Test',
  email: `user${id}@test.fr`,
  is_active: true,
  role: { id: roleNom === 'CHEF' ? 2 : 3, nom: roleNom },
  equipeId: equipeId ?? null,
});

const makeEquipe = (id: number, membres: ReturnType<typeof makeUser>[]) => ({
  id,
  name: `Équipe ${id}`,
  is_active: false,
  membres,
});

describe('EquipeValidationService', () => {
  let service: EquipeValidationService;

  beforeEach(() => {
    service = new EquipeValidationService();
  });

  describe('validateAjoutMembre', () => {
    it('should pass when adding an OUVRIER to a team', () => {
      
      const equipe = makeEquipe(1, [makeUser(1, 'CHEF')]);
      const newUser = makeUser(2, 'OUVRIER');

      
      expect(() => service.validateAjoutMembre(equipe, newUser)).not.toThrow();
    });

    it('should throw when adding a second CHEF to a team', () => {
      
      const equipe = makeEquipe(1, [makeUser(1, 'CHEF')]);
      const secondChef = makeUser(2, 'CHEF');

      
      expect(() => service.validateAjoutMembre(equipe, secondChef))
        .toThrow('Une équipe ne peut avoir qu\'un seul chef');
    });

    it('should pass when adding the first CHEF to a team', () => {
      
      const equipe = makeEquipe(1, [makeUser(1, 'OUVRIER')]);
      const chef = makeUser(2, 'CHEF');

    
      expect(() => service.validateAjoutMembre(equipe, chef)).not.toThrow();
    });

    it('should throw when user already belongs to another team', () => {
      
      const equipe = makeEquipe(1, []);
      const userDejaAffecte = makeUser(3, 'OUVRIER', 99);

    
      expect(() => service.validateAjoutMembre(equipe, userDejaAffecte))
        .toThrow('appartient déjà à une équipe');
    });

    it('should pass when user belongs to no team', () => {
      
      const equipe = makeEquipe(1, []);
      const userLibre = makeUser(4, 'OUVRIER', undefined);


      expect(() => service.validateAjoutMembre(equipe, userLibre)).not.toThrow();
    });
  });

  describe('validateActivation', () => {
    it('should pass when team has exactly one CHEF', () => {
      const equipe = makeEquipe(1, [
        makeUser(1, 'CHEF'),
        makeUser(2, 'OUVRIER'),
      ]);

      expect(() => service.validateActivation(equipe)).not.toThrow();
    });

    it('should throw when team has no CHEF', () => {
      const equipe = makeEquipe(1, [
        makeUser(1, 'OUVRIER'),
        makeUser(2, 'OUVRIER'),
      ]);

      expect(() => service.validateActivation(equipe))
        .toThrow('ne peut pas être activée sans chef');
    });

    it('should throw when team has no members at all', () => {
      const equipe = makeEquipe(1, []);

      expect(() => service.validateActivation(equipe))
        .toThrow('ne peut pas être activée sans chef');
    });
  });

  describe('validateVigne', () => {
    it('should throw when annee_plantation is in the future', () => {
      const futureYear = new Date().getFullYear() + 1;

      expect(() => service.validateVigne({ annee_plantation: futureYear, densite: 5000 }))
        .toThrow('année de plantation ne peut pas être dans le futur');
    });

    it('should pass when annee_plantation is current year', () => {
      const currentYear = new Date().getFullYear();

      expect(() => service.validateVigne({ annee_plantation: currentYear, densite: 5000 }))
        .not.toThrow();
    });

    it('should throw when densite is below 1000', () => {
      expect(() => service.validateVigne({ annee_plantation: 2010, densite: 500 }))
        .toThrow('densité doit être entre 1000 et 10000');
    });

    it('should throw when densite exceeds 10000', () => {
      expect(() => service.validateVigne({ annee_plantation: 2010, densite: 12000 }))
        .toThrow('densité doit être entre 1000 et 10000');
    });

    it('should pass for valid densite at boundary values', () => {
      expect(() => service.validateVigne({ annee_plantation: 2010, densite: 1000 }))
        .not.toThrow();
      expect(() => service.validateVigne({ annee_plantation: 2010, densite: 10000 }))
        .not.toThrow();
    });
  });
});