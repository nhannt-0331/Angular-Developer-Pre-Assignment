import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormService } from '../form-service';

@Component({
    selector: 'app-answer-form',
    templateUrl: './answer-form.component.html',
    styleUrls: ['./answer-form.component.scss']
})
export class AnswerFormComponent implements OnInit {
    QAForm: BehaviorSubject<any>
    constructor(private formService: FormService) { }

    ngOnInit(): void {
        this.QAForm = this.formService.formData
    }

}
