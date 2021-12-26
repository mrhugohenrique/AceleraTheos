import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/Services/github.service';
import { GitHubUser } from 'src/app/Services/GitHubUser';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public gitHubUser!: GitHubUser;

  constructor(private  githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.obterTodos()
      .subscribe(
        cadastro => this.gitHubUser = cadastro );
  }
}
