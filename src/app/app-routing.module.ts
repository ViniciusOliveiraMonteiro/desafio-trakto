import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './components/modules/modules.component';
import { LoginComponent } from './components/login/login.component';
import { CoursewareComponent } from './components/courseware/courseware.component';
import { AllDesignComponent } from './components/all-design/all-design.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'modulos', component: ModulesComponent },
  { path: 'material-didatico', component: CoursewareComponent },
  { path: 'meus-designs', component: AllDesignComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
