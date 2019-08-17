import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private dialog: MatDialog) { }

  public handle(e: Error): void {
    this.dialog.open(ErrorDialogComponent, {
      data: {
        error: e
      }
    });
  }
}
