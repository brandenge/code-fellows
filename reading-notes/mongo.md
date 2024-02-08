# Mongo and Mongoose

Mongo and Mongoose are relevant to our learning because we are about to start using them to attach databases to our applications.

## Sql vs Nosql (reading)

Source: [The Geek Stuff](https://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool)

### What kind of data is a good fit for an SQL database?

1. Structured and non-hierarchical/non-nested data.
2. Data requiring complex queries.
3. Data requiring a high number of transactions. Especially a lot of write operations.
4. Data that must prioritize its integrity and accuracy more than its availability.
5. Rigid, pre-defined schema. Relationships between databases, tables, fields, and rows are all well-defined, uniform, and strictly enforced.
6. Generally less scalable for the size of its data sets.
7. Based on relations/schemas. For relational databases. There are dependencies between tables.
8. More centralized.
9. Data structure is more complex across multiple tables.
10. Constists of tables with fields (columns) and records (rows).

### Give a real world example.

Data sets that require a moderate or high number of join operations.

"The following examples are a non-exhaustive list of companies using SQL, Kaggle, Microsoft, Stack-overflow, Cisco, Walmart, Robinhood, Reddit, Uber, Netflix, Instagram, delivery hero, and Spotify."

Source: [Mohaned Mashaley - Medium article](https://mohaned-mashaly12.medium.com/use-cases-of-sql-and-nosql-when-to-use-what-52bf9688cf5c)

### What kind of data is a good fit a NoSQL database?

1. Unstructured or hierarchical/nested data.
2. Simple queries.
3. Lower number of transactions. Especially write operations, because every write operation needs to be copied across all the servers that have been horizontally scaled.
4. Data availability is more important than integrity.
5. Flexible, dynamic schema. Relationship between collections and documents not well defined, rigid, or strictly enforced. Documents (which are loosely the equivalent of a row) do not need to all have the same uniform fields or structure. This allows the data structure to naturally change and evolve over time.
6. Generally more scalable for the size of its data sets. Can handle huge data sets.
7. Not based on relations/schemas. For non-relational databases. There are no dependencies between collections.
8. More decentralized/distributed.
9. Data structure is more simple across a fewer number of collections.
10. Consists of collections of documents.

### Give a real world example.

Blogs or news media, such as The New York Times.

- Fraud detection and identity authentication
- Inventory and catalog management
- Personalization, recommendations and customer experience
- Internet of things (IoT) and sensor data
- Financial services and payments
- Messaging
- Logistics and asset management
- Content management systems
- Digital and media management

Source: [DataStax](https://www.datastax.com/blog/sql-vs-nosql-whats-the-difference)

"companies using NoSQL are Uber, Lyft, and delivery hero, Paytm, Accenture, Alibab travels."

Source: [Mohaned Mashaley - Medium article](https://mohaned-mashaly12.medium.com/use-cases-of-sql-and-nosql-when-to-use-what-52bf9688cf5c)

### Which type of database is best for hierarchical data storage?

SQL.

### Which type of database is best for scalability?

NoSQL.

## Sql vs Nosql (video)

Source: [Academind YouTube channel](https://www.youtube.com/watch?v=ZS_kXvOeQ5Y)

### What does SQL stand for?

Structured Query Language.

### What is a relational database?

A database that has defined relationships between tables, fields, and rows. This is the database's schema.

### What type of structure does a relational database work with?

Non-hierarchical structure.

### What is a ‘schema’?

The model of the data. The definition of the relationships between different data sets in tables.

### What is a NoSQL database?

A type of non-relational database. It does not use a schema.

### How does it work?

It stores data in a collection of documents, and uses its own query language, sometimes called UnQL (Unstructured Query Language), which is unique to each NoSQL database implementation.

### What is inside of a Mongo database?

Collections of documents, which contain the data. Collections are loosely analagous to tables, and documents loosely analgous to records/rows.

### Which is more flexible - SQL or MongoDB? and why.

MongoDB. Because it does not use a schema, the way the data is stored can change.

### What is the disadvantage of a NoSQL database?

It can't handle a ton of write operations, because that will not scale as it has to copy every write across every database server. It also cannot guarantee data integrity.

## Things I want to know more about

- Why is increasing the power of the CPU, RAM, SSD, hardware, etc. of a single server different than increasing the power by adding multiple servers? Why is scaling vertically vs horizontally in this way different?
