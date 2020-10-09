import {NgModule} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';

import {MatTabsModule} from '@angular/material/tabs';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';

import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    imports:[
        MatSnackBarModule,MatPaginatorModule, MatSortModule, MatTableModule,MatDialogModule,   MatProgressSpinnerModule,MatGridListModule,  MatDatepickerModule,FlexLayoutModule, MatSidenavModule,MatIconModule,MatCardModule,MatToolbarModule,MatCheckboxModule,MatFormFieldModule,MatTabsModule,MatNativeDateModule,MatButtonModule,MatInputModule,MatSelectModule
    ],
    exports:[
        MatSnackBarModule,  MatPaginatorModule,  MatSortModule, MatTableModule,  MatDialogModule, MatProgressSpinnerModule, MatListModule,  MatGridListModule,MatDatepickerModule, FlexLayoutModule,MatSidenavModule,MatToolbarModule,MatCardModule,MatToolbarModule,MatCheckboxModule,MatFormFieldModule,MatButtonModule,MatInputModule,MatTabsModule,MatNativeDateModule,MatSelectModule
    ]
})

export class MaterialModule{}