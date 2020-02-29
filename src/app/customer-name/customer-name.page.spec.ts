import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerNamePage } from './customer-name.page';

describe('CustomerNamePage', () => {
  let component: CustomerNamePage;
  let fixture: ComponentFixture<CustomerNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerNamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
