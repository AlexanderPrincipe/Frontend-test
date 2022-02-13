import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeMarvelComponent } from './heroe-marvel.component';

describe('HeroeMarvelComponent', () => {
  let component: HeroeMarvelComponent;
  let fixture: ComponentFixture<HeroeMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeMarvelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
