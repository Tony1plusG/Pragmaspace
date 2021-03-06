import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get fval() {return this.loginForm.controls; }

  onFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.fval.Login.value, this.fval.password.value)
      .subscribe(
        data => {
          this.router.navigate(['/']);
        },
        error => {
          this.toastr.error(error.error.message, 'Error');
          this.loading = false;
        });
  }
}
