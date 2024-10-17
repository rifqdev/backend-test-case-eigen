import { Book } from "../entities/Book";

export interface BookRepository {
  findById(id: string): Promise<Book | null>;
  update(book: Book): Promise<void>;
  getAll(): Promise<Book[]>;
}
