import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home-page/home.module').then((m) => m.homeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'kanban',
    loadChildren: () =>
      import('./kanban/kanban.module').then((m) => m.KanbanModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
