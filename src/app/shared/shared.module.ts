import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// Importar aqui modulos do material e componentes compartilhados
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

const MaterialComponents = [
  MatDialogModule,
  MatInputModule,
];

@NgModule({
  declarations: [
    ErrorDialogComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
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
