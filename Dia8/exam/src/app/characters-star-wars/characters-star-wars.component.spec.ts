import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersStarWarsComponent } from './characters-star-wars.component';

describe('CharactersStarWarsComponent', () => {
  let component: CharactersStarWarsComponent;
  let fixture: ComponentFixture<CharactersStarWarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersStarWarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersStarWarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
