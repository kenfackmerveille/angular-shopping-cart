import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'view-cart',
    component: ViewCartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
