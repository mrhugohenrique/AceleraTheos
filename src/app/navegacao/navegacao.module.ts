import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations:[
        HomeComponent,
        MenuComponent,
        FooterComponent
    ],
    imports:[
        CommonModule,
        RouterModule
    ],
    exports:[
        MenuComponent,
        FooterComponent,
        HomeComponent
    ]
})

export class NavegacaoModule { }