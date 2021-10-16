import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HugobossComponent } from './hugoboss.component';

describe('HugobossComponent', () => {
  let component: HugobossComponent;
  let fixture: ComponentFixture<HugobossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HugobossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HugobossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
