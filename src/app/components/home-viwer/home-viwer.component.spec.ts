import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeViwerComponent } from './home-viwer.component';

describe('HomeViwerComponent', () => {
  let component: HomeViwerComponent;
  let fixture: ComponentFixture<HomeViwerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeViwerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeViwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
