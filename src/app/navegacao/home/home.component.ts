import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/Services/github.service';
import { GitHubUser } from 'src/app/Services/GitHubUser';
import {ToastrService} from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[GithubService]
})
export class HomeComponent implements OnInit {
  
  public gitHubUser!: GitHubUser ;
  public editDev!: GitHubUser;
  formulario!: FormGroup;
  GitHubUser!: [];

  constructor(private formBuilder: FormBuilder, private  githubService: GithubService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.githubService.obterTodos()
      .subscribe(
        ret => this.gitHubUser = ret );
  }


  public alterarCadastro(id: string):void {
    if (id!= ''){
    this.githubService.obterCadastro(id)
    .subscribe(ret => {
      this.formulario = this.formBuilder.group({
        avatar_url:   ret.avatar_url,
          name:     ret.name,
          email:    ret.email,
          city:     ret.location,
          bio:      ret.bio,
          formacao: ret.formacao,
          html_url: ret.html_url,
          login:    ret.login,
      })
    });
  }
  }


  public deletarCadastro(id: string):void {
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
