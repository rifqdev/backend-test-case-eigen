import { Request, Response } from "express";
import { BookRepository } from "../../domain/repositories/BookRepository";
import { Book } from "../../domain/entities/Book";

export class BookController {
  constructor(private bookRepo: BookRepository) {}

  async getAllBooks(req: Request, res: Response): Promise<void> {
    const books = await this.bookRepo.getAll();
    res.json(books);
  }
}
