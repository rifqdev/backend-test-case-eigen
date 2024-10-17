import { Member } from "../../domain/entities/Member";
import { MemberRepository } from "../../domain/repositories/MemberRepository";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export class MySQLMemberRepository implements MemberRepository {
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

  async findById(code: string): Promise<Member | null> {
    const [rows] = await this.pool.query<mysql.RowDataPacket[]>("SELECT * FROM members WHERE code = ?", [code]);
    if (rows.length === 0) return null;
    const member = rows[0];
    return new Member(member.code, member.name, member.borrowed_books, member.penalty_end_date ? new Date(member.penalty_end_date) : null);
  }

  async update(member: Member): Promise<void> {
    await this.pool.query("UPDATE members SET name = ?, borrowed_books = ?, penalty_end_date = ? WHERE code = ?", [
      member.name,
      JSON.stringify(member.borrowedBooks),
      member.penaltyEndDate,
      member.code,
    ]);
  }

  async getAll(): Promise<Member[]> {
    const [rows] = await this.pool.query<mysql.RowDataPacket[]>("SELECT * FROM members");
    return rows.map((row) => new Member(row.code, row.name, row.borrowed_books, row.penalty_end_date ? new Date(row.penalty_end_date) : null));
  }
}
