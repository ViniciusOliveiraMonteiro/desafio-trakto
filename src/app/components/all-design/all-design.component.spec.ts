import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllDesignComponent } from './all-design.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginService } from '../login/login.component.service';
import { LoginComponent } from '../login/login.component';
import { AllDesignService } from './all-design.component.service';

describe('AllDesignComponent', () => {
  let component: AllDesignComponent;
  let fixture: ComponentFixture<AllDesignComponent>;
  let allDesignService: AllDesignService;
  let loginComponent: LoginComponent;
  let loginService: LoginService;
  let loginFixture: ComponentFixture<LoginComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDesignComponent, NavbarComponent, LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDesignComponent);
    component = fixture.componentInstance;
    allDesignService = new AllDesignService();
    fixture.detectChanges();
    loginFixture = TestBed.createComponent(LoginComponent);
    loginService = new LoginService();
    loginComponent = loginFixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check user success get data', async () => {
    let email = loginComponent.loginForm.controls['email'];
    let password = loginComponent.loginForm.controls['password'];
    email.setValue('viniciussppt@gmail.com');
    password.setValue('Vinizinho1!');
    let userLogin = await loginService.login(loginComponent.loginForm.value);
    let getDesigns = await allDesignService.getDesigns(userLogin.access_token);
    expect(getDesigns).toBeTruthy();
  });
});
