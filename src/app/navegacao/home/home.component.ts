import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/Services/github.service';
import { GitHubUser } from 'src/app/Services/GitHubUser';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public gitHubUser!: GitHubUser;
  

  constructor(private  githubService: GithubService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.githubService.obterTodos()
      .subscribe(
        retorno => this.gitHubUser = retorno );
  }



  public deletaCastro(id: string):void {
    this.githubService.excluirCadastro(id)
      .subscribe(retorno => { this.sucessoExclusao(retorno) },
      ()   => { this.falha() }
      );
  }

  public sucessoExclusao(evento: any): void {

    const toast = this.toast.success('Cadastro excluido com Sucesso!');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.load();
      });
    }
  }

  public falha() {
    this.toast.error('Houve um erro no processamento!');
  }

  load() {
    location.reload()
  }
  
}
