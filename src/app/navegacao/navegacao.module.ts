import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { CadastroComponent } from "../Cadastros/cadastro.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
        FormsModule,
        ReactiveFormsModule
        
        
    ],
    exports:[
        MenuComponent,
        FooterComponent,
        HomeComponent,
        CadastroComponent,
        
    ]
})

export class NavegacaoModule { }