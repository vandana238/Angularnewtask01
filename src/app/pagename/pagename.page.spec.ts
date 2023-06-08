import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagenamePage } from './pagename.page';

describe('PagenamePage', () => {
  let component: PagenamePage;
  let fixture: ComponentFixture<PagenamePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagenamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
