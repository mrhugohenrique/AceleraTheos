import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { CadastroComponent } from "../Cadastros/cadastro.component";
import { GithubService } from "../Services/github.service";


@NgModule({
    declarations:[
        HomeComponent,
        MenuComponent,
        FooterComponent,
        CadastroComponent,
    ],
    imports:[
        CommonModule,
        RouterModule,
        
    ],
    exports:[
        MenuComponent,
        FooterComponent,
        HomeComponent,
        CadastroComponent,
        
    ]
})

export class NavegacaoModule { }