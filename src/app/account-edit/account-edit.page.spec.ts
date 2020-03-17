import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountEditPage } from './account-edit.page';

describe('AccountEditPage', () => {
  let component: AccountEditPage;
  let fixture: ComponentFixture<AccountEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
