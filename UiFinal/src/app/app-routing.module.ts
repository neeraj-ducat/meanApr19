import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternalGuard } from './shared/internal.guard';

const routes: Routes = [
  {path: '', loadChildren: './external/external.module#ExternalModule'},
  {path: 'internal', loadChildren: './internal/internal.module#InternalModule',
   canActivate: [InternalGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
