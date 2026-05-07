import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EquipeModule } from './equipe/equipe.module';
import { UsersEquipeModule } from './users_equipe/users_equipe.module';
import { RoleModule } from './role/role.module';
import { CampagneModule } from './campagne/campagne.module';
import { InterventionModule } from './intervention/intervention.module';
import { InterventionRessourceModule } from './intervention_ressource/intervention_ressource.module';
import { RessourceModule } from './ressource/ressource.module';
import { EntrepriseModule } from './entreprise/entreprise.module';
import { ParcelleModule } from './parcelle/parcelle.module';
import { BatimentModule } from './batiment/batiment.module';
import { BatimentRessourceModule } from './batiment_ressource/batiment_ressource.module';
import { EntrepriseParcelleModule } from './entreprise_parcelle/entreprise_parcelle.module';
import { NormesModule } from './normes/normes.module';
import { AppellationModule } from './appellation/appellation.module';
import { VigneModule } from './vigne/vigne.module';
import { TypeProductionModule } from './type_production/type_production.module';

@Module({
  imports: [
    UsersModule,
    EquipeModule,
    UsersEquipeModule,
    RoleModule,
    CampagneModule,
    InterventionModule,
    InterventionRessourceModule,
    RessourceModule,
    EntrepriseModule,
    ParcelleModule,
    BatimentModule,
    BatimentRessourceModule,
    EntrepriseParcelleModule,
    NormesModule,
    AppellationModule,
    VigneModule,
    TypeProductionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
