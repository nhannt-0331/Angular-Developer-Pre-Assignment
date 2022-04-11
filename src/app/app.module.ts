import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { BuilderFormComponent } from './builder-form/builder-form.component';


@NgModule({
    declarations: [AppComponent, AnswerFormComponent, BuilderFormComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        DropdownModule,
        ButtonModule,
        DialogModule,
        BrowserAnimationsModule,
        InputTextareaModule,
        CheckboxModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
