import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required]
    })
  }
  login(){
    const payload = {
      email: this.loginForm.value.email,
      contrasenia: this.loginForm.value.password 
    };
    this.http.post<any>("http://20.115.58.35:8080/api/v1/auth/authenticar", payload)
    .subscribe(res=>{
      debugger;
      if(!res.token){
        alert('Error credenciales no validas');
        return;
      }
      localStorage.setItem("token", res.token);
      this.router.navigateByUrl('/home')
    },err=>{
      debugger;
     alert('Error credenciales no validas');
    })
  }

}
