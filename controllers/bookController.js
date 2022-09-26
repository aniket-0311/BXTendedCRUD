const bookModel = require("../model/bookModel");
const { validationResult } = require("express-validator");
const { createAuthToken } = require("../util/auth/jwt");

const createBook = async (req, res) => {
    try {
        let validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(422).json({
                error: validationErrors.array()[0],
                result: false,
            });
        };
        const { book_name, image_url, author, pages, price } = req.body;
        await bookModel.create({
            book_name,
            image_url,
            author, pages,
            price
        });

        const token = await createAuthToken(book_name, author)

        return res.status(200).json({
            msg: "Book created!",
            result: true,
            token
        })

    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            msg: "Internal server error",
            result: false
        })
    }
};

const getBookById = async (req, res) => {
    try {
        let validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(422).json({
                error: validationErrors.array()[0],
                result: false,
            });
        };
        const { book_id } = req.params;
        const getBook = await bookModel.findOne({ _id: book_id });
        if (!getBook) {
            return res.status(404).json({
                msg: "Book not found!",
                result: false,
            })
        }
        return res.status(200).json({
            msg: "Data fetched!",
            result: true,
            data: getBook
        });
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            msg: "Internal server error",
            result: false
        })
    }
};

const getAllBooks = async (req, res) => {
    try {
        let validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(422).json({
                error: validationErrors.array()[0],
                result: false,
            });
        };
        const getBookData = await bookModel.find({});
        if (!getBookData) {
            return res.status(404).json({
                msg: "Book not found!",
                result: false,
            })
        }
        return res.status(200).json({
            msg: "Data fetched!",
            result: true,
            data: getBookData
        });
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            msg: "Internal server error",
            result: false
        })
    }
};

const updateBook = async (req, res) => {
    try {
        let validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(422).json({
                error: validationErrors.array()[0],
                result: false,
            });
        };
        const { book_name, image_url, author, pages, price } = req.body;
        const{book_id} = req.params
        let obj = {
            book_name,
            image_url,
            author,
            pages,
            price
        }

        const updateBookdata = await bookModel.findOneAndUpdate({_id:book_id},obj)
        return res.status(200).json({
            msg: "Book updated!",
            result: true,
            updateBookdata
        })

    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            msg: "Internal server error",
            result: false
        })
    }
};


const deleteBookById = async (req, res) => {
    try {
        let validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(422).json({
                error: validationErrors.array()[0],
                result: false,
            });
        };
        const { book_id } = req.params;
        const data = await bookModel.findOneAndDelete({ _id: book_id });
        if (!data) {
            return res.status(404).json({
                msg: "Book not found!",
                result: false,
            })
        }
        return res.status(200).json({
            msg: "Book removed!",
            result: true,
        });
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            msg: "Internal server error",
            result: false
        })
    }
};

module.exports = { createBook, getBookById, getAllBooks, deleteBookById, updateBook }