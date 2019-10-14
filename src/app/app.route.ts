import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {UserCartComponent} from './user-cart/user-cart.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {OrderhistoryComponent} from './orderhistory/orderhistory.component';
import {PlacedComponent} from './placed/placed.component';
import {MyprofileComponent} from './myprofile/myprofile.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '', redirectTo: '/sign_in', pathMatch: 'full'
  },
  {
  path: 'home',
  component: HomePageComponent,
  },
  {
    path: 'cart',
    component: UserCartComponent,
  },
  {
    path: 'sign_in',
    component: LoginComponent
  },
  {
    path: 'sign_up',
    component: SignUpComponent
  },
  {
    path: 'home/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'orderhistory',
    component: OrderhistoryComponent
  },
  {
    path: 'placed',
    component: PlacedComponent
  },
  {
    path: 'myprofile',
    component: MyprofileComponent
  }
  ];
