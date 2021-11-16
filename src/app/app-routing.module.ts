
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './Cadastros/cadastro.component';

import { HomeComponent } from './navegacao/home/home.component';

const routes:Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},

];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  