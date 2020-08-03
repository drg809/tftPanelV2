import {Component, Inject, NgZone, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogsComponent implements OnInit {
  resources: any;
  buttons: any;
  texts: any;
  isSuccess = false;
  isLoading = false;
  acceptButtonLabel = '';
  loading = false;
  action: 'danger';


  constructor(public dialogRef: MatDialogRef<ConfirmDialogsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private ngZone: NgZone) {
    console.log(data);
    this.resources = data.resources;
    this.buttons = data.buttons;
    this.texts = data.texts;
    this.action = data.action;
  }

  ngOnInit() {
    this.acceptButtonLabel = this.buttons.acceptButtonLabel;
  }

  accept() {
    this.isLoading = true;
    this.acceptButtonLabel = this.buttons.acceptButtonLabelAccept;
    setTimeout(() => {
      this.ngZone.run(() => {
        this.dialogRef.close(true);
        this.loading = false;
      });
    }, 1000);
  }

  cancel(): void {
    this.ngZone.run(() => {
      this.dialogRef.close(false);
      this.loading = false;
      console.log('primer modal');
    });
  }
}
