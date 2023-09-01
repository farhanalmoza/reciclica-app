import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrorMessageComponent } from './error-message.component';
import { FormControl, FormGroup } from '@angular/forms';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should show error message on field touched and error present', () => {
    component.field = new FormGroup({anyField: new FormControl()});

    component.field.markAllAsTouched();
    component.field.setErrors({anyError: true});
    component.error = 'anyError';

    expect(component.shouldShowComponent()).toBeTruthy();
  });

  it('should hide error message on field not touched', () => {
    component.field = new FormGroup({anyField: new FormControl()});

    component.field.setErrors({anyError: true});
    component.error = 'anyError';

    expect(component.shouldShowComponent()).toBeFalsy();
  });

  it('should hide error message on field touched but error not present', () => {
    component.field = new FormGroup({anyField: new FormControl()});

    component.field.markAllAsTouched();
    component.error = 'anyError';

    expect(component.shouldShowComponent()).toBeFalsy();
  });

  it('should hide error message on field touched and has error, but not the same', () => {
    component.field = new FormGroup({anyField: new FormControl()});

    component.field.markAllAsTouched();
    component.field.setErrors({anyError: true});
    component.error = 'otherError';

    expect(component.shouldShowComponent()).toBeFalsy();
  });

});
