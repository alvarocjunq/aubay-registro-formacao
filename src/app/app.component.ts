import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  displayedColumns = ['name', 'formador', 'conteudo', 'data', 'horas'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface Element {
  name: string;
  formador: string;
  conteudo: string;
  data: string;
  horas: string;
}

const ELEMENT_DATA: Element[] = [
  { name: 'Joaquim', formador: 'Alvaro', conteudo: 'Javascript', data: '07/11/2018', horas: '10'},
  { name: 'João', formador: 'Alvaro', conteudo: 'Angular', data: '08/11/2018', horas: '10'},
  { name: 'Maria', formador: 'Alvaro', conteudo: 'Angular', data: '09/11/2018', horas: '10'},
  { name: 'Catarina', formador: 'Alvaro', conteudo: 'NodeJS', data: '10/11/2018', horas: '12'},
];

