import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  formData = new BehaviorSubject(null);
  
  constructor() { }
}
