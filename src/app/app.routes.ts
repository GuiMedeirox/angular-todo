import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteguardService } from './service/routeguard.service';

export const routes: Routes = [
    {path:"", component: LoginComponent }, 
    {path:"login", component: LoginComponent }, 
    {path:"welcome/:name", component:WelcomeComponent, canActivate:[RouteguardService]},
    {path:"todo", component:ListTodosComponent, canActivate:[RouteguardService]},
    {path:"logout", component:LogoutComponent, canActivate:[RouteguardService]},
    {path:"**", component:ErrorComponent}

];
