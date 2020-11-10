import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageappointmentPage } from './manageappointment.page';

describe('ManageappointmentPage', () => {
  let component: ManageappointmentPage;
  let fixture: ComponentFixture<ManageappointmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageappointmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageappointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
