import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GithubService } from '../Services/github.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers:[GithubService]

})
export class CadastroComponent { 
  user:any;
  repos:any;
  username!: string;

  constructor(private formBuilder: FormBuilder, public _githubService:GithubService){}

  formulario!: FormGroup;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      userGit:  [null],
      avatar:   [null],
      name:     [null],
      email:    [null],
      city:     [null],
      formacao: [null],
      bio:    [null]
    });
  }

  onBlurEvent(event: any){
    if (event.target.value != ''){
      this._githubService.getInfoPerfil(event.target.value).subscribe(data =>{
      
        this.formulario = this.formBuilder.group({
          avatar:   data.avatar_url,
          name:     data.name,
          email:    data.email,
          city:     data.location,
          bio:      data.bio,
          forcamao: data.formacao
        })
      });
    }
  }
}