import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginService } from './login.component.service';
import { ModulesComponent } from './../modules/modules.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent, ModulesComponent ],
      imports: [ ReactiveFormsModule,
        RouterTestingModule.withRoutes(
          [{path:'modulos', component: ModulesComponent}]
        )
      ],
      providers: [
        Router,
        LoginService
      ]
    })
    .compileComponents();
    service = new LoginService();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid initial state', () => {
    expect(component.isSubmit).toBeFalsy();
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.invalid).toBeTruthy();
  });

  it('should check user credentials is not blank',() => {
    let email = component.loginForm.controls['email'];
    let password = component.loginForm.controls['password'];
    email.setValue('teste@mail.com');
    password.setValue('MyPassword');
    expect(email.errors).toBeNull();
    expect(password.errors).toBeNull();
  });

  it('should be true when onSubmit()', () => {
    let email = component.loginForm.controls['email'];
    let password = component.loginForm.controls['password'];
    email.setValue('teste@mail.com');
    password.setValue('MyPassword');
    component.onSubmit();
    expect(component.isSubmit).toBeTruthy();
  });

  it('should check user correct credentials is entered', async () => {
    let email = component.loginForm.controls['email'];
    let password = component.loginForm.controls['password'];
    email.setValue('vijuliesse@gmail.com');
    password.setValue('Borabaea1!');
    let response = await service.login(component.loginForm.value);
    expect(response).toBeTruthy();
  });

  it('should redirect to modules on success login', async () => {
    let email = component.loginForm.controls['email'];
    let password = component.loginForm.controls['password'];
    email.setValue('vijuliesse@gmail.com');
    password.setValue('Borabaea1!');
    await component.onSubmit();
    expect(component.response).toBeTruthy();
  });
});
