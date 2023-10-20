import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, catchError, retry } from 'rxjs';
import { hostApi, hostGets } from 'src/app/core/constants/host-api';

@Component({
  selector: 'app-return-list',
  templateUrl: './list.component.html',
})
export class ListRequesComponent {
  public loginForm!: FormGroup;
  public dataRequest = [];

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  login() {
    const token = localStorage.getItem('token');
    const payload = {
      email: this.loginForm.value.email,
      contrasenia: this.loginForm.value.password,
      nombre: this.loginForm.value.nombre,
      apellido: this.loginForm.value.apellido,
    };

    this.http
      .post<any>(hostApi + 'registro', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .subscribe(
        (res) => {
          if (!res.token) {
            alert('No se registro el usuario');
            return;
          }
          localStorage.setItem('token', res.token);
          alert('Registro exitos');
          this.router.navigateByUrl('/login');
        },
        (err) => {
          alert('Error al conectar al servidor');
        }
      );
  }

  getData() {
    const data = this.GetIssues().subscribe((pais) => {
      debugger;
      this.dataRequest = pais;
    });
  }

  GetIssues(): Observable<any> {
    const baseurl = hostGets + 'solicitud-capacitacion';
    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    return this.http.get<any>(baseurl, { headers });
  }

  //   public buscarRegion( termino: string ): Observable<Country[]>{
  //     const URL: string = `${this.BASE_URL}regionalbloc/${termino}`;
  //     return this.http.get<Country[]>( URL, { params: this.httpParams } );
  // }
  // get httpParams(){
  //     const httpParams: HttpParams = new HttpParams()
  //     .set('Authorization', );
  //     return httpParams;
  // }
}
