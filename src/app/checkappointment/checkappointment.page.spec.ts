import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckappointmentPage } from './checkappointment.page';

describe('CheckappointmentPage', () => {
  let component: CheckappointmentPage;
  let fixture: ComponentFixture<CheckappointmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckappointmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckappointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
