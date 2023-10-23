import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Table } from 'primeng/table';
import { hostApi, hostGets } from 'src/app/core/constants/host-api';

@Component({
  selector: 'app-capacitacion',
  templateUrl: './list.component.html',
})
export class ListCapacitacionComponent {
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
    const baseurl = hostGets + 'capacitacion';
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
    const baseurl = hostGets + 'capacitacion/' + id;
    const data = this.http.delete<any>(baseurl).subscribe(
      (res) => {
        this.getData();
        alert('Registro eliminado');
      },
      (err) => {
        this.getData();
        alert(
          err.error.text ||
            err.error ||
            'Error al intentar conectar con el servidor'
        );
      }
    );
  }
}
