import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDesignComponent } from './all-design.component';

describe('AllDesignComponent', () => {
  let component: AllDesignComponent;
  let fixture: ComponentFixture<AllDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
