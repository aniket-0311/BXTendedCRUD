# BXTendedCRUD

### APIs

1. ### Create Book
#### Endpoint http://localhost:9000/api/create-book
#### Method POST
#### Body

```json
{
    "book_name":"testbook2",
    "image_url":"https://saltlakemailing.com/wp-content/uploads/2014/02/Publish-Your-Book.jpg",
    "author":"testAuthor1",
    "pages":"500",
    "price":"650"
}
```
<hr>

***Send token in headers in "token" key for Authorization

2. ### Update Book
#### Endpoint http://localhost:9000/api/update-book/:book_id
#### Method PUT
#### Body

```json
{
    "book_name":"testbook2",
    "image_url":"https://saltlakemailing.com/wp-content/uploads/2014/02/Publish-Your-Book.jpg",
    "author":"testAuthor1",
    "pages":"500",
    "price":"650"
}
```
<hr>

3. ### Get All Books
#### Endpoint http://localhost:9000/api/get-all-books
#### Method GET

<hr>

4. ### Get Book By Id
#### Endpoint http://localhost:9000/api/get-book/:book_id
#### Method GET

<hr>

5. ### Delete Book By Id
#### Endpoint http://localhost:9000/api/delete-book/:book_id
#### Method DELETE

<hr>