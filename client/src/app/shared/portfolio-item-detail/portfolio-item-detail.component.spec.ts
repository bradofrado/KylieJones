import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioItemDetailComponent } from './portfolio-item-detail.component';

describe('PortfolioItemDetailComponent', () => {
  let component: PortfolioItemDetailComponent;
  let fixture: ComponentFixture<PortfolioItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioItemDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
