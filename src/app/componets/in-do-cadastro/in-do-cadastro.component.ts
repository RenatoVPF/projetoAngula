import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgModelGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-in-do-cadastro',
  imports: [FormsModule, ReactiveFormsModule,],
  templateUrl: './in-do-cadastro.component.html',
  styleUrl: './in-do-cadastro.component.css'
})
export class InDoCadastroComponent {
  
  cadastro = new FormGroup({
    nomeCompleto : new FormControl('', Validators.required),
    nomeUsuario : new FormControl('', Validators.required),
    senhaDoUsuario : new FormControl('', Validators.required),
    confirmarSenha : new FormControl(''),
    ocupacao : new FormControl('', Validators.required)

  })
  
  cadastrar(){
    
 



    console.log(`cadastrado, to de brincs, so to testando essa bagaça e você ${this.cadastro.value.nomeCompleto}`)
  }

}
