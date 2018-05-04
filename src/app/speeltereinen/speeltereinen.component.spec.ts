import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeeltereinenComponent } from './speeltereinen.component';

describe('SpeeltereinenComponent', () => {
  let component: SpeeltereinenComponent;
  let fixture: ComponentFixture<SpeeltereinenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeeltereinenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeeltereinenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
