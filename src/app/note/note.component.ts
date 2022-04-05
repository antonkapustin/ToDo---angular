import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NoteService } from '../note.service';
import { IToDo } from '../todos';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class NoteComponent implements OnInit {
  notesLoading$: BehaviorSubject<boolean> = this.noteService.getLoadingState();
  notes$: BehaviorSubject<IToDo[]> = this.noteService.getItems$();

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService.loadTodos().subscribe();
  }
}
