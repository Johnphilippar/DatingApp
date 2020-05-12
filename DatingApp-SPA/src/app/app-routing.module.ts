import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './navbar-links/messages/messages.component';
import { ListsComponent } from './navbar-links/lists/lists.component';
import { MemberlistComponent } from './navbar-links/memberlist/memberlist.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'member',component: MemberlistComponent},
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
