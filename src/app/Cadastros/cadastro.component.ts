import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GithubService } from '../Services/github.service';
import { GitHubUser } from '../Services/GitHubUser';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers:[GithubService]

})
export class CadastroComponent {



  constructor(private formBuilder: FormBuilder,private toast: ToastrService, public githubService:GithubService){}
 
  errors: any[] = [];
  formulario!: FormGroup;
  gitHubUser!: GitHubUser;
  formResult: string = '';



  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      userGit: null,
      avatar_url:   null,
      name:     null,
      email:    null,
      city:     null,
      formacao: null,
      bio:    null,
    });
  }

  onBlurEvent(event: any){
    if (event.target.value != ''){
      this.githubService.getInfoPerfil(event.target.value).subscribe(data =>{
      
        this.formulario = this.formBuilder.group({
          avatar_url:   data.avatar_url,
          name:     data.name,
          email:    data.email,
          city:     data.location,
          bio:      data.bio,
          formacao: data.formacao,
        })
      });
    }
  }


  adicionarCadastro(): void {

    if (this.formulario.dirty && this.formulario.valid) {

      this.gitHubUser = Object.assign({}, this.gitHubUser, this.formulario.value);
      this.formResult = JSON.stringify(this.gitHubUser);



      this.githubService.adicionarCadastro(this.gitHubUser)
        .subscribe(
          sucesso => { this.processarSucesso(sucesso) },
          falha => { this.processarFalha(falha) }
        );
    }
  }

    processarSucesso(response: any) {
      this.formulario.reset();
      this.errors = [];
      let toast = this.toast.success("Cadastrado com sucesso");
      if (toast){
        toast.onHidden.subscribe(()=>{
          this.load();
        })
      }

  
    }

    processarFalha(fail: any) {
      this.errors = fail.error.errors;
      this.toast.error('Servidor indisponível');

    }
 
    load() {
      location.reload()
    }

}