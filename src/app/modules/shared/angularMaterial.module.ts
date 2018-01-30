import {NgModule} from '@angular/core';
import {
    MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule,
    MatListModule, MatProgressSpinnerModule, MatSnackBarModule
} from '@angular/material';


@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatListModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatListModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule
    ],
})

export class AngularMaterialModule {
}
