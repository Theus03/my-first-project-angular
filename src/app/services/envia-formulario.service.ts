import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Diz que o service pode ser injetado por toda aplicação.
})
export class EnviaFormularioService {

  constructor() { }

  enviarInformacaoParaBackEnd(info: string){
    console.log(info)
  }
}
