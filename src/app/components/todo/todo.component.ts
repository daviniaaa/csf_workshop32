import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, ValidationErrors, Validators } from '@angular/forms';

// function nonPastDate(): ValidatorFn {
//   return (ctrl: AbstractControl): ValidationErrors | null => {
//     if (Date.now() < Date.parse(ctrl.value))
//       return (null)
//     return { nonPastDate: true } as ValidationErrors
//   }
// }

const nonPastDate = (ctrl: AbstractControl) => {
  if (Date.now() < Date.parse(ctrl.value))
    return (null)
  return { nonPastDate: true } as ValidationErrors
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todoForm!: FormGroup;

  constructor(private fb: FormBuilder) { } // create FormBuilder variable

  @Output() newTodo: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.todoForm = this.fb.group({ // binding the FormGroup variable to the FormBuilder
        description: this.fb.control<string>('', [ Validators.required, Validators.minLength(5) ]),
        priority: this.fb.control<string>('low'),
        due: this.fb.control<string>('', [ Validators.required , nonPastDate])
    });
  }

  processForm() {
    console.log(this.todoForm.value);
    console.log("description: " + this.todoForm.value.description);

    this.newTodo.emit(this.todoForm.value);

  }

}
