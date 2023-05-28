import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  form: FormGroup;
  formInit = {};

  constructor(
    private fb: FormBuilder,
    public navCtrl: NavController) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      textInput: [null],
      textArea: [null],
      inputSelect: [null],
    })

    this.formInit = this.form.value;
  }


  enviar() {
    let edit = false;
    edit = !this.compareObjects(this.formInit, this.form.value);

    console.log(edit)
  }


  private compareObjects(init, after): boolean {
    const k1 = Object.keys(init);
    const k2 = Object.keys(after);

    if (k1.length !== k2.length) return false;

    for (let key of k1) {
      if (after[key] == '') {
        init[key] = null;
        after[key] = null;
      }
      if ((init[key] !== after[key])) {
        return false;
      }
    }
    return true;
  }

}
