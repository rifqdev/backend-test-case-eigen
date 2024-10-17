export class Book {
  constructor(
    public code: string,
    public title: string,
    public author: string,
    public stock: number,
    public borrowedBy: string | null = null,
    public borrowedAt: Date | null = null
  ) {}

  isAvailable(): boolean {
    return this.stock > 0 && this.borrowedBy === null;
  }
}
