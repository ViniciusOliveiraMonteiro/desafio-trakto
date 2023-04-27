import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesComponent } from './modules.component';
import { NavbarComponent } from '../navbar/navbar.component';

describe('ModulesComponent', () => {
  let component: ModulesComponent;
  let fixture: ComponentFixture<ModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulesComponent, NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
