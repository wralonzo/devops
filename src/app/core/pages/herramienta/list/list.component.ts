import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { hostApi, hostGets } from 'src/app/core/constants/host-api';

@Component({
  selector: 'app-tool',
  templateUrl: './list.component.html',
})
export class ListToolComponent {
  public loginForm!: FormGroup;
  public dataRequest = [];
  public optionsHttp: any;
  loading: boolean = true;
  @ViewChild('dt') dt: Table | undefined;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getRandomJoke();
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
    const baseurl = hostGets + 'herramienta';
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
  delete(event: any, id: string) {
    const baseurl = hostGets + 'herramienta/' + id;
    const data = this.http.delete<any>(baseurl).subscribe(
      (res) => {
        this.dataRequest = res;
        this.getData();
        alert('Registro eliminado');
      },
      (err) => {
        alert(err.error || 'Error al intentar conectar con el servidor');
      }
    );
  }
}
