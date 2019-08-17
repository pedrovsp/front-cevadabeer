import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Importar aqui modulos do material e componentes compartilhados
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

const MaterialComponents = [
  MatDialogModule
];

@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...MaterialComponents
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...MaterialComponents
  ],
  entryComponents: [
    ErrorDialogComponent
  ]
})
export class SharedModule { }
