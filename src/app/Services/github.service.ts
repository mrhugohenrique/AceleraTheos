import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {  Observable } from "rxjs";
import { GitHubUser } from "./GitHubUser";

@Injectable({
    providedIn: 'root'
  })
export class GithubService  {
  
  gitHubUser!: GitHubUser;

private username='Kirandash';
private clientid='fcef7510f633fd49522e';
private clientsecret='f467e770ac00182abedc18fe961dd0f417806f83';
url = 'https://api.github.com/users';
url2: string = 'http://localhost:3000/';


protected ObterHeaderJson(){
return {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
 }

    constructor(private http:HttpClient) {
        console.log("Serviço ok");
     }

   getInfoPerfil(userName:string):Observable<GitHubUser>{
        return this.http.get<GitHubUser>(this.url + '/' + userName)
        
    }

    obterTodos(): Observable <GitHubUser> {
      return this.http.get<GitHubUser>(this.url2 + 'cadastro', this.ObterHeaderJson())
    }


    adicionarCadastro(gitHubUser: GitHubUser): Observable <GitHubUser> {
      return this.http.post<GitHubUser>(this.url2 + 'cadastro', gitHubUser,  this.ObterHeaderJson())
    }
  }