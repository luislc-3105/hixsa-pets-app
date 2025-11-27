import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PetsModule } from './modules/pets/pets.module';

const routes: Routes = [
  {
    path : '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'visits/list', pathMatch: 'prefix' },
      {
				path: 'pets',
				loadChildren: () => import('./modules/pets/pets.module').then((m): typeof PetsModule => m.PetsModule),
			}
    ]
  },
  // { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
