import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb: FormBuilder){}
 demoForm: FormGroup;
 nameLength: number;

 validationMessages = {
   'uname':  {
     'required': 'User name is required',
     'minlength': 'minimum length should be 2 characters',
     'maxlength': 'maximum length should be 7 characters'
   },
   'pass': {
     'required': 'password is required'
   },
   'skillName': {
     'required': 'skill name is required'
   },
   'experience': {'required': 'experience is required'},
   'proficiency': {'required': 'proficiency is required'}
 };

// this object will have form controls that have failed validation with messages. UI will bind with this object.
 formErrors = {
   'uname': '',
   'pass': '',
   'skillName': '',
   'experience': '',
   'proficiency': ''
 }

 ngOnInit() {
   this.demoForm = this.fb.group({
     uname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(7)]],
     pass: ['', Validators.required],
     skill: this.fb.group({
       skillName: ['', Validators.required],
       experience: ['', Validators.required],
       proficiency: ['', Validators.required]
     })
   });
   
   this.demoForm.valueChanges.subscribe(data => {
     this.logValidationMessages(this.demoForm);
   });
 }

 logValidationMessages(form: FormGroup = this.demoForm) {
    Object.keys(form.controls).forEach((key: string) => {
      const abstractControl = form.get(key);
      if(abstractControl instanceof FormGroup){
        this.logValidationMessages(abstractControl);
      } else{
        this.formErrors[key] = '';
        if(abstractControl && !abstractControl.valid){      // I want to add validation failing messages to formErrors
         //console.log(abstractControl.errors);
          //console.log(this.validationMessages[key]);
          for(const errorKey in abstractControl.errors){     // for/in - loops through properties of an object ie., in object required:true, it will loop through required
            if(errorKey){
              this.formErrors[key] += this.validationMessages[key][errorKey] + ' ';    //space is given to seperate the error messages by a space
            }
          }
        }
      }
    });
    
 }


 submit(){
   console.log(this.demoForm);
   console.log(this.nameLength);
 }
}
