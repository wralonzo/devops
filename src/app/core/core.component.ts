import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
})
export class CoreComponent implements OnInit{
  constructor(
    private primeNgConfig: PrimeNGConfig
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.primeNgConfig.ripple = true;
  }
}
