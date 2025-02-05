import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';

@NgModule({
    declarations: [],
    imports: [ 

        CommonModule,
        FormsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MaterialModule
     ],
    exports: [
        
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    providers: [],
})
export class SharedModule{}