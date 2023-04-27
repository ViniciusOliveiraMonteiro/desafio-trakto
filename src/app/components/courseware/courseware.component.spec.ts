import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursewareComponent } from './courseware.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { CoursewareService } from './courseware.component.service';
import { LoginService } from '../login/login.component.service';
import { LoginComponent } from '../login/login.component';

describe('CoursewareComponent', () => {
  let component: CoursewareComponent;
  let fixture: ComponentFixture<CoursewareComponent>;
  let coursewareService: CoursewareService;
  let loginComponent: LoginComponent;
  let loginService: LoginService;
  let loginFixture: ComponentFixture<LoginComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursewareComponent, NavbarComponent, DragScrollComponent, LoginComponent ],
      providers: [ CoursewareService, LoginService ],
    })
    .compileComponents();

    coursewareService = new CoursewareService();
    loginService = new LoginService();
    loginFixture = TestBed.createComponent(LoginComponent);
    fixture = TestBed.createComponent(CoursewareComponent);
    component = fixture.componentInstance;
    loginComponent = loginFixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check user success get data', async () => {
    let email = loginComponent.loginForm.controls['email'];
    let password = loginComponent.loginForm.controls['password'];
    email.setValue('vijuliesse@gmail.com');
    password.setValue('Borabaea1!');
    let userLogin = await loginService.login(loginComponent.loginForm.value);
    let getDesigns = await coursewareService.getDesigns(userLogin.access_token);
    expect(getDesigns).toBeTruthy();
  });
});
