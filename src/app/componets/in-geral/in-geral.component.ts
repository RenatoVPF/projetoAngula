import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-in-geral',
  imports: [FormsModule],
  templateUrl: './in-geral.component.html',
  styleUrl: './in-geral.component.css'
})
export class InGeralComponent {
  usuario:string = '';
  senha:string = '';
  verificar(){
    console.log(`deu certo ${this.usuario} e ${this.senha}`)
  }
}
