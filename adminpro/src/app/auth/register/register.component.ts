import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formSubmitted = false;

  public registerForm = this.fb.group({
    nombre: ['Sara', Validators.required ],
    email: ['test001@gmail.com', [Validators.required, Validators.email] ],
    password: ['123', Validators.required ],
    password2: ['123', Validators.required ],
    terminos: [ false, Validators.requiredTrue ]
  })

  constructor(
    private fb: FormBuilder
  ) { }

  crearUsuario() {
    this.formSubmitted = true;
    console.log( this.registerForm.value );

  }

  ngOnInit(): void {
  }

  campoNoValido( campo: string ): boolean {
    if (this.registerForm.get(campo)!.invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

}
