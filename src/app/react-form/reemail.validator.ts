import {AbstractControl, ValidationErrors} from "@angular/forms";

export function validationReemail(control: AbstractControl) :ValidationErrors | null {
  const root = control;
  const email = control.get('email'), reemail = control.get('reemail');
  if (!email || !reemail) return null;
  const emailVal = email.value, reemailVal = reemail.value;
  const result = emailVal === reemailVal ? null : {'emailNotMatch': true};
  return result;
}
