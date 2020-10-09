//Angular Imports 
import { NgModule } from "@angular/core";

//Firebase Imports
import {AngularFirestoreModule} from 'angularfire2/firestore';

//store module import
import { StoreModule } from '@ngrx/store';

//Local Imports
import { TrainingComponent } from '../training/training.component';
import { CurrentTrainingComponent } from '../training/current-training/current-training.component';
import { NewTrainingComponent } from '../training/new-training/new-training.component';
import { PassTrainingComponent } from '../training/pass-training/pass-training.component';
import { StopTrainingComponent } from '../training/current-training/stop-training/stop-training.component';
import { SharedModule } from '../shared/shared.module';
import { TrainningRoutingModule } from './trainning-routing.module';
import {trainingReducer} from '../training/training.reducers';
@NgModule({
    declarations: [
        TrainingComponent,
        CurrentTrainingComponent,
        NewTrainingComponent,
        PassTrainingComponent,
        StopTrainingComponent
    ],
    imports: [
        SharedModule,
        AngularFirestoreModule,
        TrainningRoutingModule,
        StoreModule.forFeature('training',trainingReducer)
    ],
    exports: [
    ],
  entryComponents:[StopTrainingComponent]
})
export class TrainingModule {}