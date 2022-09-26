const {body,param} = require("express-validator");
const {ObjectId} = require("mongoose").Types;

exports.registerBook = [
    body("book_name").not().isEmpty().withMessage("Book Name required!"),
    body("image_url").not().isEmpty().withMessage("ImageUrl required!"),
    body("author").not().isEmpty().withMessage("Author required!"),
    body("pages").not().isEmpty().withMessage("Pages count required!"),
    body("price").not().isEmpty().withMessage("Price required!"),
];

exports.BookId = [
    param("book_id").custom(value=>{return ObjectId.isValid(value);}).withMessage("invalid id format")
]


