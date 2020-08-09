import {Component, Inject, NgZone, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-summoner-dialog',
  templateUrl: './new-summoner-dialog.component.html',
  styleUrls: ['./new-summoner-dialog.component.scss']
})
export class NewSummonerDialogComponent implements OnInit {
  object: any;
  buttons: any;
  texts: any;
  isSuccess = false;
  isLoading = false;
  acceptButtonLabel = '';
  loading = false;
  action: 'danger';
  name: string;
  formGroup: FormGroup;
  formState: any;


  constructor(public dialogRef: MatDialogRef<NewSummonerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder,
              private ngZone: NgZone) {
    this.object = data.object;
    this.buttons = data.buttons;
    this.texts = data.texts;
    this.action = data.action;
  }

  ngOnInit() {
    this.acceptButtonLabel = this.buttons.acceptButtonLabel;
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      // 'password': [null, [Validators.required, this.checkPassword]],
    });
  }

  onSubmit(value) {
    this.isLoading = true;
    this.acceptButtonLabel = this.buttons.acceptButtonLabelAccept;
    setTimeout(() => {
      this.ngZone.run(() => {
        this.dialogRef.close({res: true, name: value});
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
