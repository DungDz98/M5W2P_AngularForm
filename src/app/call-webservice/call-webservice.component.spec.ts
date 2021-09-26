import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallWebserviceComponent } from './call-webservice.component';

describe('CallWebserviceComponent', () => {
  let component: CallWebserviceComponent;
  let fixture: ComponentFixture<CallWebserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallWebserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallWebserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
