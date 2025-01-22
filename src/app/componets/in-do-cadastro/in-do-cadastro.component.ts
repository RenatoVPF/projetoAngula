import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-in-do-cadastro',
  imports: [FormsModule],
  templateUrl: './in-do-cadastro.component.html',
  styleUrl: './in-do-cadastro.component.css'
})
export class InDoCadastroComponent {

  cadastrar(){
    console.log('esta cadastrado, brincadeira to so testando')
  }

}
