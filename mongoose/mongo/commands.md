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
    ```
    db.<collection name>

    # example
    db.books
    ```
### Insert Value(s) into Collection
    - Create a new collection if doesn't exist

    ```
    # one value
    db.books.insertOne({title: "Burning", author: "xyzz", pages: 300, rating: 7, genres: ["mystery", "horror"]})

    # multiple values
    db.authors.insertMany([
        {name: 'John', age: 30},
        {name: 'zxcxc', age: 20}
    ])
    ```

###