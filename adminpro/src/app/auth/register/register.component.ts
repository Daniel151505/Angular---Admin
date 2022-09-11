import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm = this.fb.group({
    nombre: ['Sara', Validators.required ],
    email: ['test001@gmail.com', Validators.required ],
    password: ['123', Validators.required ],
    password2: ['123', Validators.required ],
    terminos: [ false, Validators.required ]
  })

  constructor(
    private fb: FormBuilder
  ) { }

  crearUsuario() {
    console.log( this.registerForm.value );
  }

  ngOnInit(): void {
  }

}
