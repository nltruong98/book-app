import { Component, OnInit } from '@angular/core';
import { BookDto } from '../models/books/book.dto';
import { BookService } from '../book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit
{
  book: BookDto = {
    id: 0,
    name: '',
    type: '',
    author: '',
    locked: false
  };
  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void
  {
    this.route.paramMap.subscribe((result) =>
    {
      let id = result.get('id')
      if (id)
      {
        this.bookService.getBookById(Number(id)).subscribe({
          next: (response) => this.book = response,
          error: (err) => console.log(err)
        })
      }
      else
      {
        // id not found
      }
    });
  }

  onSubmit(): void
  {
    this.bookService.updateBook(this.book).subscribe({
      next: () => this.router.navigate([`/books/view/${this.book.id}`]),
      error: (err) => console.log(err)
    })
  }
}
