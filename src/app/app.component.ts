import { Component, OnInit } from '@angular/core';
import { GithubService } from './Services/github.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'Cadastro';

}
