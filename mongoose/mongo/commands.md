# Mongo Shell Commands

## Basic Navigation
   - show dbs
     - Show all database on the local mongo server
   - use <db name>
     - Switch to a database. Create new one if it doesn't exist
   -show collections
    - Show all collections in a database.
   - db
     - Show current database
   - cls
     - Clear screen
   - exit
     - Exit the shell

## Querying

### Create Collection
    
    db.<collection name>

    # example
    db.books
### Insert Value(s) into Collection 
    - Create a new collection if doesn't exist

    # one value
    db.books.insertOne({title: "Burning", author: "xyzz", pages: 300, rating: 7, genres: ["mystery", "horror"]})

    # multiple values
    db.books.insertMany([
        {title: 'The Light Fantastic', author: 'Terry Pratchett', pages: 250, rating: 6, genres: ['fantasy']}, 
        {title: 'Dune', author: 'Frank Herbert', pages: 500, rating: 10, genres: ['sci-fi', 'dystopian']}
    ])
    

### Find
    ```
    # find all documents and output first 20 documents
    db.books.find()

    # find one result only
    db.books.findOne({
        author: "Terry Pratchett"
    })

    # find with 1 condition
    db.books.find({
        author: "Terry Pratchett"
    })

    # find with more than 1 conditions
    db.books.find({
        author: "Terry Pratchett",
        rating: 4
    })
    ```

    ```
    # specify fields that the result returned
    db.books.find({author: "Terry Pratchett"},
        {title: 1, author: 1}
    )

    db.books.find({}, {author: 1, title: 1})
    ```

## Method Chaining
    ```
    # count after find
    # count amount of documents returned
    db.books.find({}).count()

    ```

    ```
    # limit number of documents returned
    db.books.find().limit(3)
    ```

    ```
    # sort the result returned
    # 1: sort in ascending order
    # -1: sort in descending order

    db.books.find().sort({title: 1})
    ```

## Nested Document
    ```
    # an example of nested document
    db.books.insertOne({
        title: 'The Way of Kings', 
        author: 'Brendon Sanderson', 
        rating: 9,
        pages: 400, 
        genres: ['fantasy'], 
        reviews: [
            {name: 'chewzzz', body: 'lorem lpusm hahahaha'}, 
            {name: 'mario', body: 'soso'}
        ] 
    })
    ```

## Operator
    ```
    $gt: greater than
    $gte: greater than or equal

    db.books.find({
        rating: {
            $gt: 7
        }
    })
    ```

    ```
    $lt: less than
    $lte: less than or equal

    db.books.find({
        rating: {
            $lt: 7
        }
    })
    ```


    ```
    $or: OR operator

    db.books.find({
        $or: [
            {rating: 7}, {rating: 9}
        ]
    })
    ```

    ```
    $in: In operator
    
    db.books.find({
        rating: {$in: [7, 8, 9]}
    })
    ```

    ```
    $nin: Not In operator

    db.books.find({
        rating: {$nin: [7, 8, 9]}
    })
    ```