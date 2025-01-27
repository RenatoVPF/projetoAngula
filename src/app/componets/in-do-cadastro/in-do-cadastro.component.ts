import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-in-do-cadastro',
  imports: [FormsModule, ReactiveFormsModule,],
  templateUrl: './in-do-cadastro.component.html',
  styleUrl: './in-do-cadastro.component.css'
})
export class InDoCadastroComponent {
  Professor: any;
  aluno: string ;
  cadProf:boolean;
  cadAlun:boolean;
  cadastrar(){
    if(this.cadProf == true && this.cadAlun == false){
      this.aluno = 'não é um aluno, você é um professo'
    }
   



    console.log(`cadastrado, to de brincs, so to testando essa bagaça e você ${this.aluno}`)
  }

}
