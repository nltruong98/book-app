import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { BookDto } from './models/books/book.dto';

@Injectable({
  providedIn: 'root'
})
export class BookService
{
  private apiUrl = environment.apiUrl + "/Books";

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<BookDto[]>
  {
    return this.httpClient.get<BookDto[]>(this.apiUrl);
  }

  getBookById(id: number): Observable<BookDto>
  {
    return this.httpClient.get<BookDto>(`${this.apiUrl}/${id}`);
  }

  createBook(bookDto: BookDto): Observable<void>
  {
    return this.httpClient.post<void>(this.apiUrl, bookDto);
  }

  updateBook(bookDto: BookDto): Observable<void>
  {
    return this.httpClient.put<void>(`${this.apiUrl}/${bookDto.id}`, bookDto);
  }

  deleteBook(id: number): Observable<void>
  {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
