import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form-service';

@Component({
    selector: 'app-builder-form',
    templateUrl: './builder-form.component.html',
    styleUrls: ['./builder-form.component.scss']
})
export class BuilderFormComponent implements OnInit {

    formAssess: FormGroup;
    showModal = false;
    currentFormQA: FormGroup;

    types = [
        { name: 'Paragraph', value: 'text' },
        { name: 'Checkbox List', value: 'dropdown' },
    ];

    list = new FormArray([]);

    constructor(private fb: FormBuilder, private formService: FormService, private router: Router) { }

    ngOnInit() {
        this.formAssess = this.initForm();
        this.formService.formData.subscribe(val => {
            if (val && val.length) {
                val.forEach(item => {
                    const formQA = this.createFormQA();
                    formQA.patchValue({ ...item })
                    this.formQA.push(formQA)
                })
            }
        })
    }

    get formQA() {

        return this.formAssess.get('ansquestions') as FormArray
    }

    initForm(): FormGroup {
        return this.fb.group({
            ansquestions: new FormArray([])
        })
    }

    createFormQA(): FormGroup {
        return this.fb.group({
            question: ['', Validators.required],
            answer: [],
            type: '',
        });
    }

    addFormQA() {
        this.showModal = true;
        this.currentFormQA = this.createFormQA();
        this.formQA.push(this.currentFormQA);
    }

    removeForm(index) {
        this.formQA.removeAt(index);
    }

    submitNewQA() {
        this.showModal = false;
    }

    navigateToView() {
        this.formService.formData.next(this.formQA.value)
        this.router.navigateByUrl('/form/answers')
    }

    closeDialog() {
        if (!this.formQA.valid) {
            this.formQA.controls.length = 0
        }
    }

    addCheckList() {
        this.list.push(new FormControl(''));
    }
}
