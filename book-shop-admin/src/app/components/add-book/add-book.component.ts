import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {
  private book = { title: '', author: '' };

  constructor() { }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
