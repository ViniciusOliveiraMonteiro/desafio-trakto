import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './components/modules/modules.component';
import { LoginComponent } from './components/login/login.component';
import { CoursewareComponent } from './components/courseware/courseware.component';
import { AllDesignComponent } from './components/all-design/all-design.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'modulos', component: ModulesComponent, canActivate: [AuthGuard] },
  { path: 'material-didatico', component: CoursewareComponent, canActivate: [AuthGuard] },
  { path: 'meus-designs', component: AllDesignComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
