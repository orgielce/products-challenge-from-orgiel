import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthComponent} from "../../../app/modules";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {environment} from "../../../environments/environment";

describe('AuthComponent', () => {

  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should make match with snapshot', () => {
    expect(compiled.innerHTML).toMatchSnapshot();
  });

  test(`should have authForm variable`, () => {
    expect(component.authForm).toBeTruthy();
  });

  test(`should have utils class with invalidField method`, () => {
    const method = component.utils.invalidField(component.authForm, 'key');
    expect(method).toEqual(false);
  });

  test(`should have signUp url environment`, () => {
    const signUpUrl = component.env.barCodeLookupSignUpUrl;
    expect(signUpUrl).toEqual(environment.barCodeLookupSignUpUrl);
  });

  test(`should have login url environment`, () => {
    const loginUrl = component.env.barCodeLookupLoginUrl;
    expect(loginUrl).toEqual(environment.barCodeLookupLoginUrl);
  });

  test('should have dom elements', () => {
    fixture.detectChanges();
    // console.log(compiled.innerHTML);
    const authContainer = compiled.querySelector('.auth-container');
    const authContent = compiled.querySelector('.auth-content');
    const leftColumn = compiled.querySelector('.auth-content-left');
    const rightColumn = compiled.querySelector('form');
    const images = compiled.querySelectorAll('img');
    const labels = compiled.querySelectorAll('label');
    const inputs = compiled.querySelectorAll('input');
    expect( authContainer ).toBeTruthy();
    expect( authContent ).toBeTruthy();
    expect( leftColumn ).toBeTruthy();
    expect( rightColumn ).toBeTruthy();
    expect( inputs.length ).toBe(2);
    expect( labels.length ).toBe(2);
    expect( images.length ).toBe(2);
  });
});
