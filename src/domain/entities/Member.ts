export class Member {
  constructor(public code: string, public name: string, public borrowedBooks: string[] = [], public penaltyEndDate: Date | null = null) {}

  canBorrow(): boolean {
    return this.borrowedBooks.length < 2 && !this.isPenalized();
  }

  isPenalized(): boolean {
    return this.penaltyEndDate !== null && this.penaltyEndDate > new Date();
  }
}
