import { Router } from "express";
import { MemberController } from "../../application/controllers/MemberController";
import { BookController } from "../../application/controllers/BookController";

/**
 * @swagger
 * /members:
 *   get:
 *     summary: Mendapatkan semua anggota
 *     responses:
 *       200:
 *         description: Daftar semua anggota
 *
 * /members/borrow:
 *   post:
 *     summary: Meminjam buku
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberCode:
 *                 type: string
 *               bookCode:
 *                 type: string
 *     responses:
 *       200:
 *         description: Buku berhasil dipinjam
 *
 * /members/return:
 *   post:
 *     summary: Mengembalikan buku
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberCode:
 *                 type: string
 *               bookCode:
 *                 type: string
 *     responses:
 *       200:
 *         description: Buku berhasil dikembalikan
 *
 * /books:
 *   get:
 *     summary: Mendapatkan semua buku
 *     responses:
 *       200:
 *         description: Daftar semua buku
 */
export function createRoutes(memberController: MemberController, bookController: BookController): Router {
  const router = Router();

  router.get("/members", memberController.getAllMembers.bind(memberController));
  router.post("/members/borrow", memberController.borrowBook.bind(memberController));
  router.post("/members/return", memberController.returnBook.bind(memberController));
  router.get("/books", bookController.getAllBooks.bind(bookController));

  return router;
}
