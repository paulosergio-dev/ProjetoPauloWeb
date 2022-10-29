import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/placeholder.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  usuario: Usuario = new Usuario;
  erro: any;

  constructor(private crudService : CrudService) {
    this.getter();
  }
  ngOnInit() {}
  getter() {
    this.crudService.getUsuario().subscribe(
    (data : Usuario) => {
      this.usuario = data;
      console.log('O data que recebemos', data);
      console.log('A variavel que preenchemos', this.usuario);

    },
    (error: any) => {
      this.erro = error;
      console.error('Error : ', error);
      }
    );
  }
}
