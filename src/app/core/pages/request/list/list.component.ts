import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { hostApi, hostGets } from 'src/app/core/constants/host-api';

@Component({
  selector: 'app-return-list',
  templateUrl: './list.component.html',
})
export class ListRequesComponent {
  public loginForm!: FormGroup;
  public dataRequest = [];
  public optionsHttp: any;
  loading: boolean = true;
  @ViewChild('dt') dt: Table | undefined;
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
    const data = this.getRandomJoke();
  }
  clear(table: Table) {
    table.clear();
  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  getEventValue($event: any): string {
    return $event.target.value;
  }
  getRandomJoke() {
    const token = localStorage.getItem('token')!;
    const baseurl = hostGets + 'usuario';
    const data = this.http.get<any>(baseurl).subscribe(
      (res) => {
        this.dataRequest = res;
        this.loading = false;
      },
      (err) => {
        this.loading = false;
      }
    );
  }
}
