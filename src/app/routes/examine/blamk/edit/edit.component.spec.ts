import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ExamineBlamkEditComponent } from './edit.component';

describe('ExamineBlamkEditComponent', () => {
  let component: ExamineBlamkEditComponent;
  let fixture: ComponentFixture<ExamineBlamkEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamineBlamkEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamineBlamkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
