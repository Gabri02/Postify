import { Component } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

/** @title Form field with error messages */
@Component({
  selector: 'app-signup',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  username: string = '';
  apiKey: string = '';

  constructor(private auth: AuthService) {}

  login() {
    this.auth.login(this.apiKey).subscribe(
      (user) => {
        // L'utente ha effettuato l'accesso con successo
        console.log('Accesso effettuato');
        // Esegui le azioni necessarie dopo l'accesso, ad esempio reindirizza l'utente a una pagina interna
      },
      (error) => {
        // Gestisci l'errore di accesso, ad esempio mostra un messaggio di errore all'utente
        console.log('Errore durante l\'accesso:', error);
      }
    );
  }
}
