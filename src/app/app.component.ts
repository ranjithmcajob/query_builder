import { Component,OnInit } from '@angular/core';
import { QueryBuilderConfig } from 'angular2-query-builder';
import { FormBuilder, FormControl } from '@angular/forms';
import {FieldsService} from './fields.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  queryCtrl: FormControl;

// Query Values
query = {
  condition: 'and',
  rules: [
  {field: 'age', operator: '<=', value: 'Bob'},
  {field: 'gender', operator: '>=', value: 'm'},
  {field: 'mykey', operator: '>=', value: 'm'}
  ]
};

config: QueryBuilderConfig = {
  fields: {}
};

constructor(
  private formBuilder: FormBuilder, private fieldsService: FieldsService
  ) {
  this.queryCtrl = this.formBuilder.control(this.query);
}


ngOnInit() {

  this.fieldsService.getFields()
  .then((data: any) => {
    console.log(data)
    this.config.fields = data;
    this.validFields = Object.keys(this.config.fields)
  })
  .catch(error => console.error(error))
}



validFields = Object.keys(this.config.fields)

changeField(val, rule) {
  if (!this.validFields.includes(val)) {
    console.log("invalid input")
    return;
  }

//console.log(this.validFields)
rule.field = val;
console.log(val, rule.field)
}




}
