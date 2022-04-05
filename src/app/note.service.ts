import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { IToDo, notes } from './todos';
import { catchError, finalize, map, tap } from 'rxjs/operators';

export interface IServ {
  id: string;
  status: number;
  uri: string;
}

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  items$: BehaviorSubject<IToDo[]> = new BehaviorSubject<IToDo[]>([]);
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  //7c8fa3b7-af56-11ec-b95c-0242ac110002
  private api = 'https://api.jsonbin.io/b/6245db0cd96a510f028e0fba';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Master-Key':
        '$2b$10$NdGjxwqzLleydc3J0fU.D.7kJlBhCsvL.NGEBrkHsIaXZ3xmDvu9S',
    }),
  };

  constructor(private http: HttpClient) {}

  /** GET heroes from the server */
  loadTodos(): Observable<IToDo[]> {
    const todos = this.http.get<IToDo[]>(this.api + '/latest').pipe(
      map((response) => {
        this.updateItems(response);
        return response;
      }),
      catchError(this.handleError<IToDo[]>('getToDos', []))
    );

    // todos.subscribe((note) => {
    //   this.items = note;
    // });

    return todos;
  }

  addToDo(ToDo: IToDo): Observable<IToDo> {
    return this.http
      .post<IToDo>(this.api, ToDo, this.httpOptions)
      .pipe(catchError(this.handleError<IToDo>('addToDo')));
  }

  updateTodo(todo: IToDo): Observable<any> {
    this.loading$.next(true);
    const todos = [...this.getItems(), todo];
    return this.http.put(this.api, todos, this.httpOptions).pipe(
      map((response) => {
        // console.log('map', response.data);
        this.updateItems(todos);
        return response;
      }),
      finalize(() => {
        this.loading$.next(false);
      }),
      catchError(this.handleError<any>('updateToDo'))
    );
  }

  getItems(): IToDo[] {
    return this.items$.getValue();
  }

  getItems$(): BehaviorSubject<IToDo[]> {
    return this.items$;
  }

  getLoadingState(): BehaviorSubject<boolean> {
    return this.loading$;
  }

  private updateItems(data: IToDo[]): void {
    this.items$.next(data);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
