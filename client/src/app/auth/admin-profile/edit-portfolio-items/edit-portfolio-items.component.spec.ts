import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPortfolioItemsComponent } from './edit-portfolio-items.component';

describe('EditPortfolioItemsComponent', () => {
  let component: EditPortfolioItemsComponent;
  let fixture: ComponentFixture<EditPortfolioItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPortfolioItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPortfolioItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
