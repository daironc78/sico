export interface RegistroUsuario {
    name: string,
    email: string,
    tipoIdentificacion: number,
    identificacion: string,
    empresa: string,
    cargo: string,
    celular: string,
    direccion: string,
    pais: number,
    departamento: number,
    ciudad: number,
    codigoPromocional: string
    esEstudiante: boolean,
    acetoTerminos: boolean
}

export class FormRegistroUsuario {
    constructor(public formRegistro: RegistroUsuario){}
}