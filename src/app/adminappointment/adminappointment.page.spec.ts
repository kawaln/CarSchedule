import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminappointmentPage } from './adminappointment.page';

describe('AdminappointmentPage', () => {
  let component: AdminappointmentPage;
  let fixture: ComponentFixture<AdminappointmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminappointmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminappointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
