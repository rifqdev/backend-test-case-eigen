import { Request, Response } from "express";
import { MemberRepository } from "../../domain/repositories/MemberRepository";
import { BorrowService } from "../../domain/services/BorrowService";
import { ReturnService } from "../../domain/services/ReturnService";
import { Member } from "../../domain/entities/Member";

export class MemberController {
  constructor(private memberRepo: MemberRepository, private borrowService: BorrowService, private returnService: ReturnService) {}

  async getAllMembers(req: Request, res: Response): Promise<void> {
    const members = await this.memberRepo.getAll();
    res.json(members);
  }

  async borrowBook(req: Request, res: Response): Promise<void> {
    const { memberCode, bookCode } = req.body;
    const success = await this.borrowService.borrowBook(memberCode, bookCode);
    if (success) {
      res.status(200).json({ message: "Buku berhasil dipinjam" });
    } else {
      res.status(400).json({ message: "Gagal meminjam buku" });
    }
  }

  async returnBook(req: Request, res: Response): Promise<void> {
    const { memberCode, bookCode } = req.body;
    const success = await this.returnService.returnBook(memberCode, bookCode);
    if (success) {
      res.status(200).json({ message: "Buku berhasil dikembalikan" });
    } else {
      res.status(400).json({ message: "Gagal mengembalikan buku" });
    }
  }
}
