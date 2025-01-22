import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InDoPorfessorCompComponent } from "./componets/in-do-porfessor-comp/in-do-porfessor-comp.component";
import { ReactiveFormsModule } from '@angular/forms';
import { InGeralComponent } from "./componets/in-geral/in-geral.component";
import { InDoCadastroComponent } from "./componets/in-do-cadastro/in-do-cadastro.component";

 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, InGeralComponent, InDoCadastroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  
  title = 'sistema da sua escola';
  
}
