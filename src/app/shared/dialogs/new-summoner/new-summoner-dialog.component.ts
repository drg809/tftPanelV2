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
  formGroup: FormGroup;


  constructor(public dialogRef: MatDialogRef<NewSummonerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder,
              private ngZone: NgZone) {
    console.log(data);
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
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(emailregex)]],
      password: [null, Validators.required],
      // 'password': [null, [Validators.required, this.checkPassword]],
    });
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
