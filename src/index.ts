import express from "express";
import swaggerUi from "swagger-ui-express";
import { specs } from "./config/swagger";
import { createRoutes } from "./interfaces/http/routes";
import { MySQLMemberRepository } from "./infrastructure/repositories/MySQLMemberRepository";
import { MySQLBookRepository } from "./infrastructure/repositories/MySQLBookRepository";
import { MemberController } from "./application/controllers/MemberController";
import { BookController } from "./application/controllers/BookController";
import { BorrowService } from "./domain/services/BorrowService";
import { ReturnService } from "./domain/services/ReturnService";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const memberRepo = new MySQLMemberRepository();
const bookRepo = new MySQLBookRepository();
const borrowService = new BorrowService(memberRepo, bookRepo);
const returnService = new ReturnService(memberRepo, bookRepo);

const memberController = new MemberController(memberRepo, borrowService, returnService);
const bookController = new BookController(bookRepo);

const routes = createRoutes(memberController, bookController);
app.use("/api", routes);

app.get("/", (req, res) => {
  res.json({ message: `Server is running on port ${process.env.PORT}` });
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
