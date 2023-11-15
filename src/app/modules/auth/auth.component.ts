import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// import {Store} from "@ngrx/store";
import {BaseFormHelper, Credentials} from "../../shared";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authForm!: FormGroup;
  utils: BaseFormHelper;

  constructor(private fb: FormBuilder/*, private store: Store<GlobalState>*/) {
    this.utils = new BaseFormHelper();
    this.authForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        key: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      });
  }

  ngOnInit(): void {
  }

  setLogin(): void {
    if (this.authForm.invalid) return;

    const payload: Credentials = {
      name: this.authForm.get('name')?.value,
      key: this.authForm.get('key')?.value
    }

    // this.store.dispatch(AuthAction.Login({credentials: payload}));
  }

}
