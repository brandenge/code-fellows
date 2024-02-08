# Data Modeling

This subject is relevant because we are learning how to use PostgreSQL with Express so that we can use a SQL database as well as a NoSQL database with Express.

## NoSQL vs SQL

Source: [The Geek Stuff](https://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool)

### What type of database is the best fit for the complex query intensive environment?

SQL - a high number of transactions, or a need for very complex queries is best handled by SQL because it enforces a Schema, and the atomicity of each transaction, which preserves data integrity. The SQL language is also very powerful and catered to handling very complex queries.

### What type of database is the best fit for hierarchical data storage?

NoSQL - because NoSQL does not enforce a uniform schema for the documents being stored, and there are no tables or relations between tables (everything is stored as a key-value pair), the only way that a NoSQL database can structure its documents in any meaningful way is through a hierarchical structure, as if it was one big JSON object.

### Describe the differences in scalability between a SQL and NoSQL database as though you were speaking to a non-technical friend.

SQL is vertically scalable, which means that you have to increase the CPU, memory, and other hardware of the machine that the database is on in order to scale its capacity. There are obvious limitations though on how much hardware power can be added to a single machine.

NoSQL is horizontally scalable, which means that the way that it scales is to copy the database across more machines. It can also be vertically scaled just like a SQL database as well. So it is more flexible in terms of scaling.

## SQL Modeling Techniques

Source: [Essential SQL](https://www.essentialsql.com/get-ready-to-learn-sql-7-simplified-data-modeling/)

### Among data tables, what is a one-to-many relationship and how do we “relate” them?

A one-to-many relationship is when a a single record can have more than one of the same type of property. For example, a person can own multiple cars.

We make this relationship between database tables by pairing together the combination of a primary key and a foreign key. For a one-to-many relationship, the primary key could map to more than one foreign key. For example, you would have a "people" table that has a primary key (the id of each person), and a "cars" table, that has the foreign keys.

### Prior to designing your relational database, it might be useful to ___ a ___ of the database tables and their relationships.

Draw a diagram.

### Explain the difference between a primary and foreign key.

The primary key is what must be unique. It is identified by one of the columns of a table which must be unique, and is typically the "id" column.

The foreign key is what builds the relationship between two tables, mapping from the primary key. It is also identified as one of the columns of a table, but of a different table than the primary key. If the foreign key is also unique, then this creates a one-to-one relationship. If it does not need to be unique, then that would be a one-to-many. And if you can combine another one-to-many relationship from the opposite perspective, then you can create a many-to-many relationship by having a table in the middle to track all of the different primary key and foreign key combinations.

## SQL vs NoSQL

Source: [Academind YouTube Channel](https://www.youtube.com/watch?v=ZS_kXvOeQ5Y)

### How do we treat keywords and parameters differently in SQL syntax?

Keywords are written in all upper-case. Parameters are written in all lower-case. This makes the queries more readable.

### Define normalization within the context of schemas and data.

Normalization means standardizing the data and preventing duplicate entries of the same data. All data should only belong in one place. You can kind of think of it like applying the DRY principle (Don't Repeat Yourself) to databases instead of code.

### Explain the difference between one-to-one, one-to-many, and many-to-many relationships to a non-technical recruiter.

One-to-one - If one thing can only belong to or have only one other thing, that is a one-to-one relationship. For example, a person can only have one father.

One-to-many - If one thing can belong to or have multiple of another thing, that is a one-to-many relationship. For example, a person can have many cousins.

Many-to-many - If many things can belong to or have multiple of another thing, that is a many-to-many relationship. For example, there is a many-to-many relationship between customers and products. A customer can purchase many products. And a product can be purchased by many customers.
