import { Component, OnInit } from '@angular/core';
import { RegistroUsuario } from '../models/register.model';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss']
})
export class FormularioRegistroComponent implements OnInit {
  name: string = '';
  email: string = '';
  tipoIdentificacion: number = 0;
  identificacion: string = '';
  empresa: string = '';
  cargo: string = '';
  celular: string = '';
  direccion: string = '';
  pais: number = 0;
  departamento: number = 0;
  ciudad: number = 0;
  codigoPromocional: string = '';
  esEstudiante: boolean = false;
  acetoTerminos: boolean = false;

  constructor() {}

  registrarUsuario() {
    console.log(this.name)
    console.log(this.email)
    console.log(this.tipoIdentificacion)
    console.log(this.identificacion)
    console.log(this.empresa)
    console.log(this.cargo)
    console.log(this.celular)
    console.log(this.direccion)
    console.log(this.pais)
    console.log(this.departamento)
    console.log(this.ciudad)
    console.log(this.codigoPromocional)
    console.log(this.esEstudiante)
    console.log(this.acetoTerminos)
  }

  limpiarFormulario() {
    this.name = '';
    this.email = '';
    this.tipoIdentificacion = 0;
    this.identificacion = '';
    this.empresa = '';
    this.cargo = '';
    this.celular = '';
    this.direccion = '';
    this.pais = 0;
    this.departamento = 0;
    this.ciudad = 0;
    this.codigoPromocional = '';
    this.esEstudiante = false;
    this.acetoTerminos = false;
  }

  setName(event: Event){
    this.name = (<HTMLInputElement>event.target).value;
  }

  setEmail(event: Event){
    this.email = (<HTMLInputElement>event.target).value;
  }

  setIdentificacion(event: Event){
    this.identificacion = (<HTMLInputElement>event.target).value;
  }

  setEmpresa(event: Event){
    this.empresa = (<HTMLInputElement>event.target).value;
  }

  setCargo(event: Event){
    this.cargo = (<HTMLInputElement>event.target).value;
  }

  setCelular(event: Event){
    this.celular = (<HTMLInputElement>event.target).value;
  }

  setDireccion(event: Event){
    this.direccion = (<HTMLInputElement>event.target).value;
  }

  setCodigoPromocional(event: Event){
    this.codigoPromocional = (<HTMLInputElement>event.target).value;
  }

  setEsEstudiante(event: Event){
    this.esEstudiante = (<HTMLInputElement>event.target).checked;
  }

  setAcetoTerminos(event: Event){
    this.acetoTerminos = (<HTMLInputElement>event.target).checked;
  }
  
  ngOnInit(): void {

  }
}
