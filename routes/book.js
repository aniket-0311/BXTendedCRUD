const express = require("express");
const router = express.Router();
const { verifyToken } = require("../util/auth/jwt")
const bookController = require("../controllers/bookController");
const bookValidator = require("../util/validator/bookValidator")

router.post(
    "/create-book",
    bookValidator.registerBook,
    bookController.createBook
);

router.get(
    "/get-all-books",
    verifyToken,
    bookController.getAllBooks
);

router.get(
    "/get-book/:book_id",
    verifyToken,
    bookValidator.BookId,
    bookController.getBookById
);

router.put(
    "/update-book/:book_id",
    verifyToken,
    bookValidator.BookId,
    bookController.updateBook
);

router.delete(
    "/delete-book/:book_id",
    verifyToken,
    bookValidator.BookId,
    bookController.deleteBookById
);


module.exports = router;