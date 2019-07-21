import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ViewBooksComponent } from './components/view-books/view-books.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [ AuthGuardService ] },
  { path: 'login', component: LoginComponent },
  { path: 'add-book', component: AddBookComponent, canActivate: [ AuthGuardService ] },
  { path: 'view-books', component: ViewBooksComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
