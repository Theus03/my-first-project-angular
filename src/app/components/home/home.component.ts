import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private enviarFormularioService = inject(EnviaFormularioService);
  name = "Matheus";
  idButton = "teste"
  meuBooleano = false;
  atualizaBooleano(valor: boolean) {
    this.meuBooleano = valor;
  }

  submit(param: any) {
    //console.log("vídeo", param);
    this.enviarFormularioService.enviarInformacaoParaBackEnd("enviando para o backend");
  };

  deveMostrarTitulo = true
  listItems = ["1", "2", "3"];
}
