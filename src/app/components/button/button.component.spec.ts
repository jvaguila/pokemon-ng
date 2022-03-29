import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonComponent } from './button.component';

export enum ICONS {
  EDIT = 'EDIT',
  DELETE = 'DELETE',
  SAVE = 'SAVE',
  CLOSE = 'CLOSE',
  ADD = 'ADD',
  SEARCH = 'SEARCH',
}

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('must have a text again in the btn__text class', () => {
    component.icon = ICONS.ADD;
    component.text = 'Nuevo';
    component.setIcon();
    fixture.detectChanges();
    const debugElement: DebugElement = fixture.debugElement.query(
      By.css('.btn__text')
    );
    const element: HTMLElement = debugElement.nativeElement;
    expect(component.iconImage).toBe('assets/icons/add.svg');
    expect(component.primary).toBeTrue();
    expect(element.innerText).toContain('Nuevo');
  });
});
