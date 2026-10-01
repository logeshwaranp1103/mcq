// ==========================================
window.TOPICS = window.TOPICS || {};
window.TOPICS["basic_dbms"] = {
  "id": "basic_dbms",
  "level": "basic",
  "title": "DBMS",
  "icon": "🗄️",
  "description": "250 comprehensive database management questions covering architecture, ER modeling, relational algebra, SQL queries, normalization, ACID transactions, concurrency, recovery, and indexing.",
  "questions": [
    {
      "id": 1,
      "subtopic": "Introduction & Architecture",
      "question": "What does DBMS stand for?",
      "options": {
        "A": "Distributed Base Management Software",
        "B": "Database Management System",
        "C": "Data Backup Management System",
        "D": "Database Monitoring System",
        "E": "Data Block Management System",
        "F": "Database Model Management Solution"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Database Management System'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 2,
      "subtopic": "Introduction & Architecture",
      "question": "What is the main advantage of DBMS over traditional file systems?",
      "options": {
        "A": "Increases manual data entry",
        "B": "Reduces data redundancy and improves data consistency",
        "C": "Eliminates the need for storage",
        "D": "Only works with text files",
        "E": "Removes the need for backups",
        "F": "Increases data redundancy intentionally"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Reduces data redundancy and improves data consistency'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 3,
      "subtopic": "Introduction & Architecture",
      "question": "Which of these is a key difference between DBMS and RDBMS?",
      "options": {
        "A": "RDBMS cannot enforce relationships at all",
        "B": "DBMS supports ACID but RDBMS does not",
        "C": "They are functionally identical with no difference",
        "D": "DBMS always uses tables like RDBMS",
        "E": "RDBMS does not support SQL",
        "F": "RDBMS stores data in tables with relationships enforced via keys, while DBMS may not"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'RDBMS stores data in tables with relationships enforced via keys, while DBMS may not'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 4,
      "subtopic": "Introduction & Architecture",
      "question": "In the three-tier database architecture, which tier handles the business logic between the user interface and the database?",
      "options": {
        "A": "Database tier",
        "B": "None of these",
        "C": "Presentation tier",
        "D": "Physical tier",
        "E": "Application (middle) tier",
        "F": "External tier"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'Application (middle) tier'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 5,
      "subtopic": "Introduction & Architecture",
      "question": "Which level of data abstraction describes how data is actually stored on physical media?",
      "options": {
        "A": "Logical level",
        "B": "View level",
        "C": "Conceptual level",
        "D": "None of these",
        "E": "Physical level",
        "F": "External level"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'Physical level'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 6,
      "subtopic": "Introduction & Architecture",
      "question": "Which level of data abstraction describes what data is stored and the relationships among the data, without physical storage details?",
      "options": {
        "A": "Application level",
        "B": "View level",
        "C": "User level",
        "D": "Logical (Conceptual) level",
        "E": "None of these",
        "F": "Physical level"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'Logical (Conceptual) level'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 7,
      "subtopic": "Introduction & Architecture",
      "question": "Which level of data abstraction defines how different user groups see only a part of the entire database?",
      "options": {
        "A": "None of these",
        "B": "View (External) level",
        "C": "Logical level",
        "D": "Physical level",
        "E": "Internal level",
        "F": "Conceptual level"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'View (External) level'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 8,
      "subtopic": "Introduction & Architecture",
      "question": "What does logical data independence refer to?",
      "options": {
        "A": "The ability to change physical storage without affecting the logical schema",
        "B": "The independence of users from the DBA",
        "C": "The ability to change the logical schema without affecting application programs",
        "D": "The independence of hardware from software",
        "E": "The inability to change any schema",
        "F": "None of these"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'The ability to change the logical schema without affecting application programs'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 9,
      "subtopic": "Introduction & Architecture",
      "question": "What does physical data independence refer to?",
      "options": {
        "A": "The ability to change the logical schema without affecting the physical schema",
        "B": "The ability to change the physical storage schema without affecting the logical schema",
        "C": "Independence of network protocols",
        "D": "None of these",
        "E": "The inability to change storage at all",
        "F": "Independence between two separate databases"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'The ability to change the physical storage schema without affecting the logical schema'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 10,
      "subtopic": "Introduction & Architecture",
      "question": "Who is responsible for managing and maintaining a database, including defining schemas and controlling access?",
      "options": {
        "A": "System Analyst only",
        "B": "End User",
        "C": "Database Administrator (DBA)",
        "D": "Network Administrator",
        "E": "Application Programmer",
        "F": "Data Entry Operator"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'Database Administrator (DBA)'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 11,
      "subtopic": "Introduction & Architecture",
      "question": "Which component of a DBMS translates user queries into low-level instructions the database engine understands?",
      "options": {
        "A": "Transaction Manager",
        "B": "Buffer Manager",
        "C": "Storage Manager",
        "D": "File Manager",
        "E": "Recovery Manager",
        "F": "Query Processor"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'Query Processor'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 12,
      "subtopic": "Introduction & Architecture",
      "question": "Which component of a DBMS manages the allocation of storage space and data structures used to represent data on disk?",
      "options": {
        "A": "Query Processor",
        "B": "DDL Interpreter exclusively",
        "C": "Recovery Manager exclusively",
        "D": "Storage Manager",
        "E": "Buffer Manager exclusively",
        "F": "Transaction Manager"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'Storage Manager'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 13,
      "subtopic": "Introduction & Architecture",
      "question": "What is a schema in the context of a database?",
      "options": {
        "A": "A backup copy of the database",
        "B": "A single query result",
        "C": "A user account",
        "D": "The overall logical structure/design of the database",
        "E": "A network protocol",
        "F": "A single row of data"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'The overall logical structure/design of the database'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 14,
      "subtopic": "Introduction & Architecture",
      "question": "What is an instance of a database?",
      "options": {
        "A": "The schema definition only",
        "B": "The DBMS software itself",
        "C": "The actual data stored in the database at a particular moment in time",
        "D": "A stored procedure",
        "E": "A query language",
        "F": "A user interface"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'The actual data stored in the database at a particular moment in time'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 15,
      "subtopic": "Introduction & Architecture",
      "question": "Which of the following is an example of a popular relational DBMS?",
      "options": {
        "A": "Neo4j",
        "B": "MongoDB",
        "C": "MySQL",
        "D": "Cassandra",
        "E": "Redis",
        "F": "HBase"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'MySQL'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 16,
      "subtopic": "Introduction & Architecture",
      "question": "Which of the following is an example of a popular NoSQL database rather than a relational DBMS?",
      "options": {
        "A": "MySQL",
        "B": "SQLite",
        "C": "SQL Server",
        "D": "Oracle Database",
        "E": "MongoDB",
        "F": "PostgreSQL"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'MongoDB'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 17,
      "subtopic": "Introduction & Architecture",
      "question": "What is metadata in a database context?",
      "options": {
        "A": "A type of query language",
        "B": "A backup file only",
        "C": "A hardware component",
        "D": "A network protocol",
        "E": "Data that describes other data, such as schema definitions and constraints",
        "F": "The actual data records stored by users"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'Data that describes other data, such as schema definitions and constraints'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 18,
      "subtopic": "Introduction & Architecture",
      "question": "What is the primary purpose of a Data Dictionary in a DBMS?",
      "options": {
        "A": "To store only backup files",
        "B": "To store metadata about database objects such as tables, columns, and constraints",
        "C": "To replace the need for schemas",
        "D": "To store user passwords in plain text",
        "E": "To store actual user data",
        "F": "To store network configuration"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'To store metadata about database objects such as tables, columns, and constraints'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 19,
      "subtopic": "Introduction & Architecture",
      "question": "Which of these best describes a centralized database system?",
      "options": {
        "A": "All data is stored and managed at a single location/site",
        "B": "Data is stored only in flat files",
        "C": "Data exists only in memory",
        "D": "Data is replicated across every user's device",
        "E": "Data is distributed across multiple independent sites",
        "F": "Data has no central management"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'All data is stored and managed at a single location/site'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 20,
      "subtopic": "Introduction & Architecture",
      "question": "Which of these best summarizes the overall goal of a DBMS?",
      "options": {
        "A": "To only store data without any retrieval capability",
        "B": "To replace all application software",
        "C": "To serve only as a backup utility",
        "D": "To function only as a file compression tool",
        "E": "To eliminate the need for data models",
        "F": "To efficiently store, retrieve, and manage data while ensuring integrity, security, and concurrent access"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'To efficiently store, retrieve, and manage data while ensuring integrity, security, and concurrent access'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 21,
      "subtopic": "Entity-Relationship (ER) Model",
      "question": "In the ER model, what does an 'entity' represent?",
      "options": {
        "A": "A relationship between two tables",
        "B": "A query result",
        "C": "A real-world object or concept that can be distinctly identified",
        "D": "A stored procedure",
        "E": "A constraint",
        "F": "A column in a table"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'A real-world object or concept that can be distinctly identified'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 22,
      "subtopic": "Entity-Relationship (ER) Model",
      "question": "In the ER model, what does an 'attribute' represent?",
      "options": {
        "A": "A network protocol",
        "B": "A type of query",
        "C": "A user role",
        "D": "A property or characteristic of an entity",
        "E": "A database schema",
        "F": "A relationship between entities"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'A property or characteristic of an entity'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 23,
      "subtopic": "Entity-Relationship (ER) Model",
      "question": "What is a 'relationship' in the ER model?",
      "options": {
        "A": "A view",
        "B": "A trigger",
        "C": "An association among two or more entities",
        "D": "A type of index",
        "E": "A stored procedure",
        "F": "A single column value"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'An association among two or more entities'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 24,
      "subtopic": "Entity-Relationship (ER) Model",
      "question": "Which type of attribute can be broken down into smaller sub-parts, such as an address split into street, city, and zip?",
      "options": {
        "A": "Simple (atomic) attribute",
        "B": "Null attribute",
        "C": "Key attribute only",
        "D": "Composite attribute",
        "E": "Multivalued attribute",
        "F": "Derived attribute"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'Composite attribute'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 25,
      "subtopic": "Entity-Relationship (ER) Model",
      "question": "Which type of attribute can hold multiple values for a single entity, such as a person having multiple phone numbers?",
      "options": {
        "A": "Composite attribute",
        "B": "Derived attribute",
        "C": "Multivalued attribute",
        "D": "Stored attribute",
        "E": "Key attribute only",
        "F": "Simple attribute"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'Multivalued attribute'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 26,
      "subtopic": "Entity-Relationship (ER) Model",
      "question": "Which type of attribute's value can be calculated from other attributes, such as age derived from date of birth?",
      "options": {
        "A": "Stored attribute",
        "B": "Simple attribute",
        "C": "Derived attribute",
        "D": "Multivalued attribute",
        "E": "Key attribute",
        "F": "Composite attribute"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'Derived attribute'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 27,
      "subtopic": "Entity-Relationship (ER) Model",
      "question": "What does 'cardinality' describe in an ER relationship?",
      "options": {
        "A": "The number of foreign keys",
        "B": "The number of tables in a database",
        "C": "The number of instances of one entity that can be associated with instances of another entity",
        "D": "The size of a database in bytes",
        "E": "The number of attributes an entity has",
        "F": "The number of primary keys"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'The number of instances of one entity that can be associated with instances of another entity'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 28,
      "subtopic": "Entity-Relationship (ER) Model",
      "question": "In ER modeling, what does 'total participation' of an entity in a relationship mean?",
      "options": {
        "A": "The entity has no attributes",
        "B": "Every instance of the entity must participate in at least one relationship instance",
        "C": "The entity is automatically a weak entity",
        "D": "The relationship has no cardinality",
        "E": "No instance of the entity participates in the relationship",
        "F": "Only some instances participate optionally"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Every instance of the entity must participate in at least one relationship instance'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 29,
      "subtopic": "Entity-Relationship (ER) Model",
      "question": "What is a weak entity in the ER model?",
      "options": {
        "A": "An entity that cannot be uniquely identified by its own attributes alone and depends on a related (owner) entity",
        "B": "An entity that has no primary key requirement ever",
        "C": "An entity with only one relationship",
        "D": "An entity used only for logging",
        "E": "An entity that exists only temporarily",
        "F": "An entity with no attributes at all"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'An entity that cannot be uniquely identified by its own attributes alone and depends on a related (owner) entity'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 30,
      "subtopic": "Entity-Relationship (ER) Model",
      "question": "What is a strong entity in the ER model?",
      "options": {
        "A": "An entity with no attributes",
        "B": "An entity that only exists in memory",
        "C": "An entity that depends on another entity for identification",
        "D": "An entity that can be uniquely identified by its own attributes, independent of other entities",
        "E": "An entity that has no primary key",
        "F": "An entity used only for weak relationships"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'An entity that can be uniquely identified by its own attributes, independent of other entities'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 31,
      "subtopic": "Entity-Relationship (ER) Model",
      "question": "In the Enhanced ER (EER) model, what does 'generalization' refer to?",
      "options": {
        "A": "Converting an entity into an attribute",
        "B": "Splitting one entity into many unrelated entities",
        "C": "Removing all relationships from an entity",
        "D": "Deleting redundant attributes",
        "E": "Renaming an entity",
        "F": "Combining multiple lower-level entities that share common attributes into a higher-level, more general entity"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'Combining multiple lower-level entities that share common attributes into a higher-level, more general entity'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 32,
      "subtopic": "Entity-Relationship (ER) Model",
      "question": "In the Enhanced ER (EER) model, what does 'specialization' refer to?",
      "options": {
        "A": "Dividing a higher-level entity into lower-level, more specific sub-entities based on distinguishing characteristics",
        "B": "Merging two databases",
        "C": "Deleting an entity entirely",
        "D": "Removing attributes from an entity",
        "E": "Converting a relationship into an entity",
        "F": "Combining multiple entities into one general entity"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'Dividing a higher-level entity into lower-level, more specific sub-entities based on distinguishing characteristics'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 33,
      "subtopic": "Entity-Relationship (ER) Model",
      "question": "What does 'aggregation' represent in the EER model?",
      "options": {
        "A": "Splitting an entity into sub-entities",
        "B": "Treating a relationship (along with its participating entities) as a higher-level entity for further relationships",
        "C": "Converting an attribute into an entity",
        "D": "Combining two unrelated entities into one",
        "E": "Renaming a relationship",
        "F": "Removing a relationship entirely"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Treating a relationship (along with its participating entities) as a higher-level entity for further relationships'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 34,
      "subtopic": "Entity-Relationship (ER) Model",
      "question": "In an ER diagram, which shape is conventionally used to represent an entity?",
      "options": {
        "A": "Circle",
        "B": "Rectangle",
        "C": "Diamond",
        "D": "Triangle",
        "E": "Hexagon",
        "F": "Oval"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Rectangle'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 35,
      "subtopic": "Entity-Relationship (ER) Model",
      "question": "In an ER diagram, which shape is conventionally used to represent a relationship?",
      "options": {
        "A": "Triangle",
        "B": "Diamond",
        "C": "Hexagon",
        "D": "Circle",
        "E": "Rectangle",
        "F": "Oval"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Diamond'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 36,
      "subtopic": "Entity-Relationship (ER) Model",
      "question": "In an ER diagram, which shape is conventionally used to represent an attribute?",
      "options": {
        "A": "Circle",
        "B": "Hexagon",
        "C": "Rectangle",
        "D": "Triangle",
        "E": "Diamond",
        "F": "Oval (Ellipse)"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'Oval (Ellipse)'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 37,
      "subtopic": "Entity-Relationship (ER) Model",
      "question": "What is a recursive relationship in the ER model?",
      "options": {
        "A": "A relationship that cannot be represented in an ER diagram",
        "B": "A relationship between three or more different entities",
        "C": "A relationship with no cardinality",
        "D": "A relationship that repeats indefinitely with no meaning",
        "E": "A relationship reserved only for weak entities",
        "F": "A relationship where an entity is related to itself, such as an Employee 'manages' relationship to another Employee"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'A relationship where an entity is related to itself, such as an Employee 'manages' relationship to another Employee'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 38,
      "subtopic": "Entity-Relationship (ER) Model",
      "question": "What is the process of converting an ER diagram into relational tables generally called?",
      "options": {
        "A": "Denormalization",
        "B": "Query Optimization",
        "C": "ER-to-Relational Mapping",
        "D": "Normalization",
        "E": "Schema Refactoring",
        "F": "Data Replication"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'ER-to-Relational Mapping'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 39,
      "subtopic": "Entity-Relationship (ER) Model",
      "question": "In ER-to-relational mapping, how is a weak entity typically represented in the resulting table?",
      "options": {
        "A": "By converting it into an attribute",
        "B": "By including the primary key of its owner (strong) entity as part of its own key, alongside a partial key",
        "C": "By making it a standalone table with no foreign key",
        "D": "By merging it directly into the owner's table always",
        "E": "By discarding the weak entity from the schema",
        "F": "By ignoring the owner entity entirely"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'By including the primary key of its owner (strong) entity as part of its own key, alongside a partial key'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 40,
      "subtopic": "Entity-Relationship (ER) Model",
      "question": "Which of these best describes a many-to-many relationship between two entities, when mapped to relational tables?",
      "options": {
        "A": "It is always converted into a one-to-one relationship",
        "B": "It cannot be represented in a relational database",
        "C": "It can always be represented using a single foreign key column",
        "D": "It is ignored during mapping",
        "E": "It typically requires a separate junction (bridge) table to represent the relationship",
        "F": "It requires deleting one of the entities"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'It typically requires a separate junction (bridge) table to represent the relationship'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 41,
      "subtopic": "Relational Model & Constraints",
      "question": "In the relational model, what is a 'relation' commonly referred to as in everyday database terminology?",
      "options": {
        "A": "A column",
        "B": "A view",
        "C": "A schema",
        "D": "A table",
        "E": "A row",
        "F": "An index"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'A table'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 42,
      "subtopic": "Relational Model & Constraints",
      "question": "In the relational model, what is a 'tuple' commonly referred to as?",
      "options": {
        "A": "A view",
        "B": "A primary key",
        "C": "A column (field) in a table",
        "D": "An entire table",
        "E": "A row (record) in a table",
        "F": "A database schema"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'A row (record) in a table'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 43,
      "subtopic": "Relational Model & Constraints",
      "question": "In the relational model, what is an 'attribute' commonly referred to as?",
      "options": {
        "A": "A tuple",
        "B": "A row in a table",
        "C": "An entire table",
        "D": "A database",
        "E": "A relation",
        "F": "A column (field) in a table"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'A column (field) in a table'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 44,
      "subtopic": "Relational Model & Constraints",
      "question": "What is a candidate key?",
      "options": {
        "A": "A key with no constraints",
        "B": "A key used only for foreign key references",
        "C": "A key that always contains duplicate values",
        "D": "Any attribute that is not unique",
        "E": "A minimal set of attributes that can uniquely identify a tuple in a relation",
        "F": "A key used only in weak entities"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'A minimal set of attributes that can uniquely identify a tuple in a relation'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 45,
      "subtopic": "Relational Model & Constraints",
      "question": "What is a primary key?",
      "options": {
        "A": "A key that must always be a composite key",
        "B": "A key used only for indexing purposes",
        "C": "Any key that can contain duplicate values",
        "D": "A foreign key by another name",
        "E": "A key with no uniqueness requirement",
        "F": "The candidate key chosen by the designer to uniquely identify tuples, and it cannot contain NULL values"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'The candidate key chosen by the designer to uniquely identify tuples, and it cannot contain NULL values'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 46,
      "subtopic": "Relational Model & Constraints",
      "question": "What is a super key?",
      "options": {
        "A": "A key that must always be NULL",
        "B": "A key that is always exactly one attribute",
        "C": "A key that never uniquely identifies rows",
        "D": "A set of attributes that can uniquely identify a tuple, possibly including extra attributes beyond a minimal candidate key",
        "E": "A key used only for indexing",
        "F": "A synonym for a foreign key"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'A set of attributes that can uniquely identify a tuple, possibly including extra attributes beyond a minimal candidate key'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 47,
      "subtopic": "Relational Model & Constraints",
      "question": "What is a foreign key?",
      "options": {
        "A": "A key that must always be unique within its own table",
        "B": "A key with no relationship to any other table",
        "C": "A key that can never reference another table",
        "D": "An attribute (or set of attributes) in one relation that references the primary key of another (or the same) relation",
        "E": "A key used only for sorting",
        "F": "A synonym for a primary key"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'An attribute (or set of attributes) in one relation that references the primary key of another (or the same) relation'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 48,
      "subtopic": "Relational Model & Constraints",
      "question": "What is a composite key?",
      "options": {
        "A": "A key that always contains NULL values",
        "B": "A key that is never used as a primary key",
        "C": "A key that consists of exactly one attribute",
        "D": "A key used only in NoSQL databases",
        "E": "A synonym for a foreign key",
        "F": "A primary key made up of two or more attributes that together uniquely identify a tuple"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'A primary key made up of two or more attributes that together uniquely identify a tuple'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 49,
      "subtopic": "Relational Model & Constraints",
      "question": "What is an alternate key?",
      "options": {
        "A": "A candidate key that was not selected as the primary key",
        "B": "The only key allowed in a table",
        "C": "A key that cannot uniquely identify rows",
        "D": "A synonym for a foreign key",
        "E": "A key that must always be NULL",
        "F": "A key used only for indexing purposes"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'A candidate key that was not selected as the primary key'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 50,
      "subtopic": "Relational Model & Constraints",
      "question": "What is a surrogate key?",
      "options": {
        "A": "A key derived directly from a real-world business attribute",
        "B": "A composite key made of business attributes",
        "C": "A key that must always reference another table",
        "D": "An artificially generated key (often a sequential number) used as a primary key, with no business meaning",
        "E": "A key used only for foreign key relationships",
        "F": "A key that duplicates the primary key of another table"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'An artificially generated key (often a sequential number) used as a primary key, with no business meaning'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 51,
      "subtopic": "Relational Model & Constraints",
      "question": "What does the 'entity integrity' constraint require in a relational database?",
      "options": {
        "A": "Every attribute must be indexed",
        "B": "All tables must have at least one relationship",
        "C": "Foreign keys must always reference a valid primary key",
        "D": "The primary key of a relation cannot contain NULL values",
        "E": "Data types must match across all tables",
        "F": "All attributes must be unique"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'The primary key of a relation cannot contain NULL values'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 52,
      "subtopic": "Relational Model & Constraints",
      "question": "What does the 'referential integrity' constraint require in a relational database?",
      "options": {
        "A": "Every attribute must have a default value",
        "B": "NULL values are never allowed anywhere",
        "C": "All foreign keys must be unique across the entire database",
        "D": "Tables cannot have any relationships",
        "E": "A foreign key value must either match an existing primary key value in the referenced table or be NULL",
        "F": "All primary keys must be composite"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'A foreign key value must either match an existing primary key value in the referenced table or be NULL'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 53,
      "subtopic": "Relational Model & Constraints",
      "question": "What happens when you try to insert a row with a foreign key value that does not exist in the referenced table's primary key column, and NULL is not allowed?",
      "options": {
        "A": "The foreign key constraint is silently ignored",
        "B": "A new table is automatically created",
        "C": "The row is inserted successfully with a warning only",
        "D": "The primary key of the referenced table is deleted",
        "E": "A referential integrity violation occurs, and the insert is typically rejected",
        "F": "The referenced table is automatically updated to include the new value"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'A referential integrity violation occurs, and the insert is typically rejected'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 54,
      "subtopic": "Relational Model & Constraints",
      "question": "What is a 'domain' in the relational model?",
      "options": {
        "A": "A synonym for a schema",
        "B": "The set of allowable/valid values for a given attribute",
        "C": "A synonym for a database",
        "D": "A synonym for a table",
        "E": "A type of index",
        "F": "A type of key"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'The set of allowable/valid values for a given attribute'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 55,
      "subtopic": "Relational Model & Constraints",
      "question": "What does it mean for a relation to have 'atomic' attribute values, a key requirement of the relational model?",
      "options": {
        "A": "Each attribute must reference another table",
        "B": "Each attribute must contain multiple values",
        "C": "Each attribute value must be indivisible (a single value, not a set or list)",
        "D": "Each attribute must be a foreign key",
        "E": "Each attribute must be NULL by default",
        "F": "Each attribute must be a composite value"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'Each attribute value must be indivisible (a single value, not a set or list)'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 56,
      "subtopic": "Relational Model & Constraints",
      "question": "What is the degree of a relation in the relational model?",
      "options": {
        "A": "The number of attributes (columns) in the relation",
        "B": "The number of views based on the table",
        "C": "The number of indexes on the table",
        "D": "The number of tuples (rows) in the relation",
        "E": "The number of keys in the relation",
        "F": "The number of relationships the table participates in"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'The number of attributes (columns) in the relation'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 57,
      "subtopic": "Relational Model & Constraints",
      "question": "What is the cardinality of a relation in the relational model?",
      "options": {
        "A": "The number of foreign keys",
        "B": "The number of NULL values",
        "C": "The number of tuples (rows) currently in the relation",
        "D": "The number of indexes",
        "E": "The number of views",
        "F": "The number of attributes (columns) in the relation"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'The number of tuples (rows) currently in the relation'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 58,
      "subtopic": "Relational Model & Constraints",
      "question": "Can a relation (table) in the relational model theoretically have duplicate tuples (rows), by strict definition?",
      "options": {
        "A": "No; a relation is theoretically a set of tuples and cannot have duplicates, though SQL tables in practice often allow them",
        "B": "Yes, but only if there is no primary key, and this is the standard behavior in theory too",
        "C": "No, but only because of the primary key constraint, disregarding relational theory",
        "D": "It depends only on the database vendor with no theoretical basis",
        "E": "Duplicates are irrelevant to the relational model",
        "F": "Yes, duplicates are always required"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'No; a relation is theoretically a set of tuples and cannot have duplicates, though SQL tables in practice often allow them'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 59,
      "subtopic": "Relational Model & Constraints",
      "question": "What is referential integrity most concerned with maintaining, across related tables?",
      "options": {
        "A": "Consistency of data types within a single column",
        "B": "Consistency of user permissions",
        "C": "Consistency of index structures",
        "D": "Uniqueness of every attribute in a database",
        "E": "Consistency of query execution plans",
        "F": "Consistency of relationships between tables via foreign key and primary key matching"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'Consistency of relationships between tables via foreign key and primary key matching'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 60,
      "subtopic": "Relational Model & Constraints",
      "question": "Which of the following is commonly configured for a foreign key to automatically handle deletion of a referenced parent row?",
      "options": {
        "A": "UNION ALL",
        "B": "SELECT DISTINCT",
        "C": "ON DELETE CASCADE (or SET NULL)",
        "D": "GROUP BY",
        "E": "HAVING",
        "F": "ORDER BY"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'ON DELETE CASCADE (or SET NULL)'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 61,
      "subtopic": "Relational Algebra & Calculus",
      "question": "Which relational algebra operation selects a subset of rows from a relation that satisfy a given condition?",
      "options": {
        "A": "Selection",
        "B": "Projection",
        "C": "Union",
        "D": "Rename",
        "E": "Division",
        "F": "Join"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'Selection'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 62,
      "subtopic": "Relational Algebra & Calculus",
      "question": "Which relational algebra operation selects a subset of columns (attributes) from a relation?",
      "options": {
        "A": "Union",
        "B": "Projection",
        "C": "Selection",
        "D": "Join",
        "E": "Division",
        "F": "Rename"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Projection'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 63,
      "subtopic": "Relational Algebra & Calculus",
      "question": "Which relational algebra operation combines tuples from two relations that have the same schema, removing duplicates?",
      "options": {
        "A": "Join",
        "B": "Selection",
        "C": "Division",
        "D": "Cartesian Product",
        "E": "Projection",
        "F": "Union"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'Union'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 64,
      "subtopic": "Relational Algebra & Calculus",
      "question": "Which relational algebra operation returns tuples present in one relation but not in another, given the same schema?",
      "options": {
        "A": "Union",
        "B": "Set Difference",
        "C": "Projection",
        "D": "Division",
        "E": "Selection",
        "F": "Join"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Set Difference'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 65,
      "subtopic": "Relational Algebra & Calculus",
      "question": "Which relational algebra operation combines every tuple of one relation with every tuple of another relation?",
      "options": {
        "A": "Selection",
        "B": "Cartesian Product",
        "C": "Natural Join",
        "D": "Projection",
        "E": "Union",
        "F": "Division"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Cartesian Product'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 66,
      "subtopic": "Relational Algebra & Calculus",
      "question": "Which type of join combines two relations based on equality of attributes with the same name, automatically removing duplicate columns?",
      "options": {
        "A": "Outer Join",
        "B": "Semi-Join",
        "C": "Anti-Join",
        "D": "Theta Join",
        "E": "Cartesian Product",
        "F": "Natural Join"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'Natural Join'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 67,
      "subtopic": "Relational Algebra & Calculus",
      "question": "Which type of join combines two relations based on a general condition using any comparison operator, not just equality?",
      "options": {
        "A": "Cartesian Product only",
        "B": "Natural Join",
        "C": "Outer Join",
        "D": "Equi Join",
        "E": "Theta Join",
        "F": "Anti-Join"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'Theta Join'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 68,
      "subtopic": "Relational Algebra & Calculus",
      "question": "Which type of join is a special case of a theta join that uses only the equality operator for the join condition?",
      "options": {
        "A": "Anti-Join",
        "B": "Cartesian Product",
        "C": "Outer Join",
        "D": "Semi-Join",
        "E": "Natural Join",
        "F": "Equi Join"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'Equi Join'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 69,
      "subtopic": "Relational Algebra & Calculus",
      "question": "Which relational algebra operation is analogous to finding values in one relation that are associated with every value in another relation?",
      "options": {
        "A": "Cartesian Product",
        "B": "Join",
        "C": "Projection",
        "D": "Union",
        "E": "Division",
        "F": "Selection"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'Division'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 70,
      "subtopic": "Relational Algebra & Calculus",
      "question": "Which relational algebra operation is used to rename a relation or its attributes without changing the underlying data?",
      "options": {
        "A": "Union",
        "B": "Rename",
        "C": "Join",
        "D": "Projection",
        "E": "Division",
        "F": "Selection"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Rename'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 71,
      "subtopic": "Relational Algebra & Calculus",
      "question": "Which outer join type returns all tuples from the left relation, along with matching tuples from the right relation?",
      "options": {
        "A": "Cartesian Product",
        "B": "Full Outer Join",
        "C": "Natural Join",
        "D": "Left Outer Join",
        "E": "Right Outer Join",
        "F": "Inner Join"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'Left Outer Join'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 72,
      "subtopic": "Relational Algebra & Calculus",
      "question": "Which outer join type returns all tuples from the right relation, along with matching tuples from the left relation?",
      "options": {
        "A": "Cartesian Product",
        "B": "Full Outer Join",
        "C": "Right Outer Join",
        "D": "Natural Join",
        "E": "Inner Join",
        "F": "Left Outer Join"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'Right Outer Join'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 73,
      "subtopic": "Relational Algebra & Calculus",
      "question": "Which outer join type returns all tuples from both relations, filling in NULLs where there is no match on either side?",
      "options": {
        "A": "Full Outer Join",
        "B": "Semi-Join",
        "C": "Left Outer Join",
        "D": "Right Outer Join",
        "E": "Natural Join",
        "F": "Inner Join"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'Full Outer Join'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 74,
      "subtopic": "Relational Algebra & Calculus",
      "question": "Is relational algebra generally considered a procedural or non-procedural query language?",
      "options": {
        "A": "Purely functional with no operations",
        "B": "Object-oriented",
        "C": "Neither procedural nor declarative",
        "D": "Procedural, since it specifies the sequence of operations to retrieve the result",
        "E": "Non-procedural, since it only specifies what to retrieve, not how",
        "F": "A markup language"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'Procedural, since it specifies the sequence of operations to retrieve the result'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 75,
      "subtopic": "Relational Algebra & Calculus",
      "question": "Is relational calculus generally considered a procedural or non-procedural (declarative) query language?",
      "options": {
        "A": "Neither declarative nor procedural",
        "B": "A markup language",
        "C": "Non-procedural (declarative), specifying what data to retrieve rather than the steps",
        "D": "Object-oriented",
        "E": "A scripting language",
        "F": "Procedural, specifying exact steps"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'Non-procedural (declarative), specifying what data to retrieve rather than the steps'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 76,
      "subtopic": "Relational Algebra & Calculus",
      "question": "What does Tuple Relational Calculus (TRC) use as variables to specify a query?",
      "options": {
        "A": "Domain values only, with no variables",
        "B": "Tuple variables, which range over tuples of a relation",
        "C": "Column names only, without variables",
        "D": "Index names only",
        "E": "SQL keywords exclusively",
        "F": "Table names only"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Tuple variables, which range over tuples of a relation'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 77,
      "subtopic": "Relational Algebra & Calculus",
      "question": "What does Domain Relational Calculus (DRC) use as variables to specify a query, in contrast to TRC?",
      "options": {
        "A": "Index names only",
        "B": "Tuple variables ranging over entire rows",
        "C": "Table names only",
        "D": "Domain variables, which range over individual attribute domain values",
        "E": "Column names only",
        "F": "SQL keywords exclusively"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'Domain variables, which range over individual attribute domain values'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 78,
      "subtopic": "Relational Algebra & Calculus",
      "question": "Which relational algebra operation is functionally equivalent to a SQL 'WHERE' clause filtering rows based on a condition?",
      "options": {
        "A": "Selection",
        "B": "Rename",
        "C": "Projection",
        "D": "Join",
        "E": "Division",
        "F": "Union"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'Selection'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 79,
      "subtopic": "Relational Algebra & Calculus",
      "question": "Which relational algebra operation is functionally equivalent to a SQL 'SELECT column_list' clause choosing specific columns?",
      "options": {
        "A": "Union",
        "B": "Join",
        "C": "Division",
        "D": "Rename",
        "E": "Selection",
        "F": "Projection"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'Projection'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 80,
      "subtopic": "Relational Algebra & Calculus",
      "question": "What is the primary theoretical significance of relational algebra and relational calculus in the study of DBMS?",
      "options": {
        "A": "They are used only for physical storage design",
        "B": "They provide formal, mathematical foundations for query languages like SQL, used to reason about correctness and optimization",
        "C": "They only apply to NoSQL databases",
        "D": "They replace the need for SQL entirely in real systems",
        "E": "They are used exclusively for database security",
        "F": "They are the actual programming languages used to build a DBMS"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'They provide formal, mathematical foundations for query languages like SQL, used to reason about correctness and optimization'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 81,
      "subtopic": "SQL Fundamentals & Operations",
      "question": "Which category of SQL commands includes CREATE, ALTER, and DROP, used to define and modify database schema/structure?",
      "options": {
        "A": "DCL (Data Control Language)",
        "B": "DDL (Data Definition Language)",
        "C": "QL (Query Language)",
        "D": "PL (Procedural Language)",
        "E": "DML (Data Manipulation Language)",
        "F": "TCL (Transaction Control Language)"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'DDL (Data Definition Language)'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 82,
      "subtopic": "SQL Fundamentals & Operations",
      "question": "Which category of SQL commands includes SELECT, INSERT, UPDATE, and DELETE, used to manipulate data within tables?",
      "options": {
        "A": "PL",
        "B": "DML (Data Manipulation Language)",
        "C": "QL",
        "D": "DCL (Data Control Language)",
        "E": "TCL (Transaction Control Language)",
        "F": "DDL (Data Definition Language)"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'DML (Data Manipulation Language)'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 83,
      "subtopic": "SQL Fundamentals & Operations",
      "question": "Which category of SQL commands includes GRANT and REVOKE, used to control access permissions on database objects?",
      "options": {
        "A": "DCL (Data Control Language)",
        "B": "TCL",
        "C": "DDL",
        "D": "DML",
        "E": "PL",
        "F": "QL"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'DCL (Data Control Language)'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 84,
      "subtopic": "SQL Fundamentals & Operations",
      "question": "Which category of SQL commands includes COMMIT, ROLLBACK, and SAVEPOINT, used to manage transactions?",
      "options": {
        "A": "DCL",
        "B": "PL",
        "C": "TCL (Transaction Control Language)",
        "D": "DML",
        "E": "DDL",
        "F": "QL"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'TCL (Transaction Control Language)'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 85,
      "subtopic": "SQL Fundamentals & Operations",
      "question": "Which SQL clause is used to filter rows before any grouping takes place, based on a condition on individual rows?",
      "options": {
        "A": "GROUP BY",
        "B": "WHERE",
        "C": "FROM",
        "D": "HAVING",
        "E": "ORDER BY",
        "F": "SELECT"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'WHERE'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 86,
      "subtopic": "SQL Fundamentals & Operations",
      "question": "Which SQL clause is used to filter groups of rows after a GROUP BY, based on a condition applied to aggregated results?",
      "options": {
        "A": "WHERE",
        "B": "GROUP BY",
        "C": "FROM",
        "D": "ORDER BY",
        "E": "HAVING",
        "F": "SELECT"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'HAVING'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 87,
      "subtopic": "SQL Fundamentals & Operations",
      "question": "Which SQL clause is used to arrange the result set of a query in ascending or descending order?",
      "options": {
        "A": "WHERE",
        "B": "FROM",
        "C": "GROUP BY",
        "D": "ORDER BY",
        "E": "HAVING",
        "F": "SELECT"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'ORDER BY'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 88,
      "subtopic": "SQL Fundamentals & Operations",
      "question": "Which SQL clause groups rows that have the same values in specified columns, typically used with aggregate functions?",
      "options": {
        "A": "HAVING",
        "B": "SELECT",
        "C": "WHERE",
        "D": "GROUP BY",
        "E": "ORDER BY",
        "F": "FROM"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'GROUP BY'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 89,
      "subtopic": "SQL Fundamentals & Operations",
      "question": "Which type of SQL join returns only the rows that have matching values in both joined tables?",
      "options": {
        "A": "CROSS JOIN",
        "B": "LEFT JOIN",
        "C": "INNER JOIN",
        "D": "RIGHT JOIN",
        "E": "SELF JOIN",
        "F": "FULL OUTER JOIN"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'INNER JOIN'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 90,
      "subtopic": "SQL Fundamentals & Operations",
      "question": "Which type of SQL join returns all rows from the left table and matched rows from the right table, with NULLs where there is no match?",
      "options": {
        "A": "LEFT JOIN (LEFT OUTER JOIN)",
        "B": "SELF JOIN",
        "C": "CROSS JOIN",
        "D": "INNER JOIN",
        "E": "RIGHT JOIN",
        "F": "FULL OUTER JOIN"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'LEFT JOIN (LEFT OUTER JOIN)'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 91,
      "subtopic": "SQL Fundamentals & Operations",
      "question": "Which type of SQL join returns all rows from both tables, with NULLs where there is no match on either side?",
      "options": {
        "A": "SELF JOIN",
        "B": "LEFT JOIN",
        "C": "INNER JOIN",
        "D": "FULL OUTER JOIN",
        "E": "RIGHT JOIN",
        "F": "CROSS JOIN"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'FULL OUTER JOIN'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 92,
      "subtopic": "SQL Fundamentals & Operations",
      "question": "What is a self join in SQL?",
      "options": {
        "A": "A join that only works on a single-column table",
        "B": "A join that always returns zero rows",
        "C": "A join reserved exclusively for system tables",
        "D": "A join between two entirely unrelated tables",
        "E": "A join where a table is joined with itself, typically using table aliases",
        "F": "A join used only for deleting rows"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'A join where a table is joined with itself, typically using table aliases'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 93,
      "subtopic": "SQL Fundamentals & Operations",
      "question": "What is a subquery (nested query) in SQL?",
      "options": {
        "A": "A synonym for a database view",
        "B": "A synonym for a stored procedure",
        "C": "A type of trigger",
        "D": "A type of index",
        "E": "A query that can only run independently, never inside another query",
        "F": "A query embedded inside another SQL query, often within WHERE, FROM, or SELECT clauses"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'A query embedded inside another SQL query, often within WHERE, FROM, or SELECT clauses'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 94,
      "subtopic": "SQL Fundamentals & Operations",
      "question": "What is a correlated subquery?",
      "options": {
        "A": "A subquery that references a column from the outer query, so it is re-evaluated for each row processed by the outer query",
        "B": "A subquery that runs completely independently of the outer query",
        "C": "A subquery that never returns any rows",
        "D": "A synonym for a view",
        "E": "A subquery that can only appear in the FROM clause",
        "F": "A synonym for an index"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'A subquery that references a column from the outer query, so it is re-evaluated for each row processed by the outer query'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 95,
      "subtopic": "SQL Fundamentals & Operations",
      "question": "What is a database view?",
      "options": {
        "A": "A type of index used for optimization only",
        "B": "A type of primary key",
        "C": "A virtual table based on the result of a stored SQL query, which does not store data itself in the basic case",
        "D": "A backup of the entire database",
        "E": "A stored procedure that modifies data",
        "F": "A physical copy of a table stored separately"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'A virtual table based on the result of a stored SQL query, which does not store data itself in the basic case'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 96,
      "subtopic": "SQL Fundamentals & Operations",
      "question": "What is the purpose of an SQL index?",
      "options": {
        "A": "To encrypt table data",
        "B": "To enforce that a table cannot be queried",
        "C": "To automatically back up a table",
        "D": "To speed up data retrieval operations on a table, at the cost of additional storage and slower writes",
        "E": "To define relationships between tables",
        "F": "To store user credentials"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'To speed up data retrieval operations on a table, at the cost of additional storage and slower writes'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 97,
      "subtopic": "SQL Fundamentals & Operations",
      "question": "What is a database trigger?",
      "options": {
        "A": "A synonym for a view",
        "B": "A type of primary key",
        "C": "A stored procedure that automatically executes in response to certain events (INSERT, UPDATE, DELETE) on a table",
        "D": "A synonym for an index",
        "E": "A manual command that must be run explicitly every time",
        "F": "A type of foreign key"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'A stored procedure that automatically executes in response to certain events (INSERT, UPDATE, DELETE) on a table'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 98,
      "subtopic": "SQL Fundamentals & Operations",
      "question": "Which SQL aggregate function returns the total number of rows matching a query, or a column's non-NULL values?",
      "options": {
        "A": "MAX()",
        "B": "COUNT()",
        "C": "AVG()",
        "D": "SUM()",
        "E": "MIN()",
        "F": "DISTINCT()"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'COUNT()'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 99,
      "subtopic": "SQL Fundamentals & Operations",
      "question": "Which SQL set operation combines the results of two queries, keeping only rows that appear in both result sets?",
      "options": {
        "A": "MINUS (or EXCEPT)",
        "B": "INTERSECT",
        "C": "UNION ALL",
        "D": "UNION",
        "E": "JOIN",
        "F": "GROUP BY"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'INTERSECT'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 100,
      "subtopic": "SQL Fundamentals & Operations",
      "question": "Which SQL set operation combines the results of two queries, returning rows from the first query that do not appear in the second?",
      "options": {
        "A": "INTERSECT",
        "B": "UNION ALL",
        "C": "MINUS (or EXCEPT)",
        "D": "UNION",
        "E": "GROUP BY",
        "F": "JOIN"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'MINUS (or EXCEPT)'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 101,
      "subtopic": "Normalization & Functional Dependencies",
      "question": "What is the main goal of database normalization?",
      "options": {
        "A": "To eliminate the need for indexing",
        "B": "To combine all tables into one large table",
        "C": "To reduce data redundancy and eliminate anomalies by organizing data into well-structured tables",
        "D": "To remove all relationships between tables",
        "E": "To eliminate the need for primary keys",
        "F": "To increase data redundancy for backup purposes"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'To reduce data redundancy and eliminate anomalies by organizing data into well-structured tables'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 102,
      "subtopic": "Normalization & Functional Dependencies",
      "question": "What is a functional dependency in the context of normalization?",
      "options": {
        "A": "A type of index",
        "B": "A synonym for a foreign key constraint",
        "C": "A type of join",
        "D": "A type of trigger",
        "E": "A relationship where one attribute (or set of attributes) uniquely determines another attribute's value",
        "F": "A relationship between two unrelated tables"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'A relationship where one attribute (or set of attributes) uniquely determines another attribute's value'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 103,
      "subtopic": "Normalization & Functional Dependencies",
      "question": "What is an 'update anomaly' in an unnormalized/poorly normalized database?",
      "options": {
        "A": "An error that always crashes the database",
        "B": "A benefit of denormalization",
        "C": "An anomaly that occurs only during deletion",
        "D": "An anomaly that occurs only during insertion",
        "E": "Inconsistent data resulting from updating a redundantly stored fact, updating only some occurrences",
        "F": "A type of referential integrity violation"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'Inconsistent data resulting from updating a redundantly stored fact, updating only some occurrences'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 104,
      "subtopic": "Normalization & Functional Dependencies",
      "question": "What is an 'insertion anomaly'?",
      "options": {
        "A": "An anomaly that occurs only during deletion",
        "B": "A benefit of proper normalization",
        "C": "The inability to add certain data without also having unrelated/unwanted data present, due to poor table design",
        "D": "An anomaly that occurs only during updates",
        "E": "A type of index corruption",
        "F": "An error caused by using too many primary keys"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'The inability to add certain data without also having unrelated/unwanted data present, due to poor table design'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 105,
      "subtopic": "Normalization & Functional Dependencies",
      "question": "What is a 'deletion anomaly'?",
      "options": {
        "A": "An anomaly that occurs only during updates",
        "B": "An anomaly that occurs only during insertion",
        "C": "An error that always corrupts the entire database",
        "D": "A benefit of denormalization",
        "E": "Unintentionally losing other useful data when deleting a record, due to poor table design combining unrelated facts",
        "F": "A type of index issue"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'Unintentionally losing other useful data when deleting a record, due to poor table design combining unrelated facts'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 106,
      "subtopic": "Normalization & Functional Dependencies",
      "question": "What is required for a relation to be in First Normal Form (1NF)?",
      "options": {
        "A": "The relation must have no primary key",
        "B": "The relation must have exactly one attribute",
        "C": "All attributes must be numeric",
        "D": "The relation must be denormalized",
        "E": "All attribute values must be atomic (indivisible), with no repeating groups or multivalued attributes",
        "F": "The relation must have at least one foreign key"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'All attribute values must be atomic (indivisible), with no repeating groups or multivalued attributes'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 107,
      "subtopic": "Normalization & Functional Dependencies",
      "question": "What is required for a relation to be in Second Normal Form (2NF)?",
      "options": {
        "A": "It must have no primary key at all",
        "B": "It must have at least three foreign keys",
        "C": "It must be in 1NF with no other requirements",
        "D": "It must be denormalized from 3NF",
        "E": "It must have only one non-key attribute",
        "F": "It must be in 1NF, and every non-key attribute must be fully functionally dependent on the entire primary key"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'It must be in 1NF, and every non-key attribute must be fully functionally dependent on the entire primary key'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 108,
      "subtopic": "Normalization & Functional Dependencies",
      "question": "What is required for a relation to be in Third Normal Form (3NF)?",
      "options": {
        "A": "It must be in 1NF only, with no further requirements",
        "B": "It must have no candidate keys",
        "C": "It must be in 2NF, and no non-key attribute should be transitively dependent on the primary key",
        "D": "It must have at least one multivalued attribute",
        "E": "It must have composite keys only",
        "F": "It must violate 2NF intentionally"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'It must be in 2NF, and no non-key attribute should be transitively dependent on the primary key'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 109,
      "subtopic": "Normalization & Functional Dependencies",
      "question": "What is a transitive dependency, which 3NF aims to eliminate?",
      "options": {
        "A": "A dependency that only exists in denormalized tables",
        "B": "A dependency between two different tables only",
        "C": "A synonym for a partial dependency",
        "D": "A dependency involving foreign keys only",
        "E": "A situation where a non-key attribute depends on another non-key attribute, rather than directly on the primary key",
        "F": "A situation where every attribute depends directly on the primary key"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'A situation where a non-key attribute depends on another non-key attribute, rather than directly on the primary key'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 110,
      "subtopic": "Normalization & Functional Dependencies",
      "question": "What is required for a relation to be in Boyce-Codd Normal Form (BCNF), a stricter version of 3NF?",
      "options": {
        "A": "The relation must have multivalued attributes",
        "B": "Every attribute must be part of the primary key",
        "C": "The relation must have multiple primary keys",
        "D": "The relation must violate 3NF",
        "E": "For every functional dependency X → Y, X must be a super key of the relation",
        "F": "The relation must have no functional dependencies at all"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'For every functional dependency X → Y, X must be a super key of the relation'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 111,
      "subtopic": "Normalization & Functional Dependencies",
      "question": "What is a partial dependency, which 2NF aims to eliminate?",
      "options": {
        "A": "A dependency that only exists in BCNF",
        "B": "A dependency involving foreign keys exclusively",
        "C": "A non-key attribute depending on the entire primary key",
        "D": "A dependency between two non-key attributes",
        "E": "A synonym for a transitive dependency",
        "F": "A non-key attribute depending on only part of a composite primary key, rather than the whole key"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'A non-key attribute depending on only part of a composite primary key, rather than the whole key'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 112,
      "subtopic": "Normalization & Functional Dependencies",
      "question": "What does Fourth Normal Form (4NF) primarily address, beyond BCNF?",
      "options": {
        "A": "Combining multiple tables into one",
        "B": "Eliminating multivalued dependencies, where independent multivalued attributes exist in the same table",
        "C": "Eliminating all functional dependencies entirely",
        "D": "Requiring every table to have a composite key",
        "E": "Requiring denormalization",
        "F": "Eliminating the need for primary keys"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Eliminating multivalued dependencies, where independent multivalued attributes exist in the same table'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 113,
      "subtopic": "Normalization & Functional Dependencies",
      "question": "What does Fifth Normal Form (5NF), also called Project-Join Normal Form, primarily address?",
      "options": {
        "A": "Eliminating all indexes from a table",
        "B": "Combining normalized tables back into one large table",
        "C": "Requiring exactly one functional dependency",
        "D": "Eliminating join dependencies, ensuring a table cannot be losslessly decomposed further without redundancy",
        "E": "Requiring a single-column primary key only",
        "F": "Eliminating foreign keys entirely"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'Eliminating join dependencies, ensuring a table cannot be losslessly decomposed further without redundancy'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 114,
      "subtopic": "Normalization & Functional Dependencies",
      "question": "What is 'denormalization', and why might a database designer choose to use it?",
      "options": {
        "A": "Intentionally introducing some redundancy into a normalized database to improve read/query performance",
        "B": "Converting a NoSQL database into a relational one",
        "C": "A synonym for normalization with no real difference",
        "D": "A step always required before any database can function",
        "E": "A process that always improves data integrity with no trade-offs",
        "F": "Removing all data from a database"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'Intentionally introducing some redundancy into a normalized database to improve read/query performance'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 115,
      "subtopic": "Normalization & Functional Dependencies",
      "question": "What is Armstrong's Axioms set used for in the context of functional dependencies?",
      "options": {
        "A": "A set of SQL commands for creating tables",
        "B": "A set of rules for user authentication",
        "C": "A set of inference rules used to derive all functional dependencies implied by a given set",
        "D": "A set of rules for query optimization only",
        "E": "A set of rules for indexing",
        "F": "A set of rules for physical storage layout"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'A set of inference rules used to derive all functional dependencies implied by a given set'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 116,
      "subtopic": "Normalization & Functional Dependencies",
      "question": "What does the 'closure' of a set of attributes (X+) represent in functional dependency theory?",
      "options": {
        "A": "The number of tables containing X",
        "B": "The set of all foreign keys related to X",
        "C": "The physical storage size of the attributes",
        "D": "The number of rows containing X",
        "E": "The set of all indexes on X",
        "F": "The set of all attributes that are functionally determined by X, given a set of functional dependencies"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'The set of all attributes that are functionally determined by X, given a set of functional dependencies'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 117,
      "subtopic": "Normalization & Functional Dependencies",
      "question": "Which normal form is generally considered the practical minimum standard most well-designed relational databases should meet?",
      "options": {
        "A": "Third Normal Form (3NF), or BCNF for stricter designs",
        "B": "No normal form is typically required in practice",
        "C": "Zero Normal Form",
        "D": "First Normal Form (1NF) only",
        "E": "Fifth Normal Form is always mandatory for every table",
        "F": "Second Normal Form only, without going further"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'Third Normal Form (3NF), or BCNF for stricter designs'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 118,
      "subtopic": "Normalization & Functional Dependencies",
      "question": "Which of the following best illustrates a partial dependency scenario in a table with composite key (StudentID, CourseID)?",
      "options": {
        "A": "An attribute depending on the full composite key (StudentID, CourseID) together",
        "B": "An attribute that is itself part of the primary key",
        "C": "An attribute depending on a foreign key from a different table entirely",
        "D": "An attribute like 'CourseName' depending only on CourseID, not on the full composite key",
        "E": "An attribute with only a NULL value",
        "F": "An attribute with no dependency on any key"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'An attribute like 'CourseName' depending only on CourseID, not on the full composite key'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 119,
      "subtopic": "Normalization & Functional Dependencies",
      "question": "Which of the following best illustrates a transitive dependency, where StudentID → DeptID and DeptID → DeptName?",
      "options": {
        "A": "DeptName is transitively dependent on StudentID through DeptID",
        "B": "DeptName is a primary key attribute",
        "C": "DeptID is not functionally dependent on StudentID",
        "D": "StudentID is dependent on DeptName",
        "E": "DeptName is directly and only dependent on StudentID",
        "F": "DeptID has no relationship to DeptName at all"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'DeptName is transitively dependent on StudentID through DeptID'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 120,
      "subtopic": "Normalization & Functional Dependencies",
      "question": "Why is normalization particularly important during the database design phase, before large amounts of data are loaded?",
      "options": {
        "A": "It removes the need for keys and constraints entirely",
        "B": "It eliminates the need for any future schema changes",
        "C": "It helps prevent data redundancy and anomalies from the outset, which are much harder to fix once data is loaded",
        "D": "It has no real practical benefit",
        "E": "It guarantees faster query performance in every single case, with no exceptions",
        "F": "It is only relevant for NoSQL databases"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'It helps prevent data redundancy and anomalies from the outset, which are much harder to fix once data is loaded'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 121,
      "subtopic": "Transactions & ACID Properties",
      "question": "What does the 'A' in the ACID properties of a database transaction stand for?",
      "options": {
        "A": "Authentication",
        "B": "Abstraction",
        "C": "Availability",
        "D": "Aggregation",
        "E": "Accuracy",
        "F": "Atomicity"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'Atomicity'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 122,
      "subtopic": "Transactions & ACID Properties",
      "question": "What does the 'C' in the ACID properties of a database transaction stand for?",
      "options": {
        "A": "Clustering",
        "B": "Concurrency",
        "C": "Compression",
        "D": "Correlation",
        "E": "Caching",
        "F": "Consistency"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'Consistency'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 123,
      "subtopic": "Transactions & ACID Properties",
      "question": "What does the 'I' in the ACID properties of a database transaction stand for?",
      "options": {
        "A": "Inheritance",
        "B": "Indexing",
        "C": "Isolation",
        "D": "Instantiation",
        "E": "Integration",
        "F": "Interpolation"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'Isolation'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 124,
      "subtopic": "Transactions & ACID Properties",
      "question": "What does the 'D' in the ACID properties of a database transaction stand for?",
      "options": {
        "A": "Dependency",
        "B": "Deletion",
        "C": "Decomposition",
        "D": "Durability",
        "E": "Distribution",
        "F": "Denormalization"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'Durability'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 125,
      "subtopic": "Transactions & ACID Properties",
      "question": "What does 'Atomicity' guarantee about a database transaction?",
      "options": {
        "A": "The transaction's effects are permanent after commit",
        "B": "The database remains in a valid state after the transaction",
        "C": "The transaction runs faster than other transactions",
        "D": "The transaction executes completely (all operations) or not at all, with no partial execution",
        "E": "The transaction always executes in isolation from other transactions",
        "F": "The transaction can be split into unrelated smaller transactions freely"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'The transaction executes completely (all operations) or not at all, with no partial execution'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 126,
      "subtopic": "Transactions & ACID Properties",
      "question": "What does 'Consistency' guarantee about a database transaction?",
      "options": {
        "A": "The transaction is always executed instantly",
        "B": "The transaction's changes are never lost",
        "C": "The transaction is invisible to other users",
        "D": "The transaction ignores all constraints",
        "E": "The transaction always runs before other transactions",
        "F": "The database transitions from one valid state to another valid state, preserving all defined rules and constraints"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'The database transitions from one valid state to another valid state, preserving all defined rules and constraints'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 127,
      "subtopic": "Transactions & ACID Properties",
      "question": "What does 'Isolation' guarantee about concurrently executing database transactions?",
      "options": {
        "A": "Transactions always execute one after another with no concurrency ever",
        "B": "Concurrent transactions do not interfere with each other, each appearing to execute as if it were the only one running",
        "C": "Transactions must always execute in a single thread with no exceptions",
        "D": "Transactions share all data without any restriction",
        "E": "Transactions are never rolled back",
        "F": "Transactions can freely read uncommitted changes from others with no restriction"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Concurrent transactions do not interfere with each other, each appearing to execute as if it were the only one running'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 128,
      "subtopic": "Transactions & ACID Properties",
      "question": "What does 'Durability' guarantee about a database transaction once it has been committed?",
      "options": {
        "A": "The transaction's changes are temporary and may be lost on restart",
        "B": "The database is deleted after the transaction commits",
        "C": "The transaction is automatically undone after a fixed time period",
        "D": "The changes made by the transaction are permanently saved and survive subsequent system failures",
        "E": "The transaction remains uncommitted indefinitely",
        "F": "The transaction can still be rolled back at any time afterward"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'The changes made by the transaction are permanently saved and survive subsequent system failures'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 129,
      "subtopic": "Transactions & ACID Properties",
      "question": "Which transaction state indicates that a transaction has completed successfully and its changes have been permanently applied?",
      "options": {
        "A": "Committed",
        "B": "Active",
        "C": "Failed",
        "D": "Aborted",
        "E": "Terminated",
        "F": "Partially Committed"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'Committed'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 130,
      "subtopic": "Transactions & ACID Properties",
      "question": "Which transaction state indicates that a transaction has encountered an error and has been rolled back, undoing any changes it made?",
      "options": {
        "A": "Partially Committed",
        "B": "Committed",
        "C": "Active",
        "D": "Aborted",
        "E": "Failed",
        "F": "Terminated"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'Aborted'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 131,
      "subtopic": "Transactions & ACID Properties",
      "question": "What is a schedule in the context of transaction management?",
      "options": {
        "A": "A synonym for a query execution plan",
        "B": "A synonym for an index",
        "C": "A calendar of maintenance windows",
        "D": "A synonym for a database backup",
        "E": "An ordering of the operations of one or more transactions, showing the sequence in which they execute",
        "F": "A type of stored procedure"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'An ordering of the operations of one or more transactions, showing the sequence in which they execute'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 132,
      "subtopic": "Transactions & ACID Properties",
      "question": "What is a 'serial schedule'?",
      "options": {
        "A": "A schedule that is always invalid",
        "B": "A schedule where transactions execute one after another with no interleaving of operations from different transactions",
        "C": "A schedule that ignores the ACID properties",
        "D": "A schedule where all transactions execute simultaneously with full interleaving",
        "E": "A schedule used only for backups",
        "F": "A schedule reserved only for read-only transactions"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'A schedule where transactions execute one after another with no interleaving of operations from different transactions'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 133,
      "subtopic": "Transactions & ACID Properties",
      "question": "What is a 'concurrent (interleaved) schedule'?",
      "options": {
        "A": "A schedule where operations from multiple transactions are interleaved with each other during execution",
        "B": "A schedule that is always considered invalid",
        "C": "A schedule where transactions execute strictly one at a time",
        "D": "A schedule with no transactions at all",
        "E": "A synonym for a serial schedule",
        "F": "A schedule used only during recovery"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'A schedule where operations from multiple transactions are interleaved with each other during execution'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 134,
      "subtopic": "Transactions & ACID Properties",
      "question": "What does it mean for a schedule to be 'serializable'?",
      "options": {
        "A": "Its final database state is equivalent to some serial execution of the same transactions, even though interleaved",
        "B": "It must literally be executed as a serial schedule with no interleaving allowed",
        "C": "It is never used in practice",
        "D": "It requires all transactions to fail",
        "E": "It always produces incorrect results",
        "F": "It only applies to single-transaction schedules"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'Its final database state is equivalent to some serial execution of the same transactions, even though interleaved'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 135,
      "subtopic": "Transactions & ACID Properties",
      "question": "What is 'conflict serializability'?",
      "options": {
        "A": "A form where a schedule can be transformed into a serial schedule by swapping non-conflicting operations",
        "B": "A form where transactions must always conflict with each other",
        "C": "A synonym for durability",
        "D": "A synonym for atomicity",
        "E": "A form applicable only to read-only transactions",
        "F": "A form that ignores the order of write operations entirely"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'A form where a schedule can be transformed into a serial schedule by swapping non-conflicting operations'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 136,
      "subtopic": "Transactions & ACID Properties",
      "question": "What is 'view serializability'?",
      "options": {
        "A": "A synonym for conflict serializability with no distinction",
        "B": "A form irrelevant to concurrency control",
        "C": "A form that only applies to a single transaction",
        "D": "A stricter form than conflict serializability that all schedules must satisfy",
        "E": "A form used only in NoSQL databases",
        "F": "A weaker form of serializability where a schedule produces the same final result as some serial schedule"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'A weaker form of serializability where a schedule produces the same final result as some serial schedule'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 137,
      "subtopic": "Transactions & ACID Properties",
      "question": "What are two operations said to 'conflict' with each other in a schedule?",
      "options": {
        "A": "They belong to different transactions, access the same data item, and at least one of them is a write",
        "B": "They must involve different data items entirely",
        "C": "They always involve only read operations",
        "D": "They must always occur in the same schedule position",
        "E": "They belong to the same transaction and never conflict by definition",
        "F": "They must both be commit operations"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'They belong to different transactions, access the same data item, and at least one of them is a write'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 138,
      "subtopic": "Transactions & ACID Properties",
      "question": "Why is it important for a DBMS to ensure only serializable schedules are allowed to execute?",
      "options": {
        "A": "To remove the need for a recovery manager",
        "B": "To make transactions run slower intentionally",
        "C": "To prevent any transactions from committing ever",
        "D": "To allow arbitrary, unchecked interleaving of all operations",
        "E": "To eliminate the need for the ACID properties",
        "F": "To guarantee that concurrent transaction execution produces results consistent with some correct serial order"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'To guarantee that concurrent transaction execution produces results consistent with some correct serial order'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 139,
      "subtopic": "Transactions & ACID Properties",
      "question": "What is a 'read-write conflict' (unrepeatable read scenario) between two transactions?",
      "options": {
        "A": "The conflict is resolved automatically with no locking needed",
        "B": "The transactions execute in a strictly serial schedule with no overlap",
        "C": "Both transactions write to completely different data items",
        "D": "Neither transaction accesses any shared data",
        "E": "Both transactions only read the same data item, causing no issue",
        "F": "One transaction reads a data item that another transaction later modifies before the first transaction completes"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'One transaction reads a data item that another transaction later modifies before the first transaction completes'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 140,
      "subtopic": "Transactions & ACID Properties",
      "question": "What is a 'write-write conflict' between two concurrent transactions?",
      "options": {
        "A": "The transactions must belong to the same user session",
        "B": "The conflict never requires any concurrency control mechanism",
        "C": "The conflict is always resolved by ignoring one transaction silently",
        "D": "Both transactions attempt to write to the same data item, potentially causing a lost update",
        "E": "Both transactions only read the same data item",
        "F": "The transactions access completely unrelated data items"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'Both transactions attempt to write to the same data item, potentially causing a lost update'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 141,
      "subtopic": "Concurrency Control & Recovery",
      "question": "What is the primary purpose of concurrency control mechanisms in a DBMS?",
      "options": {
        "A": "To replace the need for the recovery manager",
        "B": "To eliminate the need for indexes",
        "C": "To ensure correctness and consistency of the database when multiple transactions execute simultaneously",
        "D": "To speed up single-transaction execution only",
        "E": "To prevent any transactions from running concurrently under any circumstances",
        "F": "To manage only read-only transactions"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'To ensure correctness and consistency of the database when multiple transactions execute simultaneously'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 142,
      "subtopic": "Concurrency Control & Recovery",
      "question": "What is a 'shared lock' (S-lock) typically used for in lock-based concurrency control?",
      "options": {
        "A": "Preventing all transactions from reading a data item",
        "B": "Locking only index structures",
        "C": "Allowing exactly one transaction to both read and write a data item",
        "D": "Allowing unlimited writes from multiple transactions simultaneously",
        "E": "Locking an entire database permanently",
        "F": "Allowing multiple transactions to read a data item simultaneously, but preventing any of them from writing to it"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'Allowing multiple transactions to read a data item simultaneously, but preventing any of them from writing to it'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 143,
      "subtopic": "Concurrency Control & Recovery",
      "question": "What is an 'exclusive lock' (X-lock) typically used for in lock-based concurrency control?",
      "options": {
        "A": "Locking only index structures",
        "B": "Locking an entire database permanently with no releases",
        "C": "Locking only the schema, not the data",
        "D": "Allowing only read access to multiple transactions",
        "E": "Allowing a transaction to both read and write a data item, while preventing other transactions from acquiring any lock",
        "F": "Allowing multiple transactions to write simultaneously"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'Allowing a transaction to both read and write a data item, while preventing other transactions from acquiring any lock'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 144,
      "subtopic": "Concurrency Control & Recovery",
      "question": "What does the Two-Phase Locking (2PL) protocol require regarding lock acquisition and release?",
      "options": {
        "A": "Only one lock is allowed per transaction",
        "B": "A transaction may acquire and release locks in any order at any time",
        "C": "Locks must alternate between shared and exclusive on every operation",
        "D": "Locks are never released until the entire database shuts down",
        "E": "A transaction must release all locks before acquiring any new ones",
        "F": "A transaction must acquire all needed locks in a 'growing phase' before releasing any in a 'shrinking phase'"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'A transaction must acquire all needed locks in a 'growing phase' before releasing any in a 'shrinking phase''. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 145,
      "subtopic": "Concurrency Control & Recovery",
      "question": "What is a deadlock in the context of concurrency control?",
      "options": {
        "A": "A situation where two or more transactions wait indefinitely for each other to release locks, none able to proceed",
        "B": "A situation where a transaction executes extremely fast",
        "C": "A benefit of using shared locks exclusively",
        "D": "A synonym for a serializable schedule",
        "E": "A situation caused only by hardware failure",
        "F": "A situation that only occurs in single-user databases"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'A situation where two or more transactions wait indefinitely for each other to release locks, none able to proceed'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 146,
      "subtopic": "Concurrency Control & Recovery",
      "question": "Which technique detects deadlocks by periodically checking for a cycle in a 'wait-for graph'?",
      "options": {
        "A": "Shadow Paging",
        "B": "Deadlock Detection",
        "C": "Timestamp Ordering",
        "D": "Deadlock Prevention",
        "E": "Two-Phase Locking",
        "F": "Deadlock Avoidance"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Deadlock Detection'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 147,
      "subtopic": "Concurrency Control & Recovery",
      "question": "Which strategy prevents deadlocks by ensuring transactions acquire all needed resources upfront, or by ordering resource requests?",
      "options": {
        "A": "Shadow Paging",
        "B": "Log-based Recovery",
        "C": "Timestamp Ordering",
        "D": "Deadlock Prevention",
        "E": "Two-Phase Locking alone",
        "F": "Deadlock Detection"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'Deadlock Prevention'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 148,
      "subtopic": "Concurrency Control & Recovery",
      "question": "What is timestamp-based concurrency control primarily based on?",
      "options": {
        "A": "Assigning each transaction a unique timestamp and ordering conflicting operations according to those timestamps",
        "B": "Ignoring the order of transactions entirely",
        "C": "Locking every data item permanently",
        "D": "Randomly selecting which transaction executes first with no consistent rule",
        "E": "Requiring manual conflict resolution by the DBA every time",
        "F": "Using only shared locks for every operation"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'Assigning each transaction a unique timestamp and ordering conflicting operations according to those timestamps'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 149,
      "subtopic": "Concurrency Control & Recovery",
      "question": "What is Multiversion Concurrency Control (MVCC) primarily designed to achieve?",
      "options": {
        "A": "Allowing readers to access a consistent older version of data without being blocked by concurrent writers",
        "B": "Requiring every transaction to use exclusive locks only",
        "C": "Preventing all read operations during any write",
        "D": "Locking the entire database for every single transaction",
        "E": "Removing the need for a recovery manager",
        "F": "Eliminating the need for timestamps entirely"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'Allowing readers to access a consistent older version of data without being blocked by concurrent writers'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 150,
      "subtopic": "Concurrency Control & Recovery",
      "question": "What does Optimistic Concurrency Control assume about transaction conflicts?",
      "options": {
        "A": "All transactions must be serialized manually by the DBA",
        "B": "Conflicts are rare, so transactions proceed without locking and are validated for conflicts only at commit time",
        "C": "No validation is ever needed at commit time",
        "D": "Locking must occur before any read operation under all circumstances",
        "E": "It is identical to strict two-phase locking with no differences",
        "F": "Conflicts are extremely common, requiring locks on every single operation"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Conflicts are rare, so transactions proceed without locking and are validated for conflicts only at commit time'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 151,
      "subtopic": "Concurrency Control & Recovery",
      "question": "What is the primary purpose of database recovery mechanisms?",
      "options": {
        "A": "To prevent any transactions from ever failing",
        "B": "To permanently delete all transaction logs",
        "C": "To replace the need for backups entirely",
        "D": "To speed up read-only queries only",
        "E": "To restore the database to a consistent state after a failure, preserving committed transactions and undoing uncommitted ones",
        "F": "To eliminate the need for concurrency control"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'To restore the database to a consistent state after a failure, preserving committed transactions and undoing uncommitted ones'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 152,
      "subtopic": "Concurrency Control & Recovery",
      "question": "What is 'log-based recovery' primarily based on?",
      "options": {
        "A": "Taking a full physical backup before every single transaction",
        "B": "Relying solely on user intervention to fix errors manually",
        "C": "Preventing any transactions from being logged at all",
        "D": "Maintaining a log of all database modifications (before/after values) to redo or undo operations during recovery",
        "E": "Using only in-memory data with no persistent record",
        "F": "Ignoring all transaction history entirely"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'Maintaining a log of all database modifications (before/after values) to redo or undo operations during recovery'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 153,
      "subtopic": "Concurrency Control & Recovery",
      "question": "What is a 'checkpoint' in database recovery, and why is it useful?",
      "options": {
        "A": "A point only relevant to concurrency control, not recovery",
        "B": "A synonym for a full database backup with identical behavior",
        "C": "A point that disables logging entirely",
        "D": "A point that has no impact on recovery time at all",
        "E": "A point where all data is permanently deleted",
        "F": "A saved point recording the current state, allowing recovery to start from there rather than the very beginning of the log"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'A saved point recording the current state, allowing recovery to start from there rather than the very beginning of the log'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 154,
      "subtopic": "Concurrency Control & Recovery",
      "question": "What is 'shadow paging', an alternative to log-based recovery?",
      "options": {
        "A": "A technique maintaining two page tables (current and shadow) so changes can be discarded by reverting to the shadow copy",
        "B": "A technique used only for indexing, not recovery",
        "C": "A technique identical to log-based recovery with no differences",
        "D": "A technique that permanently merges all pages into one",
        "E": "A technique that requires no page tables at all",
        "F": "A technique used only for concurrency control"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'A technique maintaining two page tables (current and shadow) so changes can be discarded by reverting to the shadow copy'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 155,
      "subtopic": "Concurrency Control & Recovery",
      "question": "What is a 'transaction failure', as one classification of database failure?",
      "options": {
        "A": "A failure that never requires any recovery action",
        "B": "A failure where the entire physical storage device is destroyed",
        "C": "A failure where a specific transaction cannot continue due to a logical error or being aborted, while the system remains functional",
        "D": "A failure caused only by a power outage affecting the whole system",
        "E": "A synonym for a deadlock with no distinction",
        "F": "A failure that always requires restoring from a full backup"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'A failure where a specific transaction cannot continue due to a logical error or being aborted, while the system remains functional'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 156,
      "subtopic": "Concurrency Control & Recovery",
      "question": "What is a 'system crash', as one classification of database failure?",
      "options": {
        "A": "A synonym for a media failure with no distinction",
        "B": "A failure that never requires the recovery manager",
        "C": "A failure where the system stops functioning, typically losing volatile (main memory) data but not disk data",
        "D": "A failure limited to a single transaction only, with no broader system impact",
        "E": "A failure that only affects network connectivity",
        "F": "A failure that permanently destroys the disk storage"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'A failure where the system stops functioning, typically losing volatile (main memory) data but not disk data'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 157,
      "subtopic": "Concurrency Control & Recovery",
      "question": "What is a 'media (disk) failure', as one classification of database failure?",
      "options": {
        "A": "A failure where the physical storage device itself is damaged or destroyed, typically requiring restoration from backups",
        "B": "A failure that only affects data in main memory",
        "C": "A failure resolved automatically without any backup",
        "D": "A failure limited only to a single transaction",
        "E": "A failure that never impacts the database at all",
        "F": "A synonym for a system crash with no distinction"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'A failure where the physical storage device itself is damaged or destroyed, typically requiring restoration from backups'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 158,
      "subtopic": "Concurrency Control & Recovery",
      "question": "In log-based recovery using the Write-Ahead Logging (WAL) principle, what must happen before a modification is written to disk?",
      "options": {
        "A": "The log must be deleted immediately after each write",
        "B": "The modification must be applied to disk first, then logged afterward",
        "C": "The corresponding log record describing that modification must first be written to stable storage",
        "D": "The transaction must already be committed before any logging occurs",
        "E": "No log record is required at all under WAL",
        "F": "The modification must be written to memory only, never to a log"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'The corresponding log record describing that modification must first be written to stable storage'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 159,
      "subtopic": "Concurrency Control & Recovery",
      "question": "During recovery, what does the 'REDO' operation typically accomplish for committed transactions found in the log?",
      "options": {
        "A": "It only applies to uncommitted transactions",
        "B": "It reapplies the changes made by committed transactions that might not have been fully written to disk before a crash",
        "C": "It has no effect on committed transactions",
        "D": "It deletes the transaction log entirely",
        "E": "It restores the database to its very first backup only",
        "F": "It undoes/rolls back the changes made by committed transactions"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'It reapplies the changes made by committed transactions that might not have been fully written to disk before a crash'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 160,
      "subtopic": "Concurrency Control & Recovery",
      "question": "During recovery, what does the 'UNDO' operation typically accomplish for uncommitted (incomplete) transactions found in the log?",
      "options": {
        "A": "It has no effect on any transaction",
        "B": "It restores only index structures",
        "C": "It reapplies the changes of committed transactions",
        "D": "It rolls back/reverses the changes made by transactions that had not committed before the failure occurred",
        "E": "It deletes all logs permanently",
        "F": "It only applies to committed transactions"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'It rolls back/reverses the changes made by transactions that had not committed before the failure occurred'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 161,
      "subtopic": "Indexing, Storage & Query Processing",
      "question": "What is the primary purpose of an index in a database?",
      "options": {
        "A": "To encrypt the underlying data",
        "B": "To eliminate the need for primary keys",
        "C": "To permanently sort the actual table data physically in every case",
        "D": "To reduce the total number of tables needed",
        "E": "To replace the need for a WHERE clause entirely",
        "F": "To speed up data retrieval operations by providing a faster lookup path to rows, at the cost of extra storage"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'To speed up data retrieval operations by providing a faster lookup path to rows, at the cost of extra storage'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 162,
      "subtopic": "Indexing, Storage & Query Processing",
      "question": "What is a 'primary index'?",
      "options": {
        "A": "An index that can only exist on non-key attributes",
        "B": "An index that only applies to NoSQL databases",
        "C": "An ordered index built on the primary key of a sequentially ordered (sorted) data file",
        "D": "An index that is always unordered",
        "E": "A synonym for a secondary index with no distinction",
        "F": "An index that is never used for the primary key"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'An ordered index built on the primary key of a sequentially ordered (sorted) data file'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 163,
      "subtopic": "Indexing, Storage & Query Processing",
      "question": "What is a 'secondary index'?",
      "options": {
        "A": "A synonym for a clustering index with no distinction",
        "B": "An index used only for foreign keys",
        "C": "An index that removes the need for a primary index",
        "D": "An additional index built on a non-primary-key attribute to speed up queries on that attribute",
        "E": "An index that always duplicates the primary index exactly",
        "F": "An index that can only be built on the primary key"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'An additional index built on a non-primary-key attribute to speed up queries on that attribute'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 164,
      "subtopic": "Indexing, Storage & Query Processing",
      "question": "What is a 'clustering index'?",
      "options": {
        "A": "An index that is always built on a unique primary key only",
        "B": "An index that duplicates the primary index",
        "C": "An index built on a non-key attribute used to physically order the data file when sorted by that non-unique attribute",
        "D": "An index that only works with NoSQL databases",
        "E": "An index that has no effect on physical data ordering",
        "F": "A synonym for a secondary index with no distinction"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'An index built on a non-key attribute used to physically order the data file when sorted by that non-unique attribute'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 165,
      "subtopic": "Indexing, Storage & Query Processing",
      "question": "What is the key difference between a clustered and a non-clustered (secondary) index regarding physical data storage?",
      "options": {
        "A": "They are functionally identical with no difference",
        "B": "A clustered index never affects physical storage order",
        "C": "A clustered index determines the physical order of data rows, while a non-clustered index maintains a separate pointer structure",
        "D": "A clustered index can only exist on non-key attributes",
        "E": "A non-clustered index is always faster in every scenario",
        "F": "A non-clustered index always physically reorders the data too"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'A clustered index determines the physical order of data rows, while a non-clustered index maintains a separate pointer structure'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 166,
      "subtopic": "Indexing, Storage & Query Processing",
      "question": "Which type of index typically involves multiple levels, where an index itself is indexed again, to reduce disk accesses for very large files?",
      "options": {
        "A": "Multi-level Index",
        "B": "Dense Index",
        "C": "Single-level Index",
        "D": "Hash Index",
        "E": "Bitmap Index",
        "F": "Sparse Index"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'Multi-level Index'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 167,
      "subtopic": "Indexing, Storage & Query Processing",
      "question": "What is the key structural advantage of a B+ Tree index over a plain B-Tree index for range queries?",
      "options": {
        "A": "A B+ Tree stores data only in the root node",
        "B": "All actual data pointers are stored only in leaf nodes, which are linked together, allowing efficient sequential range scans",
        "C": "A B-Tree has no leaf nodes at all",
        "D": "A B+ Tree can never be used for range queries",
        "E": "A B-Tree always outperforms a B+ Tree for range queries",
        "F": "They are functionally identical with no difference in structure"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'All actual data pointers are stored only in leaf nodes, which are linked together, allowing efficient sequential range scans'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 168,
      "subtopic": "Indexing, Storage & Query Processing",
      "question": "What is 'hash-based indexing' primarily optimized for?",
      "options": {
        "A": "Multi-level tree traversal exclusively",
        "B": "Efficient range queries across a sorted range of values",
        "C": "Only foreign key relationships",
        "D": "Only text-based full-text search",
        "E": "Storing data in strictly sorted order",
        "F": "Very fast equality lookups (exact match searches) using a hash function to compute the storage location"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'Very fast equality lookups (exact match searches) using a hash function to compute the storage location'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 169,
      "subtopic": "Indexing, Storage & Query Processing",
      "question": "What is a 'dense index'?",
      "options": {
        "A": "An index that is never used with sorted files",
        "B": "An index that contains entries for only some of the search key values",
        "C": "An index that contains an index entry for every single search key value (or record) in the data file",
        "D": "An index limited only to primary keys",
        "E": "A synonym for a sparse index with no distinction",
        "F": "An index that has no entries at all"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'An index that contains an index entry for every single search key value (or record) in the data file'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 170,
      "subtopic": "Indexing, Storage & Query Processing",
      "question": "What is a 'sparse index'?",
      "options": {
        "A": "An index that has no entries at all",
        "B": "An index that contains entries for only some of the search key values, typically one per block",
        "C": "A synonym for a dense index with no distinction",
        "D": "An index that contains an entry for every single record",
        "E": "An index that requires no sorted data at all",
        "F": "An index limited only to secondary keys"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'An index that contains entries for only some of the search key values, typically one per block'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 171,
      "subtopic": "Indexing, Storage & Query Processing",
      "question": "What is 'heap file organization'?",
      "options": {
        "A": "Records are always organized using a hash function",
        "B": "Records are always clustered by a secondary key",
        "C": "Records are stored in strict alphabetical order only",
        "D": "Records are stored only in a B+ Tree structure",
        "E": "Records are stored in no particular order, typically in insertion order, requiring a full scan for most searches",
        "F": "Records are always stored in strict sorted order by primary key"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'Records are stored in no particular order, typically in insertion order, requiring a full scan for most searches'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 172,
      "subtopic": "Indexing, Storage & Query Processing",
      "question": "What is 'sequential (sorted) file organization'?",
      "options": {
        "A": "Records have no key field at all",
        "B": "Records are always duplicated across multiple files",
        "C": "Records are stored only using hashing, with no physical order",
        "D": "Records are physically stored in sorted order based on a specific key field, enabling efficient range queries",
        "E": "Records are stored only in memory, never on disk",
        "F": "Records are stored in completely random order with no structure"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'Records are physically stored in sorted order based on a specific key field, enabling efficient range queries'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 173,
      "subtopic": "Indexing, Storage & Query Processing",
      "question": "What is 'hashing file organization'?",
      "options": {
        "A": "Records are always duplicated across every bucket",
        "B": "Records are always stored in strict sorted order",
        "C": "Records are stored in insertion order exclusively",
        "D": "Records are placed into storage locations (buckets) determined by applying a hash function to a key value",
        "E": "Records are stored with no key-based placement logic at all",
        "F": "Records are stored only using a B+ Tree structure"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'Records are placed into storage locations (buckets) determined by applying a hash function to a key value'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 174,
      "subtopic": "Indexing, Storage & Query Processing",
      "question": "What are the typical steps involved in SQL query processing within a DBMS?",
      "options": {
        "A": "Only parsing, with no optimization or execution steps",
        "B": "Indexing, hashing, and sorting only, with no other steps",
        "C": "Encryption, compression, and archiving",
        "D": "Only execution, with no parsing or optimization",
        "E": "Backup, restore, and replication",
        "F": "Parsing and translation, optimization, and execution"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'Parsing and translation, optimization, and execution'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 175,
      "subtopic": "Indexing, Storage & Query Processing",
      "question": "What is a 'query execution plan'?",
      "options": {
        "A": "A synonym for the raw SQL query text with no further detail",
        "B": "A synonym for a database schema",
        "C": "A user access control list",
        "D": "A type of database trigger",
        "E": "A detailed strategy chosen by the query optimizer describing how the DBMS will retrieve the requested data",
        "F": "A backup schedule for the database"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'A detailed strategy chosen by the query optimizer describing how the DBMS will retrieve the requested data'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 176,
      "subtopic": "Indexing, Storage & Query Processing",
      "question": "What role does 'cost estimation' play in query optimization?",
      "options": {
        "A": "It calculates the monetary price of running a business",
        "B": "It only applies to INSERT statements, never SELECT",
        "C": "It has no impact on which plan is chosen",
        "D": "It determines user access permissions",
        "E": "It estimates the resource cost of different possible execution plans, helping the optimizer choose the most efficient one",
        "F": "It replaces the need for indexes entirely"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'It estimates the resource cost of different possible execution plans, helping the optimizer choose the most efficient one'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 177,
      "subtopic": "Indexing, Storage & Query Processing",
      "question": "Which join algorithm repeatedly scans one table's rows and, for each, scans the second table to find matches?",
      "options": {
        "A": "Cartesian Join",
        "B": "Natural Join",
        "C": "Hash Join",
        "D": "Sort-Merge Join",
        "E": "Semi-Join",
        "F": "Nested Loop Join"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'Nested Loop Join'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 178,
      "subtopic": "Indexing, Storage & Query Processing",
      "question": "Which join algorithm sorts both input tables on the join attribute first, then merges them in a single sorted pass?",
      "options": {
        "A": "Sort-Merge Join",
        "B": "Natural Join",
        "C": "Nested Loop Join",
        "D": "Hash Join",
        "E": "Cartesian Join",
        "F": "Semi-Join"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'Sort-Merge Join'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 179,
      "subtopic": "Indexing, Storage & Query Processing",
      "question": "Which join algorithm builds an in-memory hash table on one input's join attribute and probes it using the other input?",
      "options": {
        "A": "Nested Loop Join",
        "B": "Hash Join",
        "C": "Semi-Join",
        "D": "Cartesian Join",
        "E": "Natural Join",
        "F": "Sort-Merge Join"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Hash Join'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 180,
      "subtopic": "Indexing, Storage & Query Processing",
      "question": "Why is query optimization particularly important for complex SQL queries involving multiple joins and large tables?",
      "options": {
        "A": "SQL queries cannot execute at all without optimization",
        "B": "It eliminates the need for indexes entirely",
        "C": "Optimization guarantees the absolute fastest possible plan in every case with zero exceptions",
        "D": "Different execution strategies can have drastically different performance, and the optimizer aims to find an efficient plan",
        "E": "It replaces the need for a query parser",
        "F": "Optimization is only relevant for INSERT and UPDATE statements"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'Different execution strategies can have drastically different performance, and the optimizer aims to find an efficient plan'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 181,
      "subtopic": "Distributed Databases, NoSQL & Security",
      "question": "What is a distributed database?",
      "options": {
        "A": "A database that cannot be queried remotely",
        "B": "A database limited to a single table",
        "C": "A database that exists only on a single centralized server",
        "D": "A single logical database whose data is stored across multiple physical sites/locations, connected by a network",
        "E": "A database that has no network connectivity at all",
        "F": "A synonym for a NoSQL database with no distinction"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'A single logical database whose data is stored across multiple physical sites/locations, connected by a network'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 182,
      "subtopic": "Distributed Databases, NoSQL & Security",
      "question": "What is 'horizontal fragmentation' in a distributed database?",
      "options": {
        "A": "Removing all fragmentation entirely",
        "B": "Dividing a table's columns into subsets stored at different sites",
        "C": "Combining multiple tables into one at every site",
        "D": "Dividing a table's rows into subsets, each stored at a different site, based on some condition",
        "E": "Splitting a database into different DBMS software vendors",
        "F": "Duplicating the entire database identically at every site with no fragmentation logic"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'Dividing a table's rows into subsets, each stored at a different site, based on some condition'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 183,
      "subtopic": "Distributed Databases, NoSQL & Security",
      "question": "What is 'vertical fragmentation' in a distributed database?",
      "options": {
        "A": "Duplicating the entire table identically at every site",
        "B": "Combining all columns into a single wide table at one site only",
        "C": "Dividing a table's rows into subsets stored at different sites",
        "D": "Splitting the database by row count only, ignoring columns entirely",
        "E": "Dividing a table's columns into subsets, each stored at a different site, often with the primary key repeated",
        "F": "Removing all indexes from the table"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'Dividing a table's columns into subsets, each stored at a different site, often with the primary key repeated'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 184,
      "subtopic": "Distributed Databases, NoSQL & Security",
      "question": "What is 'hybrid (mixed) fragmentation' in a distributed database?",
      "options": {
        "A": "A combination of both horizontal and vertical fragmentation applied to the same table",
        "B": "A strategy that fragments only indexes, not data",
        "C": "A synonym for full replication with no fragmentation",
        "D": "A strategy limited strictly to a single site",
        "E": "A strategy that removes the need for fragmentation entirely",
        "F": "A fragmentation strategy that never combines rows and columns"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'A combination of both horizontal and vertical fragmentation applied to the same table'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 185,
      "subtopic": "Distributed Databases, NoSQL & Security",
      "question": "What is 'data replication' in a distributed database system?",
      "options": {
        "A": "Encrypting data across sites",
        "B": "Removing data from all sites simultaneously",
        "C": "Storing copies of the same data at multiple sites to improve availability and fault tolerance",
        "D": "Splitting data into fragments with no duplication at all",
        "E": "Storing each piece of data at only one site with no copies anywhere",
        "F": "A synonym for fragmentation with no distinction"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'Storing copies of the same data at multiple sites to improve availability and fault tolerance'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 186,
      "subtopic": "Distributed Databases, NoSQL & Security",
      "question": "What does the CAP theorem state about distributed systems?",
      "options": {
        "A": "A distributed system only applies to relational databases, never NoSQL",
        "B": "A distributed system can guarantee at most two of Consistency, Availability, and Partition Tolerance simultaneously",
        "C": "A distributed system can always guarantee all three of C, A, and P simultaneously with no trade-offs",
        "D": "A distributed system requires no consistency guarantees ever",
        "E": "A distributed system must always sacrifice availability entirely",
        "F": "A distributed system cannot tolerate any network partition under any circumstances"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'A distributed system can guarantee at most two of Consistency, Availability, and Partition Tolerance simultaneously'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 187,
      "subtopic": "Distributed Databases, NoSQL & Security",
      "question": "In the CAP theorem, what does 'Partition Tolerance' refer to?",
      "options": {
        "A": "A synonym for availability with no distinction",
        "B": "A property irrelevant to distributed systems",
        "C": "The system's ability to partition a table into fragments only",
        "D": "The system continues to operate despite network partitions (communication breakdowns) between nodes",
        "E": "The system's ability to guarantee perfect consistency at all times",
        "F": "The system's inability to handle any node failure whatsoever"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'The system continues to operate despite network partitions (communication breakdowns) between nodes'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 188,
      "subtopic": "Distributed Databases, NoSQL & Security",
      "question": "Which category of NoSQL database stores data as flexible, semi-structured documents, often in JSON-like format (e.g., MongoDB)?",
      "options": {
        "A": "Column-family store",
        "B": "Object-relational database",
        "C": "Purely relational database",
        "D": "Graph database",
        "E": "Document-oriented database",
        "F": "Key-Value store"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'Document-oriented database'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 189,
      "subtopic": "Distributed Databases, NoSQL & Security",
      "question": "Which category of NoSQL database stores data simply as pairs of unique keys and associated values, optimized for extremely fast lookups (e.g., Redis)?",
      "options": {
        "A": "Document-oriented database",
        "B": "Relational database",
        "C": "Graph database",
        "D": "Object-relational database",
        "E": "Column-family store",
        "F": "Key-Value store"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'Key-Value store'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 190,
      "subtopic": "Distributed Databases, NoSQL & Security",
      "question": "Which category of NoSQL database organizes data into columns grouped by column families, optimized for large-scale analytical workloads (e.g., Cassandra)?",
      "options": {
        "A": "Column-family store",
        "B": "Graph database",
        "C": "Object-relational database",
        "D": "Relational database",
        "E": "Document-oriented database",
        "F": "Key-Value store"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'Column-family store'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 191,
      "subtopic": "Distributed Databases, NoSQL & Security",
      "question": "Which category of NoSQL database is optimized for storing and querying highly interconnected data using nodes and relationships (e.g., Neo4j)?",
      "options": {
        "A": "Key-Value store",
        "B": "Graph database",
        "C": "Column-family store",
        "D": "Document-oriented database",
        "E": "Object-relational database",
        "F": "Relational database"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Graph database'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 192,
      "subtopic": "Distributed Databases, NoSQL & Security",
      "question": "What is a key general difference between SQL (relational) databases and NoSQL databases regarding schema?",
      "options": {
        "A": "SQL databases typically enforce a fixed, predefined schema, while NoSQL databases are often schema-flexible or schemaless",
        "B": "They are functionally identical regarding schema requirements",
        "C": "NoSQL databases cannot store any structured data at all",
        "D": "NoSQL databases always enforce a stricter schema than SQL databases",
        "E": "SQL databases never use any schema at all",
        "F": "Both always require an identical, fixed schema with no flexibility"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'SQL databases typically enforce a fixed, predefined schema, while NoSQL databases are often schema-flexible or schemaless'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 193,
      "subtopic": "Distributed Databases, NoSQL & Security",
      "question": "What does the BASE acronym, an alternative to ACID often associated with NoSQL systems, generally stand for?",
      "options": {
        "A": "Bounded Access, Strict Enforcement",
        "B": "Basically Available, Soft state, Eventual consistency",
        "C": "Basic Atomicity, Serializable Execution",
        "D": "Batch Aggregation, Sequential Execution",
        "E": "Backup, Availability, Security, Encryption",
        "F": "Balanced Access, Secure Encryption"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Basically Available, Soft state, Eventual consistency'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 194,
      "subtopic": "Distributed Databases, NoSQL & Security",
      "question": "What does 'eventual consistency', a property often associated with BASE and many NoSQL systems, mean?",
      "options": {
        "A": "It is identical in guarantee strength to strict ACID consistency",
        "B": "Data is never replicated at all",
        "C": "Given enough time without new updates, all replicas of a data item will eventually converge to the same value",
        "D": "It only applies to single-node systems",
        "E": "All replicas are always immediately and perfectly consistent at every moment",
        "F": "Consistency is never achieved under any circumstances"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'Given enough time without new updates, all replicas of a data item will eventually converge to the same value'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 195,
      "subtopic": "Distributed Databases, NoSQL & Security",
      "question": "What is authentication in the context of database security?",
      "options": {
        "A": "The process of normalizing a schema",
        "B": "The process of indexing sensitive data",
        "C": "The process of verifying the identity of a user or system attempting to access the database",
        "D": "The process of encrypting stored data",
        "E": "The process of backing up the database",
        "F": "The process of granting specific permissions after identity is already known"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'The process of verifying the identity of a user or system attempting to access the database'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 196,
      "subtopic": "Distributed Databases, NoSQL & Security",
      "question": "What is authorization in the context of database security, as distinct from authentication?",
      "options": {
        "A": "A process unrelated to security entirely",
        "B": "A process that only applies to database backups",
        "C": "The process of verifying a user's identity for the first time",
        "D": "A synonym for encryption with no distinction",
        "E": "A synonym for normalization",
        "F": "The process of determining what actions/resources an already-authenticated user is permitted to access"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'The process of determining what actions/resources an already-authenticated user is permitted to access'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 197,
      "subtopic": "Distributed Databases, NoSQL & Security",
      "question": "What does Discretionary Access Control (DAC) allow, in terms of managing database permissions?",
      "options": {
        "A": "All users automatically have full access to every object with no restriction",
        "B": "The owner of a database object can grant or revoke access privileges to other users at their discretion",
        "C": "Access is granted purely based on a fixed, unchangeable system-wide policy",
        "D": "Only the system administrator can ever change any permissions",
        "E": "Permissions can never be changed once set",
        "F": "It applies only to network security, not databases"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'The owner of a database object can grant or revoke access privileges to other users at their discretion'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 198,
      "subtopic": "Distributed Databases, NoSQL & Security",
      "question": "What does Mandatory Access Control (MAC) enforce, in contrast to DAC?",
      "options": {
        "A": "It applies only to network firewalls, not databases",
        "B": "Access is governed by a fixed system-wide policy that individual users/owners cannot override",
        "C": "It is identical to DAC with no practical difference",
        "D": "It removes the need for authentication entirely",
        "E": "Access is entirely at the discretion of each individual object's owner",
        "F": "No access restrictions exist at all under MAC"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Access is governed by a fixed system-wide policy that individual users/owners cannot override'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 199,
      "subtopic": "Distributed Databases, NoSQL & Security",
      "question": "What is Role-Based Access Control (RBAC)?",
      "options": {
        "A": "A model where every individual user must be granted permissions one at a time with no grouping",
        "B": "An access control model where permissions are assigned to roles, and users are granted access by being assigned to roles",
        "C": "A model identical to Mandatory Access Control with no distinction",
        "D": "A model that only applies to network hardware",
        "E": "A model that eliminates the need for any access control entirely",
        "F": "A model used only for indexing purposes"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'An access control model where permissions are assigned to roles, and users are granted access by being assigned to roles'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 200,
      "subtopic": "Distributed Databases, NoSQL & Security",
      "question": "What is SQL Injection, and why is it a serious database security concern?",
      "options": {
        "A": "A type of index used for faster queries",
        "B": "A type of database backup strategy",
        "C": "A code injection technique where an attacker inserts malicious SQL code through user input to manipulate or access unauthorized data",
        "D": "A synonym for database replication",
        "E": "A normal part of query parsing with no security implications",
        "F": "A legitimate SQL optimization technique used by DBAs"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'A code injection technique where an attacker inserts malicious SQL code through user input to manipulate or access unauthorized data'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 201,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — what is the output of: SELECT COUNT(*) FROM Employees WHERE Dept = 'IT';",
      "options": {
        "A": "4",
        "B": "1",
        "C": "6",
        "D": "0",
        "E": "2",
        "F": "3"
      },
      "answer": "E",
      "explanation": "Correct answer is E: '2'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 202,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — what is the output of: SELECT SUM(Salary) FROM Employees WHERE Dept = 'Sales';",
      "options": {
        "A": "120000",
        "B": "100000",
        "C": "110000",
        "D": "70000",
        "E": "150000",
        "F": "40000"
      },
      "answer": "C",
      "explanation": "Correct answer is C: '110000'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 203,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — what is the output of: SELECT AVG(Salary) FROM Employees WHERE Dept = 'HR';",
      "options": {
        "A": "46000",
        "B": "50000",
        "C": "48000",
        "D": "47500",
        "E": "55000",
        "F": "45000"
      },
      "answer": "D",
      "explanation": "Correct answer is D: '47500'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 204,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — what is the output of: SELECT MAX(Salary) FROM Employees;",
      "options": {
        "A": "50000",
        "B": "60000",
        "C": "55000",
        "D": "45000",
        "E": "40000",
        "F": "70000"
      },
      "answer": "F",
      "explanation": "Correct answer is F: '70000'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 205,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — what is the output of: SELECT MIN(Salary) FROM Employees;",
      "options": {
        "A": "50000",
        "B": "60000",
        "C": "45000",
        "D": "70000",
        "E": "40000",
        "F": "55000"
      },
      "answer": "E",
      "explanation": "Correct answer is E: '40000'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 206,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — how many rows are returned by: SELECT Name FROM Employees WHERE Salary > 55000;",
      "options": {
        "A": "5",
        "B": "0",
        "C": "4",
        "D": "3",
        "E": "2",
        "F": "1"
      },
      "answer": "E",
      "explanation": "Correct answer is E: '2'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 207,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — what is the output of: SELECT Name FROM Employees WHERE Dept = 'IT' AND Salary > 55000;",
      "options": {
        "A": "Bob",
        "B": "Frank",
        "C": "David",
        "D": "Alice",
        "E": "Carol",
        "F": "Eve"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'Bob'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 208,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — how many distinct department values are returned by: SELECT DISTINCT Dept FROM Employees;",
      "options": {
        "A": "4",
        "B": "3",
        "C": "5",
        "D": "1",
        "E": "2",
        "F": "6"
      },
      "answer": "B",
      "explanation": "Correct answer is B: '3'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 209,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — what is the output of: SELECT Name FROM Employees ORDER BY Salary DESC LIMIT 1;",
      "options": {
        "A": "Eve",
        "B": "David",
        "C": "Carol",
        "D": "Frank",
        "E": "Bob",
        "F": "Alice"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'Eve'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 210,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — what is the output of: SELECT Name FROM Employees ORDER BY Salary ASC LIMIT 1;",
      "options": {
        "A": "David",
        "B": "Bob",
        "C": "Frank",
        "D": "Carol",
        "E": "Alice",
        "F": "Eve"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'Frank'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 211,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — how many group rows are returned by: SELECT Dept, COUNT(*) FROM Employees GROUP BY Dept;",
      "options": {
        "A": "1",
        "B": "3",
        "C": "4",
        "D": "2",
        "E": "5",
        "F": "6"
      },
      "answer": "B",
      "explanation": "Correct answer is B: '3'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 212,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — how many department groups satisfy: SELECT Dept, SUM(Salary) FROM Employees GROUP BY Dept HAVING SUM(Salary) > 100000; (HR totals 95000, IT totals 115000, Sales totals 110000)",
      "options": {
        "A": "3",
        "B": "1",
        "C": "4",
        "D": "0",
        "E": "5",
        "F": "2"
      },
      "answer": "F",
      "explanation": "Correct answer is F: '2'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 213,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — which department has the highest average salary, based on: SELECT Dept, AVG(Salary) FROM Employees GROUP BY Dept; (HR avg 47500, IT avg 57500, Sales avg 55000)",
      "options": {
        "A": "Finance",
        "B": "Sales",
        "C": "IT",
        "D": "None",
        "E": "HR",
        "F": "All equal"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'IT'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 214,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — what is the output of: SELECT COUNT(DISTINCT Dept) FROM Employees;",
      "options": {
        "A": "6",
        "B": "3",
        "C": "4",
        "D": "5",
        "E": "1",
        "F": "2"
      },
      "answer": "B",
      "explanation": "Correct answer is B: '3'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 215,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — how many departments satisfy: SELECT Dept FROM Employees GROUP BY Dept HAVING COUNT(*) > 1; (each department has exactly 2 employees)",
      "options": {
        "A": "4",
        "B": "2",
        "C": "5",
        "D": "3",
        "E": "0",
        "F": "1"
      },
      "answer": "D",
      "explanation": "Correct answer is D: '3'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 216,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — what is the MAX(Salary) shown for Dept = 'HR' in: SELECT Dept, MAX(Salary) FROM Employees GROUP BY Dept;",
      "options": {
        "A": "55000",
        "B": "50000",
        "C": "70000",
        "D": "45000",
        "E": "60000",
        "F": "40000"
      },
      "answer": "B",
      "explanation": "Correct answer is B: '50000'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 217,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — what is the MIN(Salary) shown for Dept = 'Sales' in: SELECT Dept, MIN(Salary) FROM Employees GROUP BY Dept;",
      "options": {
        "A": "50000",
        "B": "45000",
        "C": "70000",
        "D": "40000",
        "E": "55000",
        "F": "60000"
      },
      "answer": "D",
      "explanation": "Correct answer is D: '40000'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 218,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — what is the output of: SELECT COUNT(*) FROM Employees WHERE Salary BETWEEN 45000 AND 60000;",
      "options": {
        "A": "1",
        "B": "3",
        "C": "5",
        "D": "6",
        "E": "4",
        "F": "2"
      },
      "answer": "E",
      "explanation": "Correct answer is E: '4'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 219,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — what is the output of: SELECT Name FROM Employees WHERE Name LIKE 'A%';",
      "options": {
        "A": "Frank",
        "B": "Carol",
        "C": "Eve",
        "D": "Bob",
        "E": "Alice",
        "F": "David"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'Alice'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 220,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — how many rows are returned by: SELECT Name FROM Employees WHERE Name LIKE '%e';",
      "options": {
        "A": "5",
        "B": "4",
        "C": "3",
        "D": "0",
        "E": "2",
        "F": "1"
      },
      "answer": "E",
      "explanation": "Correct answer is E: '2'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 221,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given Employees(EmpID, Name, DeptID) with rows (1,'Alice',10), (2,'Bob',20), (3,'Carol',10), (4,'David',NULL), and Departments(DeptID, DeptName) with rows (10,'HR'), (20,'IT'), (30,'Sales') — how many rows are returned by: SELECT * FROM Employees INNER JOIN Departments ON Employees.DeptID = Departments.DeptID;",
      "options": {
        "A": "0",
        "B": "1",
        "C": "4",
        "D": "5",
        "E": "3",
        "F": "2"
      },
      "answer": "E",
      "explanation": "Correct answer is E: '3'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 222,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given Employees(EmpID, Name, DeptID) with rows (1,'Alice',10), (2,'Bob',20), (3,'Carol',10), (4,'David',NULL), and Departments(DeptID, DeptName) with rows (10,'HR'), (20,'IT'), (30,'Sales') — how many rows are returned by: SELECT * FROM Employees LEFT JOIN Departments ON Employees.DeptID = Departments.DeptID;",
      "options": {
        "A": "2",
        "B": "1",
        "C": "3",
        "D": "5",
        "E": "0",
        "F": "4"
      },
      "answer": "F",
      "explanation": "Correct answer is F: '4'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 223,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given Employees(EmpID, Name, DeptID) with rows (1,'Alice',10), (2,'Bob',20), (3,'Carol',10), (4,'David',NULL), and Departments(DeptID, DeptName) with rows (10,'HR'), (20,'IT'), (30,'Sales') — how many rows are returned by: SELECT * FROM Employees RIGHT JOIN Departments ON Employees.DeptID = Departments.DeptID;",
      "options": {
        "A": "0",
        "B": "1",
        "C": "4",
        "D": "3",
        "E": "5",
        "F": "2"
      },
      "answer": "C",
      "explanation": "Correct answer is C: '4'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 224,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given Employees(EmpID, Name, DeptID) with rows (1,'Alice',10), (2,'Bob',20), (3,'Carol',10), (4,'David',NULL), and Departments(DeptID, DeptName) with rows (10,'HR'), (20,'IT'), (30,'Sales') — how many rows are returned by: SELECT * FROM Employees FULL OUTER JOIN Departments ON Employees.DeptID = Departments.DeptID;",
      "options": {
        "A": "6",
        "B": "5",
        "C": "3",
        "D": "4",
        "E": "1",
        "F": "2"
      },
      "answer": "B",
      "explanation": "Correct answer is B: '5'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 225,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given Employees(EmpID, Name, DeptID) with rows (1,'Alice',10), (2,'Bob',20), (3,'Carol',10), (4,'David',NULL), and Departments(DeptID, DeptName) with rows (10,'HR'), (20,'IT'), (30,'Sales') — how many rows are returned by: SELECT * FROM Employees CROSS JOIN Departments;",
      "options": {
        "A": "7",
        "B": "15",
        "C": "9",
        "D": "3",
        "E": "12",
        "F": "4"
      },
      "answer": "E",
      "explanation": "Correct answer is E: '12'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 226,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given Employees(EmpID, Name, DeptID) with rows (1,'Alice',10), (2,'Bob',20), (3,'Carol',10), (4,'David',NULL), and Departments(DeptID, DeptName) with rows (10,'HR'), (20,'IT'), (30,'Sales') — which JOIN type would return only Alice, Bob, and Carol, excluding David who has no matching department?",
      "options": {
        "A": "CROSS JOIN",
        "B": "LEFT JOIN",
        "C": "INNER JOIN",
        "D": "SELF JOIN",
        "E": "RIGHT JOIN",
        "F": "FULL OUTER JOIN"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'INNER JOIN'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 227,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given Employees(EmpID, Name, DeptID) with rows (1,'Alice',10), (2,'Bob',20), (3,'Carol',10), (4,'David',NULL), and Departments(DeptID, DeptName) with rows (10,'HR'), (20,'IT'), (30,'Sales') — which JOIN type guarantees that David appears in the result even though he has no matching department?",
      "options": {
        "A": "SELF JOIN",
        "B": "CROSS JOIN",
        "C": "Natural Join",
        "D": "RIGHT JOIN",
        "E": "INNER JOIN",
        "F": "LEFT JOIN"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'LEFT JOIN'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 228,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given Employees(EmpID, Name, DeptID) with rows (1,'Alice',10), (2,'Bob',20), (3,'Carol',10), (4,'David',NULL), and Departments(DeptID, DeptName) with rows (10,'HR'), (20,'IT'), (30,'Sales') — which JOIN type guarantees that the Sales department appears in the result even though it has no employees?",
      "options": {
        "A": "Natural Join",
        "B": "CROSS JOIN",
        "C": "LEFT JOIN",
        "D": "RIGHT JOIN",
        "E": "SELF JOIN",
        "F": "INNER JOIN"
      },
      "answer": "D",
      "explanation": "Correct answer is D: 'RIGHT JOIN'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 229,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "A query joins the Employees table with itself, using aliases E1 and E2, to find pairs of employees who work in the same department. What type of join is this?",
      "options": {
        "A": "FULL OUTER JOIN",
        "B": "CROSS JOIN",
        "C": "RIGHT JOIN",
        "D": "LEFT JOIN",
        "E": "INNER JOIN",
        "F": "SELF JOIN"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'SELF JOIN'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 230,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given Employees(EmpID, Name, DeptID) with rows (1,'Alice',10), (2,'Bob',20), (3,'Carol',10), (4,'David',NULL), and Departments(DeptID, DeptName) with rows (10,'HR'), (20,'IT'), (30,'Sales') — how many rows does this return: SELECT Employees.Name FROM Employees INNER JOIN Departments ON Employees.DeptID = Departments.DeptID WHERE Departments.DeptName = 'HR';",
      "options": {
        "A": "3",
        "B": "4",
        "C": "0",
        "D": "2",
        "E": "5",
        "F": "1"
      },
      "answer": "D",
      "explanation": "Correct answer is D: '2'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 231,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given Employees(EmpID, Name, DeptID) with rows (1,'Alice',10), (2,'Bob',20), (3,'Carol',10), (4,'David',NULL), and Departments(DeptID, DeptName) with rows (10,'HR'), (20,'IT'), (30,'Sales') — what is the output of: SELECT Name FROM Employees WHERE DeptID IN (SELECT DeptID FROM Departments WHERE DeptName = 'IT');",
      "options": {
        "A": "Bob",
        "B": "Carol",
        "C": "None",
        "D": "David",
        "E": "Alice and Carol",
        "F": "Alice"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'Bob'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 232,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given Employees(EmpID, Name, DeptID) with rows (1,'Alice',10), (2,'Bob',20), (3,'Carol',10), (4,'David',NULL), and Departments(DeptID, DeptName) with rows (10,'HR'), (20,'IT'), (30,'Sales') — how many rows are returned by: SELECT Name FROM Employees WHERE DeptID = (SELECT DeptID FROM Departments WHERE DeptName = 'HR');",
      "options": {
        "A": "1",
        "B": "4",
        "C": "5",
        "D": "3",
        "E": "0",
        "F": "2"
      },
      "answer": "F",
      "explanation": "Correct answer is F: '2'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 233,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given Employees(EmpID, Name, DeptID) with rows (1,'Alice',10), (2,'Bob',20), (3,'Carol',10), (4,'David',NULL), and Departments(DeptID, DeptName) with rows (10,'HR'), (20,'IT'), (30,'Sales') — what is the output of: SELECT DeptName FROM Departments WHERE DeptID NOT IN (SELECT DeptID FROM Employees WHERE DeptID IS NOT NULL);",
      "options": {
        "A": "All departments",
        "B": "Sales",
        "C": "IT",
        "D": "HR",
        "E": "HR and IT",
        "F": "None"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Sales'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 234,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — in the query: SELECT Name FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees); what type of subquery is used here?",
      "options": {
        "A": "A multi-row subquery only",
        "B": "A subquery only valid in a FROM clause",
        "C": "A non-correlated (simple) scalar subquery",
        "D": "A subquery that cannot be used in WHERE",
        "E": "An EXISTS subquery",
        "F": "A correlated subquery"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'A non-correlated (simple) scalar subquery'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 235,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given Employees(EmpID, Name, DeptID) with rows (1,'Alice',10), (2,'Bob',20), (3,'Carol',10), (4,'David',NULL), and Departments(DeptID, DeptName) with rows (10,'HR'), (20,'IT'), (30,'Sales') — what does this EXISTS subquery check: SELECT Name FROM Employees E WHERE EXISTS (SELECT 1 FROM Departments D WHERE D.DeptID = E.DeptID);",
      "options": {
        "A": "Employees who have no department",
        "B": "Employees who have a matching department in the Departments table",
        "C": "Employees with a NULL DeptID only",
        "D": "Departments with no employees",
        "E": "All employees regardless of department",
        "F": "Nothing, since EXISTS always returns FALSE"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'Employees who have a matching department in the Departments table'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 236,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "What is the key characteristic that makes a subquery 'correlated' rather than a simple nested subquery?",
      "options": {
        "A": "It always returns multiple rows",
        "B": "It references a column from the outer query, so it must be re-evaluated for each row of the outer query",
        "C": "It runs completely independently of the outer query, only once",
        "D": "It can only be used in the FROM clause",
        "E": "It is identical to a JOIN with no differences",
        "F": "It cannot be used with EXISTS"
      },
      "answer": "B",
      "explanation": "Correct answer is B: 'It references a column from the outer query, so it must be re-evaluated for each row of the outer query'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 237,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Which subquery operator checks whether a subquery returns at least one row?",
      "options": {
        "A": "ANY",
        "B": "BETWEEN",
        "C": "LIKE",
        "D": "ALL",
        "E": "EXISTS",
        "F": "IN"
      },
      "answer": "E",
      "explanation": "Correct answer is E: 'EXISTS'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 238,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Which subquery operator compares a value against every value returned by a subquery, requiring the condition to hold for all of them?",
      "options": {
        "A": "ALL",
        "B": "EXISTS",
        "C": "ANY",
        "D": "BETWEEN",
        "E": "IN",
        "F": "LIKE"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'ALL'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 239,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Which subquery operator compares a value against the values returned by a subquery, requiring the condition to hold for at least one of them?",
      "options": {
        "A": "ANY (or SOME)",
        "B": "LIKE",
        "C": "ALL",
        "D": "BETWEEN",
        "E": "EXISTS",
        "F": "IN"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'ANY (or SOME)'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 240,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given Employees(EmpID, Name, DeptID) with rows (1,'Alice',10), (2,'Bob',20), (3,'Carol',10), (4,'David',NULL), and Departments(DeptID, DeptName) with rows (10,'HR'), (20,'IT'), (30,'Sales') — what is the output of: SELECT COUNT(*) FROM Employees WHERE DeptID IN (SELECT DeptID FROM Departments);",
      "options": {
        "A": "0",
        "B": "2",
        "C": "5",
        "D": "3",
        "E": "1",
        "F": "4"
      },
      "answer": "D",
      "explanation": "Correct answer is D: '3'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 241,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — assuming no employee name matches any department name, how many total rows are returned by: SELECT Dept FROM Employees UNION SELECT Dept FROM Employees; (self-union of the same 6-row Dept column, which has values HR, IT, IT, HR, Sales, Sales)",
      "options": {
        "A": "6",
        "B": "3",
        "C": "4",
        "D": "0",
        "E": "2",
        "F": "5"
      },
      "answer": "B",
      "explanation": "Correct answer is B: '3'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 242,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "What is the key difference between UNION and UNION ALL in SQL?",
      "options": {
        "A": "UNION requires both queries to return zero rows",
        "B": "UNION ALL cannot combine more than two queries",
        "C": "UNION removes duplicate rows from the combined result, while UNION ALL keeps all duplicates",
        "D": "They are functionally identical with no difference",
        "E": "UNION ALL removes duplicates while UNION keeps them",
        "F": "UNION only works on numeric columns"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'UNION removes duplicate rows from the combined result, while UNION ALL keeps all duplicates'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 243,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "What is a prerequisite for combining two SELECT queries using UNION or UNION ALL?",
      "options": {
        "A": "The queries must have identical WHERE clauses",
        "B": "The queries must come from the exact same table",
        "C": "The queries must use identical column names only, regardless of data types",
        "D": "The queries must both use GROUP BY",
        "E": "The queries must return exactly one row each",
        "F": "Both queries must return the same number of columns with compatible data types"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'Both queries must return the same number of columns with compatible data types'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 244,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — what is the first row's Name returned by: SELECT Name FROM Employees ORDER BY Name DESC;",
      "options": {
        "A": "Bob",
        "B": "Alice",
        "C": "Frank",
        "D": "David",
        "E": "Carol",
        "F": "Eve"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'Frank'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 245,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — what is the first value returned by: SELECT DISTINCT Dept FROM Employees ORDER BY Dept ASC;",
      "options": {
        "A": "Sales",
        "B": "Alice",
        "C": "Bob",
        "D": "Finance",
        "E": "IT",
        "F": "HR"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'HR'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 246,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — assuming no employee has a NULL salary, what is the output of: SELECT Name FROM Employees WHERE Salary IS NULL;",
      "options": {
        "A": "4 rows",
        "B": "6 rows",
        "C": "3 rows",
        "D": "1 row",
        "E": "2 rows",
        "F": "0 rows"
      },
      "answer": "F",
      "explanation": "Correct answer is F: '0 rows'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 247,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given Employees(EmpID, Name, DeptID) with rows (1,'Alice',10), (2,'Bob',20), (3,'Carol',10), (4,'David',NULL), and Departments(DeptID, DeptName) with rows (10,'HR'), (20,'IT'), (30,'Sales') — what is the output of: SELECT COUNT(*) FROM Employees WHERE DeptID IS NULL;",
      "options": {
        "A": "5",
        "B": "3",
        "C": "2",
        "D": "0",
        "E": "1",
        "F": "4"
      },
      "answer": "E",
      "explanation": "Correct answer is E: '1'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 248,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Which SQL keyword, commonly used in MySQL and PostgreSQL, restricts the number of rows returned by a query?",
      "options": {
        "A": "TOP",
        "B": "FETCH FIRST only",
        "C": "LIMIT",
        "D": "FIRST",
        "E": "ROWNUM",
        "F": "SAMPLE"
      },
      "answer": "C",
      "explanation": "Correct answer is C: 'LIMIT'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 249,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "In SQL Server, which keyword is typically used in a SELECT clause to restrict the number of rows returned, in place of MySQL's LIMIT?",
      "options": {
        "A": "SAMPLE",
        "B": "ROWNUM",
        "C": "FIRST",
        "D": "LIMIT",
        "E": "FETCH ONLY",
        "F": "TOP"
      },
      "answer": "F",
      "explanation": "Correct answer is F: 'TOP'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    },
    {
      "id": 250,
      "subtopic": "SQL Practice & Query Outputs",
      "question": "Given the table Employees(EmpID, Name, Dept, Salary) with rows: (101,'Alice','HR',50000), (102,'Bob','IT',60000), (103,'Carol','IT',55000), (104,'David','HR',45000), (105,'Eve','Sales',70000), (106,'Frank','Sales',40000) — what is the output of: SELECT UPPER(Name) FROM Employees WHERE EmpID = 105;",
      "options": {
        "A": "EVE",
        "B": "EVe",
        "C": "NULL",
        "D": "Eve",
        "E": "eve",
        "F": "Error"
      },
      "answer": "A",
      "explanation": "Correct answer is A: 'EVE'. In database management, this correctly fulfills the query specification, structural rule, or theoretical definition."
    }
  ]
};
