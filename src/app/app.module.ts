import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModulesComponent } from './components/modules/modules.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoursewareComponent } from './components/courseware/courseware.component';
import { DesignComponent } from './components/design/design.component';
import { DragScrollModule  } from 'ngx-drag-scroll';
import { HighlightDirective } from './highlight.directive';
import { AllDesignComponent } from './components/all-design/all-design.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    ModulesComponent,
    LoginComponent,
    NavbarComponent,
    CoursewareComponent,
    DesignComponent,
    HighlightDirective,
    AllDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    DragScrollModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
