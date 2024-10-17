import { MemberRepository } from "../repositories/MemberRepository";
import { BookRepository } from "../repositories/BookRepository";

export class ReturnService {
  constructor(private memberRepo: MemberRepository, private bookRepo: BookRepository) {}

  async returnBook(memberCode: string, bookCode: string): Promise<boolean> {
    const member = await this.memberRepo.findById(memberCode);
    const book = await this.bookRepo.findById(bookCode);

    if (!member || !book) {
      return false;
    }

    if (book.borrowedBy !== memberCode) {
      return false;
    }

    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const isMoreThanSevenDays = book.borrowedAt && book.borrowedAt < sevenDaysAgo;

    if (isMoreThanSevenDays) {
      member.penaltyEndDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3 days from now
    }

    member.borrowedBooks = member.borrowedBooks.filter((code) => code !== bookCode);
    book.borrowedBy = null;
    book.stock++;

    await this.memberRepo.update(member);
    await this.bookRepo.update(book);

    return true;
  }
}
