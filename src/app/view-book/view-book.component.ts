import { Component, OnInit } from '@angular/core';
import { BookDto } from '../models/books/book.dto';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent implements OnInit
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

  onDelete(id: number): void
  {
    this.bookService.deleteBook(id).subscribe({
      next: () => this.router.navigate(['/books']),
      error: (err) => console.log(err)
    })
  }
}
