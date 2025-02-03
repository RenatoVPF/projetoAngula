import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgModelGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-in-do-cadastro',
  imports: [FormsModule, ReactiveFormsModule,],
  templateUrl: './in-do-cadastro.component.html',
  styleUrl: './in-do-cadastro.component.css'
})
export class InDoCadastroComponent {
  
  cadastro = new FormGroup({
    nomeCompleto : new FormControl(''),
    nomeUsuario : new FormControl(''),
    senhaDoUsuario : new FormControl(''),
    confirmarSenha : new FormControl(''),
    ocupacao : new FormControl('')

  })
  
  cadastrar(){
    
   



    console.log(`cadastrado, to de brincs, so to testando essa bagaça e você ${this.cadastro.value.nomeCompleto}`)
  }

}
