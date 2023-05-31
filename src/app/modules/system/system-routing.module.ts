import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeSystemComponent} from "./components/home-system/home-system.component";
import {LoginSystemComponent} from "./components/login-system/login-system.component";
import {PageNotFoundComponent} from "../../components/page-not-found/page-not-found.component";
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";

const routes: Routes = [
  {
    path: '',
    component: HomeSystemComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/system/login']))
  },
  {
    path: 'login',
    component: LoginSystemComponent,
    ...canActivate(() => redirectLoggedInTo(['/system']))
  },
  {
    path: '', redirectTo: '/system', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {
}
