import { ToDo } from './ToDo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.scss']
})
export class MiComponenteComponent implements OnInit {

	public edad: number;
	public nombres: Array<string>;
  public tareas: Array<ToDo> = [];
  public newTodo: string;

  constructor() {
	this.edad=18;
	this.nombres = ["Guada", "Juani"];
	}

  ngOnInit(): void {
	  console.log("compoente cargado");

  }
  
  aumentarEdad(){
	  this.edad ++;
  }
  disminuirEdad(){
	  this.edad --;
  }

  agregar(){
    // this.tareas[] = new ToDo();
    if (this.newTodo){
      let td = new ToDo();
      td.name=this.newTodo;
      td.isCompleted=true;
      this.tareas.push(td);
      this.newTodo ="";
    }else{
      alert("vacio");
    }
  }

  eliminar(id:number){
    this.tareas[id].isCompleted = !this.tareas[id].isCompleted;
  }
  delete(id:number){
    this.tareas = this.tareas.filter((v,l)=> l != id);
  }

}
