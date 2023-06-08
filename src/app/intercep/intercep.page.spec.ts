import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IntercepPage } from './intercep.page';

describe('IntercepPage', () => {
  let component: IntercepPage;
  let fixture: ComponentFixture<IntercepPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IntercepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
