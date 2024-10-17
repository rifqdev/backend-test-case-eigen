import { Book } from "../../domain/entities/Book";
import { BookRepository } from "../../domain/repositories/BookRepository";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export class MySQLBookRepository implements BookRepository {
  private pool: mysql.Pool;

  constructor() {
    this.pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: parseInt(process.env.DB_PORT || "3306"),
      connectionLimit: 10,
    });
  }

  async findById(code: string): Promise<Book | null> {
    const [rows] = await this.pool.query<mysql.RowDataPacket[]>("SELECT * FROM books WHERE code = ?", [code]);
    if (rows.length === 0) return null;
    const book = rows[0];
    return new Book(book.code, book.title, book.author, book.stock, book.borrowed_by);
  }

  async update(book: Book): Promise<void> {
    await this.pool.query("UPDATE books SET title = ?, author = ?, stock = ?, borrowed_by = ?, borrowed_at = ? WHERE code = ?", [
      book.title,
      book.author,
      book.stock,
      book.borrowedBy,
      book.borrowedAt,
      book.code,
    ]);
  }

  async getAll(): Promise<Book[]> {
    const [rows] = await this.pool.query<mysql.RowDataPacket[]>("SELECT * FROM books");
    return rows.map((row) => new Book(row.code, row.title, row.author, row.stock, row.borrowed_by, row.borrowed_at));
  }
}
