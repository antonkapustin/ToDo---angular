import { Component, ViewEncapsulation } from '@angular/core';
import { NoteService } from '../note.service';
import { IToDo, notes } from '../todos';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent {
  notes: IToDo[] = notes;
  sliderItems: { name: string; icon: string }[] = [
    { name: 'Bath', icon: 'bath' },
    { name: 'Cocktail', icon: 'cocktail' },
    { name: 'Bed', icon: 'bed' },
    { name: 'Train', icon: 'dumbbell' },
    { name: 'Work', icon: 'shopping-bag' },
  ];
  form = new FormGroup({
    about: new FormControl('', [Validators.required]),
    icon: new FormControl('', Validators.required),
  });

  constructor(private note: NoteService) {}

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    const data = this.form.value;

    let todo: IToDo = {
      name: 'Anton Kapustin',
      about: `${data.about}`,
      icon: `fas fa-${data.icon}`,
      time: `${new Date()}`,
      _id: '23235r2315123521',
    };

    // this.notes = this.note.getItems();
    // this.notes.push(todo);

    this.add(todo);
  }

  add(todo: IToDo): void {
    this.note.updateTodo(todo).subscribe(() => {
      this.form.reset();
    });
  }
}
