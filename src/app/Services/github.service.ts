import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';


@Injectable()
export class GithubService {

private username:string;
private clientid='fcef7510f633fd49522e';
private clientsecret='f467e770ac00182abedc18fe961dd0f417806f83';

    constructor(private http:HttpClient) {
        console.log("Serviço ok");
        this.username = 'Kirandash'
     }

    getInfoPerfil(){
        return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" 
        + this.clientid + "&client_secret=" + this.clientsecret)
        .pipe(map(res => res));
    }
 
}
