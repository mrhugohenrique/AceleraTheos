import { Component, OnInit } from '@angular/core';
import { GithubService } from './Services/github.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  
})
export class AppComponent implements OnInit {
  title = 'Cadastro';

  profile: any[] = [];

 constructor(private githubService:GithubService){
  this.githubService.getInfoPerfil().subscribe(perfil =>  {
    console.log(perfil);
  });
  
 }

 ngOnInit(){
   
 }
}
