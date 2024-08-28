import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { CreateBookComponent } from './create-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('CreateBookComponent', () => {
  let component: CreateBookComponent;
  let fixture: ComponentFixture<CreateBookComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBookComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'books/create', component: CreateBookComponent }
        ]),
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should load /books/create and check if the Create button is disabled initially', async () => {
    await router.navigate(['/books/create']);
    fixture.detectChanges();

    const createButton = fixture.debugElement.query(By.css('button#createButton'));
    expect(createButton).toBeTruthy();
    expect(createButton.nativeElement.disabled).toBeTrue();
  });
});
