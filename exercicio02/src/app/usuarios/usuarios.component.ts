import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../service/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
 

 usuarios: any = [];

  constructor(usuariosService : UsuariosService) {
    
    usuariosService.getTodos()
    .subscribe(usuarios => this.usuarios = usuarios);
   }

  ngOnInit(): void {
   
  }
  
}
