import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
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

  deleteUser(event: any, id: string) {
    const baseurl = hostGets + 'usuario/' + id;
    const data = this.http.delete<any>(baseurl).subscribe(
      (res) => {
        this.dataRequest = res;
        this.getData();
        alert('Usuario eliminado');
      },
      (err) => {
        alert(err.error || 'Error al intentar conectar con el servidor');
      }
    );
  }
}
