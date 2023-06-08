import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartgraphPage } from './chartgraph.page';

describe('ChartgraphPage', () => {
  let component: ChartgraphPage;
  let fixture: ComponentFixture<ChartgraphPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChartgraphPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
