import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private answersIds = new BehaviorSubject([]);
  currentAnswersIds = this.answersIds.asObservable();

  updateAnswersIds(ansIds: any = [2, 4, 7]) {
    this.answersIds.next(ansIds);
  }

  
  constructor() {}
}
