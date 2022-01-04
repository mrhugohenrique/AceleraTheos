import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {  catchError, EMPTY, map, Observable } from "rxjs";
import { GitHubUser } from "./GitHubUser";
import {ToastrService} from 'ngx-toastr';


@Injectable({
    providedIn: 'root'
  })
export class GithubService  {
  
  gitHubUser: GitHubUser[]=[];

private username='Kirandash';
private clientid='fcef7510f633fd49522e';
private clientsecret='f467e770ac00182abedc18fe961dd0f417806f83';
url = 'https://api.github.com/users';
url2: string = 'http://localhost:3000/';
toast: any;


protected ObterHeaderJson(){
return {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
 }

    constructor(private http:HttpClient, toast: ToastrService) {
     }

   getInfoPerfil(userName:string):Observable<GitHubUser>{
        return this.http.get<GitHubUser>(this.url + '/' + userName)
        
    }

    obterTodos(): Observable <GitHubUser> {
      return this.http.get<GitHubUser>(this.url2 + 'cadastro', this.ObterHeaderJson())
    }

    obterCadastro(id: string): Observable<GitHubUser>{
      return this.http.get<GitHubUser>(`${this.url2}cadastro/${id}` , this.ObterHeaderJson())
    }

    adicionarCadastro(gitHubUser: GitHubUser): Observable <GitHubUser> {
      return this.http.post<GitHubUser>(this.url2 + 'cadastro', gitHubUser,  this.ObterHeaderJson())
    }


    excluirCadastro(id: string): Observable <any> {
      return this.http.delete<any>(`${this.url2}cadastro/${id}` , this.ObterHeaderJson())
      
    }

  }