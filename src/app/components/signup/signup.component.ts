import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass'],
})
export class SignupComponent {
  user: any = {};

  constructor(private auth: AuthService) {}

  signup(form: NgForm): void {
    if (form.valid) {
      this.auth.signup(this.user).subscribe(
        (response) => {
          console.log('registrazione effettuata con successo:', response);
        },
        (error) => {
          console.log('registrazione no riuscita:', error);
        }
      );
    }
  }
}
