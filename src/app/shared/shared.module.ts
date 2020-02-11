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
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatSnackBarModule} from '@angular/material/snack-bar'; 

const MaterialComponents = [
  MatDialogModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [
    ErrorDialogComponent,
    NotFoundComponent,
    HeaderComponent,
    SidebarComponent,
    PageHeaderComponent
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
    ...MaterialComponents,
    HeaderComponent,
    SidebarComponent,
    PageHeaderComponent
  ],
  entryComponents: [
    ErrorDialogComponent
  ]
})
export class SharedModule { }
