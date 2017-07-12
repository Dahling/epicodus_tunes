
//helps provide our router to the rest of the application
import { ModuleWithProviders }  from '@angular/core';
//help us render specific components when specific URLs are provided to the router
import { Routes, RouterModule } from '@angular/router';
// the first Route object, our Welcome component
import { WelcomeComponent } from './welcome/welcome.component';
// the second Route object, our About component
import { AboutComponent }   from './about/about.component';
// the third Route object, our Marketplace component
import { MarketplaceComponent }   from './marketplace/marketplace.component';
// the 4th Route object, our AlbumDetail component
import { AlbumDetailComponent }   from './album-detail/album-detail.component';
import { AdminComponent }   from './admin/admin.component';

//an array called appRoutes --contains the master list of all available routes in our application:
const appRoutes: Routes =
[

  {
    path: '',
    component: WelcomeComponent
  },

  {
   path: 'about',
   component: AboutComponent
 },

 {
  path: 'marketplace',
  component: MarketplaceComponent
 },

 {
  path: 'albums/:id',
  component: AlbumDetailComponent
 },

 {
   path: 'admin',
   component: AdminComponent
 }

];

 //our file needs to export our routes to the rest of the application --we do this by passing our appRoutes variable into the forRoot() method of the RouterModule we imported, like this:

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
