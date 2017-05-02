import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Route guards
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
// Page components
import { HomeComponent } from './pages/home/home.component';
import { CallbackComponent } from './pages/callback/callback.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  //   canActivate: [
  //     AuthGuard
  //   ]
  // },
  // {
  //   path: 'create-event',
  //   component: CreateEventComponent,
  //   canActivate: [
  //     AdminGuard
  //   ]
  // },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
