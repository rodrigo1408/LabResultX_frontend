import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes =  [
    { path: 'home', component: HomeComponent }, // Criar o component da pagina inicial
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona para a página de login por padrão
    { path: '**', redirectTo: '/login', pathMatch: 'full' } // Lidar com rotas não encontradas
];
