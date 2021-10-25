import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientsComponent} from "./components/clients/clients.component";
import {ClientComponent} from "./components/client/client.component";

const routes: Routes = [
  {path: 'clients', component: ClientsComponent},
  {path: 'clients/:id', component: ClientComponent},
  {path: '**', redirectTo: 'clients'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
