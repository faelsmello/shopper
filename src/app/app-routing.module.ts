import { ListShopperComponent } from './features/list-shopper/list-shopper.component';
import { HomeComponent } from './features/home/home.component';
import { NewShopperComponent } from './features/new-shopper/new-shopper.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'new',
    component: NewShopperComponent,
  },
  {
    path: 'list',
    component: ListShopperComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
      anchorScrolling: 'enabled',
      enableTracing: false,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
