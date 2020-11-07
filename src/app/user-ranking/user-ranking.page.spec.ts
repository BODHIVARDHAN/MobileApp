import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserRankingPage } from './user-ranking.page';

describe('UserRankingPage', () => {
  let component: UserRankingPage;
  let fixture: ComponentFixture<UserRankingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRankingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserRankingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
