import { Component } from '@angular/core';
import { Tarea } from './models/Tarea';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
{
  lista_tareas: Array <Tarea>
  siguiente_id: number = 0
  
  texto_tarea:  string
  id_tarea:     number
  estado_tarea: string
  
  constructor()
  {
    this.lista_tareas = new Array <Tarea>()
    
    this.crear_tarea( "Terminar lo esencial de la agenda de Angular" )
    this.crear_tarea( "Corregir fallos bloqueantes" )
    this.crear_tarea( "Corregir fallos menores" )
    this.crear_tarea( "Añadir nuevas opciones" )
    this.crear_tarea( "Volver a depurar y corregir bugs" )
  }

  // El estado por defecto es true
  private crear_tarea( texto_tarea: string, estado_tarea: boolean = true )
  {
    let t: Tarea
    t = new Tarea( texto_tarea, this.siguiente_id, estado_tarea )
    this.lista_tareas.push( t )
    this.siguiente_id ++
  }

  private eliminar_tarea( id: number )
  {
    for ( let i = 0; i < this.lista_tareas.length; i++ )
    {
      if ( this.lista_tareas[ i ].get_id_tarea() == id )
      {
        this.lista_tareas.splice( i, 1 )
        break
      }
    }
  }
  
}
