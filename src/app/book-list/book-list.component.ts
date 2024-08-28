import { Component, OnInit } from '@angular/core';
import { BookDto } from '../models/books/book.dto';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit
{
  books: BookDto[] = [];
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void
  {
    this.bookService.getBooks().subscribe({
      next: (response) =>
      {
        this.books = response
      },
      error: (err) =>
      {
        console.log(err)
      }
    })
  }

  onDelete(id: number): void
  {
    this.bookService.deleteBook(id).subscribe({
      next: () => this.ngOnInit(),
      error: (err) => console.log(err)
    })
  }
}
