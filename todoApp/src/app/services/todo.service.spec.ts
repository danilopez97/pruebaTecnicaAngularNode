import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { Observable } from 'rxjs';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });

});
