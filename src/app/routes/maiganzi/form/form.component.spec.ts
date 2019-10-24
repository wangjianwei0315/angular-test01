import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaiganziFormComponent } from './form.component';

describe('MaiganziFormComponent', () => {
  let component: MaiganziFormComponent;
  let fixture: ComponentFixture<MaiganziFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiganziFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiganziFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
