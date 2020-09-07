import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'app/shared/services/authentication.service';
import {AlertService} from '../../../shared/services/alert.service';
import {first} from 'rxjs/operators';
import { trigger, transition, style, animate } from '@angular/animations';
import { AuthGuard } from 'app/shared/helpers/auth.guard';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('formState', [
      transition('* => error', [
        style({transform: 'translateX(5%)'}),
        animate(100),
        style({transform: 'translateX(-5%)'}),
        animate(100),
        style({transform: 'translateX(5%)'}),
        animate(100),
        style({transform: 'translateX(-5%)'}),
        animate(100)
      ]),
    ])
  ]
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  returnUrl: string;
  acceptButtonLabel = 'Entrar';
  loading = false;
  submitted = false;
  formState: any;

  emptyEmailErrorLabel: string;
  invalidEmailErrorLabel: string;
  invalidPasswordLenght: string;
  public emptyPasswordErrorLabel: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private authGuard: AuthGuard,
    private alertService: AlertService
  ) {
    this.emptyEmailErrorLabel = 'El email es obligatorio';
    this.invalidEmailErrorLabel = 'El email es inválido';
    this.emptyPasswordErrorLabel = 'La contraseña es obligatoria';
    this.invalidPasswordLenght = 'Password needs to be at least eight characters, one uppercase letter and one number';

    if (this.authenticationService.currentUserValue) {
      this.authGuard.canActivate() ? this.router.navigate(['/dashboard']) : null ;
    }
   }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    this.createForm();
  }

  createForm() {
    const emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(emailregex)]],
      password: [null, Validators.required],
    });
  }

  onSubmit(data) {
    this.formState = 'ok';
    this.submitted = true;

    this.loading = true;
    this.acceptButtonLabel = 'Entrando';
    this.authenticationService.login(data.email, data.password)
      .pipe(first())
      .subscribe(data1 => {
          this.router.navigate(['dashboard']).then(r => {
          });
        },
        error => {
          console.log(error);
          this.formState = 'error';
          if (error === 'Not Found') {
            this.alertService.error('Usuario o contraseña incorrectos');
          } else {
            this.alertService.error(error);
          }
          this.loading = false;
        });

  }

  navigateToRegister() {
    this.router.navigate(['/register']).then(r => {
    });
  }

  navigateToRecovery() {
    this.router.navigate(['/recovery-password']).then(r => {
    });
  }

  checkPassword(control) {
    const enteredPassword = control.value;
    const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? this.emptyEmailErrorLabel :
      this.formGroup.get('email').hasError('pattern') ? this.invalidEmailErrorLabel : '';
  }

  getErrorPassword() {
    return this.formGroup.get('password').hasError('required') ? this.emptyPasswordErrorLabel :
      this.formGroup.get('password').hasError('requirements') ? this.invalidPasswordLenght : '';
  }

}
