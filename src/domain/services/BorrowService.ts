import { Member } from "../entities/Member";
import { Book } from "../entities/Book";
import { MemberRepository } from "../repositories/MemberRepository";
import { BookRepository } from "../repositories/BookRepository";

export class BorrowService {
  constructor(private memberRepo: MemberRepository, private bookRepo: BookRepository) {}

  async borrowBook(memberCode: string, bookCode: string): Promise<boolean> {
    const member = await this.memberRepo.findById(memberCode);
    const book = await this.bookRepo.findById(bookCode);

    if (!member || !book) {
      return false;
    }

    if (!member.canBorrow() || !book.isAvailable()) {
      return false;
    }

    member.borrowedBooks.push(bookCode);
    book.borrowedBy = memberCode;
    book.borrowedAt = new Date();
    book.stock--;

    await this.memberRepo.update(member);
    await this.bookRepo.update(book);

    return true;
  }
}
