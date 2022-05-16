import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionExampleComponent } from './function-example.component';

describe('FunctionExampleComponent', () => {
  let component: FunctionExampleComponent;
  let fixture: ComponentFixture<FunctionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
