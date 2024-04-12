import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home Page' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact Page' },
  },
];

export default routes;
