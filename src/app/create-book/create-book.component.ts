import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { BookDto } from '../models/books/book.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit
{
  book: BookDto = {
    id: 0,
    name: '',
    type: '',
    author: '',
    locked: false
  }
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void
  {
  }

  onSubmit(): void
  {
    this.bookService.createBook(this.book).subscribe({
      next: () => this.router.navigate(['/books']),
      error: (err) => console.log(err)
    })
  }
}
