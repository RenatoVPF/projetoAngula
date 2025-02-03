import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgModelGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../../modelo/Pessoa';


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
    ocupacao : new FormControl('', Validators.required )
    
  })
  
 sValido:boolean = false;
 oValido:boolean = false;


  vetor:Pessoa[] = [];
  cadastrar(){
    if(this.cadastro.value.confirmarSenha == this.cadastro.value.senhaDoUsuario){
     this.sValido = true 
    }
    if(this.cadastro.value.ocupacao == 'professor' || this.cadastro.value.ocupacao == 'aluno' ){
      this.oValido = true
    }
    
    if(this.sValido == true && this.oValido == true){
    this.vetor.push(this.cadastro.value as Pessoa)

    this.cadastro.reset();

    console.table(this.vetor)
  }else {
    window.alert('tem componentes invalidos')
  }
    
  }
  
}
