// DBMS Programming - 200 Questions
// Intermediate Level Subtopic
window.TOPICS = window.TOPICS || {};
window.TOPICS["dbms_programming"] = {
  "id": "dbms_programming",
  "level": "intermediate",
  "title": "DBMS Programming",
  "icon": "🗄️",
  "description": "200 comprehensive multiple-choice questions with verified answer keys covering SQL programming, DDL/DML, normalization, indexing, query processing, transactions, concurrency control, and recovery.",
  "questions": [
    {
      "id": 1,
      "subtopic": "DBMS Programming",
      "question": "A column is defined as VARCHAR(10) NOT NULL DEFAULT 'NA'. What happens if an INSERT omits this column entirely?",
      "options": {
        "A": "The column is set to NULL",
        "B": "The INSERT fails with an error",
        "C": "The column is set to 'NA'",
        "D": "The column is set to an empty string"
      },
      "answer": "C",
      "explanation": "The column is set to 'NA'"
    },
    {
      "id": 2,
      "subtopic": "DBMS Programming",
      "question": "You run ALTER TABLE Emp ADD COLUMN dept_id INT REFERENCES Dept(id); on a table that already has rows. What must be true for this to succeed without extra clauses?",
      "options": {
        "A": "The Dept table must be empty",
        "B": "The new column must allow NULL (existing rows get NULL by default)",
        "C": "Every existing row must already have a matching dept_id value",
        "D": "The command always fails on non-empty tables"
      },
      "answer": "B",
      "explanation": "The new column must allow NULL (existing rows get NULL by default)"
    },
    {
      "id": 3,
      "subtopic": "DBMS Programming",
      "question": "Which statement about DROP TABLE vs TRUNCATE TABLE vs DELETE (no WHERE) is correct regarding transaction logging and rollback in most RDBMS?",
      "options": {
        "A": "All three behave identically with respect to logging",
        "B": "TRUNCATE is always rollback-able like DELETE",
        "C": "DROP TABLE can be rolled back after the session ends",
        "D": "DELETE is fully logged row-by-row and rollback-able; TRUNCATE is minimally logged and often auto-commits"
      },
      "answer": "D",
      "explanation": "DELETE is fully logged row-by-row and rollback-able; TRUNCATE is minimally logged and often auto-commits"
    },
    {
      "id": 4,
      "subtopic": "DBMS Programming",
      "question": "A query has WHERE salary > 50000 AND (dept = 'IT' OR dept = 'HR') but returns rows from other departments too. What is the most likely cause?",
      "options": {
        "A": "Missing parentheses caused AND to bind before OR, changing the intended logic",
        "B": "WHERE clauses cannot use OR",
        "C": "Parentheses are ignored in SQL WHERE clauses",
        "D": "AND always has lower precedence than OR"
      },
      "answer": "A",
      "explanation": "Missing parentheses caused AND to bind before OR, changing the intended logic"
    },
    {
      "id": 5,
      "subtopic": "DBMS Programming",
      "question": "Given SELECT dept, COUNT() FROM Emp GROUP BY dept HAVING COUNT() > 5 ORDER BY dept;, at which stage is COUNT(*) > 5 actually evaluated?",
      "options": {
        "A": "Before grouping, on individual rows",
        "B": "After ORDER BY, on the sorted result",
        "C": "At the same time as the WHERE clause",
        "D": "After grouping, on the aggregated groups, before ORDER BY"
      },
      "answer": "D",
      "explanation": "After grouping, on the aggregated groups, before ORDER BY"
    },
    {
      "id": 6,
      "subtopic": "DBMS Programming",
      "question": "A query uses WHERE name LIKE '%_%' ESCAPE '' to search a VARCHAR column. What is it actually searching for?",
      "options": {
        "A": "Names starting or ending with any character",
        "B": "Names that literally contain an underscore character",
        "C": "Names containing a backslash",
        "D": "Names that contain any single character"
      },
      "answer": "B",
      "explanation": "Names that literally contain an underscore character"
    },
    {
      "id": 7,
      "subtopic": "DBMS Programming",
      "question": "Two queries with identical SELECT lists are combined with INTERSECT, but no rows are returned even though both individually return data. What is the most likely reason?",
      "options": {
        "A": "INTERSECT only works with numeric columns",
        "B": "The queries must use SELECT * only",
        "C": "No rows are identical across all selected columns between the two result sets",
        "D": "INTERSECT is not supported unless a WHERE clause is used"
      },
      "answer": "C",
      "explanation": "No rows are identical across all selected columns between the two result sets"
    },
    {
      "id": 8,
      "subtopic": "DBMS Programming",
      "question": "Query A returns 100 rows, Query B returns 80 rows, and 30 rows are common to both. How many rows does (A EXCEPT B) UNION (B EXCEPT A) return, assuming no duplicates within each query?",
      "options": {
        "A": "150",
        "B": "100",
        "C": "80",
        "D": "120"
      },
      "answer": "D",
      "explanation": "120"
    },
    {
      "id": 9,
      "subtopic": "DBMS Programming",
      "question": "Why might UNION unexpectedly return fewer rows than UNION ALL when combining two queries that individually return no duplicate rows?",
      "options": {
        "A": "UNION always returns exactly half the rows of UNION ALL",
        "B": "UNION removes rows that are duplicated only after combining both result sets, even if each was unique alone",
        "C": "UNION ALL ignores rows with NULL values",
        "D": "UNION cannot combine queries from different tables"
      },
      "answer": "B",
      "explanation": "UNION removes rows that are duplicated only after combining both result sets, even if each was unique alone"
    },
    {
      "id": 10,
      "subtopic": "DBMS Programming",
      "question": "A column allows NULL. Which WHERE condition correctly retrieves all rows where the column is NOT set to a value?",
      "options": {
        "A": "WHERE column = NULL",
        "B": "WHERE column != NULL",
        "C": "WHERE column IS NULL",
        "D": "WHERE column <> ' '"
      },
      "answer": "C",
      "explanation": "WHERE column IS NULL"
    },
    {
      "id": 11,
      "subtopic": "DBMS Programming",
      "question": "A table has 10 rows where bonus is NULL for 3 of them. What does SELECT AVG(bonus) FROM Emp; compute?",
      "options": {
        "A": "The average of all 10 rows, treating NULL as 0",
        "B": "NULL, because any NULL in the column invalidates AVG",
        "C": "An error, since AVG cannot handle NULL",
        "D": "The average of only the 7 non-NULL values"
      },
      "answer": "D",
      "explanation": "The average of only the 7 non-NULL values"
    },
    {
      "id": 12,
      "subtopic": "DBMS Programming",
      "question": "A CHECK constraint is defined as CHECK (rating > 3). Will a row with rating = NULL be accepted?",
      "options": {
        "A": "No, because NULL always violates CHECK constraints",
        "B": "Yes, because the condition evaluates to UNKNOWN, and CHECK constraints only reject rows where the condition is FALSE",
        "C": "Yes, but only if a DEFAULT value is also specified",
        "D": "No, because NULL cannot exist in a column with a CHECK constraint"
      },
      "answer": "B",
      "explanation": "Yes, because the condition evaluates to UNKNOWN, and CHECK constraints only reject rows where the condition is FALSE"
    },
    {
      "id": 13,
      "subtopic": "DBMS Programming",
      "question": "Which function would you use to count the number of distinct department values in an Emp table, ignoring repeats?",
      "options": {
        "A": "COUNT(dept)",
        "B": "SUM(DISTINCT dept)",
        "C": "COUNT(*)",
        "D": "COUNT(DISTINCT dept)"
      },
      "answer": "D",
      "explanation": "COUNT(DISTINCT dept)"
    },
    {
      "id": 14,
      "subtopic": "DBMS Programming",
      "question": "A subquery is written as: SELECT name FROM Emp WHERE salary > (SELECT AVG(salary) FROM Emp E2 WHERE E2.dept = Emp.dept);. What type of subquery is this?",
      "options": {
        "A": "A correlated subquery, re-evaluated per outer row based on matching department",
        "B": "An uncorrelated subquery, evaluated once for the whole table",
        "C": "A scalar subquery unrelated to the outer query",
        "D": "An invalid subquery, since subqueries cannot reference outer columns"
      },
      "answer": "A",
      "explanation": "A correlated subquery, re-evaluated per outer row based on matching department"
    },
    {
      "id": 15,
      "subtopic": "DBMS Programming",
      "question": "Query: SELECT dept FROM Emp WHERE salary > ALL (SELECT salary FROM Emp WHERE dept = 'HR');. What does this return if the HR department has no employees?",
      "options": {
        "A": "No rows, since comparing to an empty set fails",
        "B": "An error due to division by zero equivalent",
        "C": "Only the HR department itself",
        "D": "All departments, since ALL over an empty set is vacuously true."
      },
      "answer": "D",
      "explanation": "All departments, since ALL over an empty set is vacuously true."
    },
    {
      "id": 16,
      "subtopic": "DBMS Programming",
      "question": "Which aggregate function would correctly compute total revenue while automatically ignoring rows with NULL revenue?",
      "options": {
        "A": "COUNT(revenue)",
        "B": "AVG(*)",
        "C": "SUM(revenue)",
        "D": "TOTAL(revenue)"
      },
      "answer": "C",
      "explanation": "SUM(revenue)"
    },
    {
      "id": 17,
      "subtopic": "DBMS Programming",
      "question": "A nested query uses NOT IN (SELECT dept_id FROM Dept WHERE dept_id IS NULL);. Why might this unexpectedly return zero rows even though matching rows should qualify?",
      "options": {
        "A": "NOT IN automatically excludes NULL from its own result set",
        "B": "NOT IN cannot be used with subqueries containing IS NULL",
        "C": "If the subquery returns any NULL value, NOT IN evaluates to UNKNOWN for all comparisons, excluding all rows",
        "D": "The subquery syntax is invalid"
      },
      "answer": "C",
      "explanation": "If the subquery returns any NULL value, NOT IN evaluates to UNKNOWN for all comparisons, excluding all rows"
    },
    {
      "id": 18,
      "subtopic": "DBMS Programming",
      "question": "In SELECT dept, MAX(salary) FROM Emp GROUP BY dept HAVING MAX(salary) = (SELECT MAX(salary) FROM Emp);, what is being identified?",
      "options": {
        "A": "The department with the highest average salary",
        "B": "All departments with above-average salaries",
        "C": "The department with the most employees",
        "D": "The department(s) containing the single highest-paid employee company-wide"
      },
      "answer": "D",
      "explanation": "The department(s) containing the single highest-paid employee company-wide"
    },
    {
      "id": 19,
      "subtopic": "DBMS Programming",
      "question": "An UPDATE statement is run without a WHERE clause: UPDATE Emp SET bonus = 500;. What is the effect?",
      "options": {
        "A": "No rows are affected since WHERE is required",
        "B": "Every row in the table gets bonus set to 500",
        "C": "Only the first row is updated",
        "D": "The statement fails with a syntax error"
      },
      "answer": "B",
      "explanation": "Every row in the table gets bonus set to 500"
    },
    {
      "id": 20,
      "subtopic": "DBMS Programming",
      "question": "Which statement correctly describes what happens if an INSERT INTO SELECT statement selects more columns than exist in the target table?",
      "options": {
        "A": "Extra columns are silently ignored",
        "B": "Extra values are stored in a hidden overflow column",
        "C": "The statement succeeds and pads missing columns with NULL",
        "D": "The statement fails due to column count mismatch"
      },
      "answer": "D",
      "explanation": "The statement fails due to column count mismatch"
    },
    {
      "id": 21,
      "subtopic": "DBMS Programming",
      "question": "A MERGE (upsert) statement matches on a key column. If a source row matches an existing target row on that key AND multiple WHEN MATCHED clauses with different conditions exist, what determines which one executes?",
      "options": {
        "A": "All matching WHEN MATCHED clauses execute simultaneously",
        "B": "The clause with the lowest column count",
        "C": "MERGE does not support multiple WHEN MATCHED clauses",
        "D": "The first WHEN MATCHED clause whose additional condition evaluates to true, evaluated in order"
      },
      "answer": "D",
      "explanation": "The first WHEN MATCHED clause whose additional condition evaluates to true, evaluated in order"
    },
    {
      "id": 22,
      "subtopic": "DBMS Programming",
      "question": "Table A has a row with no match in Table B. What does an INNER JOIN between A and B do with that row?",
      "options": {
        "A": "Includes it with NULLs for B's columns",
        "B": "Includes it with zeros for B's columns",
        "C": "Causes an error",
        "D": "Excludes it from the result entirely"
      },
      "answer": "D",
      "explanation": "Excludes it from the result entirely"
    },
    {
      "id": 23,
      "subtopic": "DBMS Programming",
      "question": "A LEFT OUTER JOIN between Emp and Dept produces rows where dept.name is NULL. What does this indicate?",
      "options": {
        "A": "The employee has no salary assigned",
        "B": "The join condition was written incorrectly and must use INNER JOIN instead",
        "C": "The employee's department ID has no matching row in the Dept table",
        "D": "The Dept table is empty"
      },
      "answer": "C",
      "explanation": "The employee's department ID has no matching row in the Dept table"
    },
    {
      "id": 24,
      "subtopic": "DBMS Programming",
      "question": "Three tables A, B, C are joined as A LEFT JOIN B ON ... LEFT JOIN C ON .... If a row in A has no match in B, what happens to the join with C?",
      "options": {
        "A": "The entire query fails since B has no match",
        "B": "C is automatically skipped for that row",
        "C": "A is excluded from the final result",
        "D": "The join with C is attempted using NULL values from B, typically producing no match unless C's join condition tolerates NULL"
      },
      "answer": "D",
      "explanation": "The join with C is attempted using NULL values from B, typically producing no match unless C's join condition tolerates NULL"
    },
    {
      "id": 25,
      "subtopic": "DBMS Programming",
      "question": "Why might a view fail to reflect newly inserted rows in the base table, even though it was defined with a simple SELECT * FROM Emp;?",
      "options": {
        "A": "Views only refresh once per day automatically",
        "B": "It shouldn't fail — a standard (non-materialized) view always reflects the current data in the base table at query time",
        "C": "Views cache data permanently at creation time",
        "D": "Views require a manual REFRESH VIEW command to see new rows"
      },
      "answer": "B",
      "explanation": "It shouldn't fail — a standard (non-materialized) view always reflects the current data in the base table at query time"
    },
    {
      "id": 26,
      "subtopic": "DBMS Programming",
      "question": "A view is defined as: CREATE VIEW HighEarners AS SELECT * FROM Emp WHERE salary > 100000 WITH CHECK OPTION;. What happens if you try to UPDATE a row through this view to set salary = 50000?",
      "options": {
        "A": "The update succeeds and the row disappears from the view",
        "B": "The update succeeds and remains visible in the view",
        "C": "WITH CHECK OPTION has no effect on UPDATE statements",
        "D": "The update is rejected because the resulting row would no longer satisfy the view's WHERE condition"
      },
      "answer": "D",
      "explanation": "The update is rejected because the resulting row would no longer satisfy the view's WHERE condition"
    },
    {
      "id": 27,
      "subtopic": "DBMS Programming",
      "question": "A view joins two tables and includes a GROUP BY clause. Why is this view typically not updatable through standard INSERT/UPDATE/DELETE?",
      "options": {
        "A": "Views with GROUP BY are automatically converted to materialized views",
        "B": "Joins are never allowed inside a CREATE VIEW statement",
        "C": "The database cannot unambiguously map an aggregated/joined row back to a single row in a single base table",
        "D": "GROUP BY views can only be queried, never defined, in standard SQL"
      },
      "answer": "C",
      "explanation": "The database cannot unambiguously map an aggregated/joined row back to a single row in a single base table"
    },
    {
      "id": 28,
      "subtopic": "DBMS Programming",
      "question": "A transaction performs an UPDATE, then encounters an error before COMMIT is called and the connection is not closed. What is the state of the update?",
      "options": {
        "A": "It is automatically committed by default",
        "B": "It remains uncommitted and can still be rolled back",
        "C": "It is permanently lost with no way to recover",
        "D": "It is applied only to a temporary copy that never merges"
      },
      "answer": "B",
      "explanation": "It remains uncommitted and can still be rolled back"
    },
    {
      "id": 29,
      "subtopic": "DBMS Programming",
      "question": "Two transactions run concurrently under READ COMMITTED isolation. T1 reads a row twice, and T2 commits an update to that row in between T1's reads. What might T1 observe?",
      "options": {
        "A": "A dirty read of uncommitted data from T2",
        "B": "No difference, since READ COMMITTED guarantees repeatable reads",
        "C": "A phantom read of new rows matching T1's query",
        "D": "A non-repeatable read — the two reads within T1 return different values"
      },
      "answer": "D",
      "explanation": "A non-repeatable read — the two reads within T1 return different values"
    },
    {
      "id": 30,
      "subtopic": "DBMS Programming",
      "question": "Which isolation level prevents phantom reads while still allowing the highest possible concurrency among the standard SQL isolation levels below SERIALIZABLE?",
      "options": {
        "A": "REPEATABLE READ always prevents phantom reads in every RDBMS",
        "B": "READ COMMITTED prevents phantom reads but not dirty reads",
        "C": "READ UNCOMMITTED prevents all anomalies except dirty reads",
        "D": "None of the levels below SERIALIZABLE fully prevent phantom reads in the ANSI SQL standard"
      },
      "answer": "D",
      "explanation": "None of the levels below SERIALIZABLE fully prevent phantom reads in the ANSI SQL standard"
    },
    {
      "id": 31,
      "subtopic": "DBMS Programming",
      "question": "A column has both a UNIQUE constraint and allows NULL. Can two rows both have NULL in this column?",
      "options": {
        "A": "No, UNIQUE treats all NULLs as equal and rejects the second one",
        "B": "Only one NULL is allowed across the entire table, same as any other UNIQUE constraint violation",
        "C": "UNIQUE constraints cannot be applied to nullable columns",
        "D": "Yes, in most SQL implementations, multiple NULLs are allowed since NULL is not considered equal to another NULL"
      },
      "answer": "D",
      "explanation": "Yes, in most SQL implementations, multiple NULLs are allowed since NULL is not considered equal to another NULL"
    },
    {
      "id": 32,
      "subtopic": "DBMS Programming",
      "question": "A FOREIGN KEY references a PRIMARY KEY in another table, but no ON DELETE clause is specified. What happens by default if you try to delete a referenced parent row that has matching child rows?",
      "options": {
        "A": "The parent row is deleted and child rows are automatically deleted too",
        "B": "The DELETE is rejected due to a referential integrity violation",
        "C": "The parent row is deleted and child foreign keys are set to NULL",
        "D": "The delete silently succeeds, leaving orphaned child rows"
      },
      "answer": "B",
      "explanation": "The DELETE is rejected due to a referential integrity violation"
    },
    {
      "id": 33,
      "subtopic": "DBMS Programming",
      "question": "A table has ON DELETE SET NULL for a foreign key column that is also part of that table's own composite PRIMARY KEY. What is likely to happen when a referenced parent row is deleted?",
      "options": {
        "A": "The foreign key column is set to NULL without issue",
        "B": "The entire child row is deleted instead of nulled",
        "C": "The primary key constraint is automatically dropped",
        "D": "The operation fails, since a primary key column cannot be set to NULL"
      },
      "answer": "D",
      "explanation": "The operation fails, since a primary key column cannot be set to NULL"
    },
    {
      "id": 34,
      "subtopic": "DBMS Programming",
      "question": "Which data type would be most appropriate for storing a monetary value like 19.99 without floating-point rounding errors?",
      "options": {
        "A": "FLOAT",
        "B": "REAL",
        "C": "DECIMAL(precision, scale)",
        "D": "INTEGER"
      },
      "answer": "C",
      "explanation": "DECIMAL(precision, scale)"
    },
    {
      "id": 35,
      "subtopic": "DBMS Programming",
      "question": "Two tables with the same name exist in different schemas within the same database. How does SQL resolve SELECT * FROM Emp; when no schema is specified?",
      "options": {
        "A": "It automatically merges both tables into one result",
        "B": "It uses the current session's default schema (or search path) to resolve the unqualified name",
        "C": "It always throws an ambiguity error",
        "D": "It always picks the first schema created"
      },
      "answer": "B",
      "explanation": "It uses the current session's default schema (or search path) to resolve the unqualified name"
    },
    {
      "id": 36,
      "subtopic": "DBMS Programming",
      "question": "Why might casting a value with CAST(salary AS INT) silently lose information compared to the original DECIMAL(10,2) column?",
      "options": {
        "A": "INT and DECIMAL are always stored identically internally",
        "B": "CAST only works between text types, so this would fail",
        "C": "The cast automatically converts to a string representation instead",
        "D": "Casting to INT truncates or rounds the decimal portion, discarding fractional precision"
      },
      "answer": "D",
      "explanation": "Casting to INT truncates or rounds the decimal portion, discarding fractional precision"
    },
    {
      "id": 37,
      "subtopic": "DBMS Programming",
      "question": "A user is granted SELECT privilege on a table but not INSERT. What happens if they attempt an INSERT statement?",
      "options": {
        "A": "The statement succeeds since SELECT implies all read/write access",
        "B": "The statement succeeds but only inserts NULL values",
        "C": "The statement is queued until INSERT is granted",
        "D": "The statement is rejected due to insufficient privileges"
      },
      "answer": "D",
      "explanation": "The statement is rejected due to insufficient privileges"
    },
    {
      "id": 38,
      "subtopic": "DBMS Programming",
      "question": "A privilege is granted using GRANT SELECT ON Emp TO userA WITH GRANT OPTION;. What additional capability does this give userA beyond querying the table?",
      "options": {
        "A": "userA automatically gets INSERT and UPDATE rights as well",
        "B": "userA can modify the table structure",
        "C": "userA becomes the owner of the table",
        "D": "userA can grant the SELECT privilege on Emp to other users"
      },
      "answer": "D",
      "explanation": "userA can grant the SELECT privilege on Emp to other users"
    },
    {
      "id": 39,
      "subtopic": "DBMS Programming",
      "question": "If a REVOKE is issued on a privilege that was granted WITH GRANT OPTION, and the original grantee had granted that privilege onward to others, what typically happens in standard SQL cascading revoke behavior?",
      "options": {
        "A": "Downstream grants remain unaffected regardless of the original revoke",
        "B": "Only the original grantee loses access; this must be manually propagated",
        "C": "Cascading revokes are not part of the SQL standard and never occur",
        "D": "The privilege is also revoked from those downstream users, unless the RDBMS is configured otherwise"
      },
      "answer": "D",
      "explanation": "The privilege is also revoked from those downstream users, unless the RDBMS is configured otherwise"
    },
    {
      "id": 40,
      "subtopic": "DBMS Programming",
      "question": "When using JDBC/ODBC to run a query with user-supplied input, why are parameterized queries (prepared statements) preferred over string concatenation?",
      "options": {
        "A": "They run measurably faster on every single query regardless of reuse",
        "B": "They automatically validate data types without any programmer effort",
        "C": "They eliminate the need for a database connection",
        "D": "They prevent user input from being interpreted as executable SQL, avoiding SQL injection"
      },
      "answer": "D",
      "explanation": "They prevent user input from being interpreted as executable SQL, avoiding SQL injection"
    },
    {
      "id": 41,
      "subtopic": "DBMS Programming",
      "question": "An application opens a database connection, runs several SQL statements, but never explicitly closes the connection or commits/rolls back an open transaction. What risk does this create?",
      "options": {
        "A": "The database automatically deletes the uncommitted data after five minutes",
        "B": "No risk exists since all connections auto-close instantly",
        "C": "The application will fail to compile",
        "D": "Locks may be held and connections may leak, potentially blocking other transactions or exhausting the connection pool"
      },
      "answer": "D",
      "explanation": "Locks may be held and connections may leak, potentially blocking other transactions or exhausting the connection pool"
    },
    {
      "id": 42,
      "subtopic": "DBMS Programming",
      "question": "In embedded SQL (e.g., using a cursor to fetch rows one at a time), what is the primary reason cursors are used instead of retrieving the full result set at once?",
      "options": {
        "A": "Cursors are required for every SELECT statement regardless of size",
        "B": "Cursors automatically parallelize query execution",
        "C": "Cursors replace the need for a WHERE clause",
        "D": "To process large result sets incrementally without loading everything into memory at once"
      },
      "answer": "D",
      "explanation": "To process large result sets incrementally without loading everything into memory at once"
    },
    {
      "id": 43,
      "subtopic": "DBMS Programming",
      "question": "A stored function is defined to return a single INT value and is called inside a SELECT list like SELECT name, get_bonus(emp_id) FROM Emp;. Why is a stored procedure generally not usable this way?",
      "options": {
        "A": "Procedures can always be used identically to functions in any context",
        "B": "Functions cannot accept parameters like emp_id",
        "C": "SELECT statements cannot call any stored routines",
        "D": "Procedures typically cannot be called directly within a SELECT expression since they don't return a value the same way functions do"
      },
      "answer": "D",
      "explanation": "Procedures typically cannot be called directly within a SELECT expression since they don't return a value the same way functions do"
    },
    {
      "id": 44,
      "subtopic": "DBMS Programming",
      "question": "A stored procedure performs multiple UPDATE statements as one logical unit of work. Why is wrapping this logic in a stored procedure with explicit transaction control beneficial over issuing the same statements individually from the application?",
      "options": {
        "A": "It permanently disables rollback for those statements",
        "B": "It converts all statements into read-only operations",
        "C": "It bypasses all constraint checks for performance",
        "D": "It ensures atomicity of the combined operations and reduces network round-trips between application and database"
      },
      "answer": "D",
      "explanation": "It ensures atomicity of the combined operations and reduces network round-trips between application and database"
    },
    {
      "id": 45,
      "subtopic": "DBMS Programming",
      "question": "A recursive stored procedure calls itself to traverse a hierarchy but has no explicit termination condition tied to changing input. What is the most likely outcome?",
      "options": {
        "A": "The database automatically halts after one level of recursion",
        "B": "It executes exactly once regardless of the recursive call",
        "C": "The procedure silently returns NULL after the first call",
        "D": "Infinite or excessive recursion until a stack/resource limit causes a runtime error"
      },
      "answer": "D",
      "explanation": "Infinite or excessive recursion until a stack/resource limit causes a runtime error"
    },
    {
      "id": 46,
      "subtopic": "DBMS Programming",
      "question": "An AFTER INSERT trigger on Orders updates a Customers.total_orders column. What is the main reason this approach is used instead of recalculating the total with a query every time it's needed?",
      "options": {
        "A": "Triggers execute faster than any SELECT query always",
        "B": "Triggers are required by SQL standard for all INSERT statements",
        "C": "Triggers replace the need for foreign keys",
        "D": "To maintain a precomputed, always-current value automatically without requiring the application to remember to update it"
      },
      "answer": "D",
      "explanation": "To maintain a precomputed, always-current value automatically without requiring the application to remember to update it"
    },
    {
      "id": 47,
      "subtopic": "DBMS Programming",
      "question": "A BEFORE UPDATE trigger modifies the NEW/incoming row's values before the update is actually applied. What is this commonly used for?",
      "options": {
        "A": "Preventing the SELECT statement that triggered it from running",
        "B": "Rolling back all previous transactions",
        "C": "Deleting the row instead of updating it",
        "D": "Enforcing business rules or auto-populating fields like updated_at timestamps before the data is persisted"
      },
      "answer": "D",
      "explanation": "Enforcing business rules or auto-populating fields like updated_at timestamps before the data is persisted"
    },
    {
      "id": 48,
      "subtopic": "DBMS Programming",
      "question": "Two triggers exist: an AFTER INSERT trigger on TableA that inserts into TableB, and an AFTER INSERT trigger on TableB that inserts into TableA. What risk does this design introduce?",
      "options": {
        "A": "No risk, since triggers cannot reference other tables",
        "B": "The second trigger is automatically disabled to prevent conflicts",
        "C": "Both triggers execute simultaneously in a single atomic step with no risk",
        "D": "A cascading/recursive trigger chain that could loop indefinitely or hit recursion limits"
      },
      "answer": "D",
      "explanation": "A cascading/recursive trigger chain that could loop indefinitely or hit recursion limits"
    },
    {
      "id": 49,
      "subtopic": "DBMS Programming",
      "question": "In a recursive CTE used to find all subordinates of a manager in an employee hierarchy, what are the two essential parts of the query?",
      "options": {
        "A": "Only a recursive member, since no base case is needed",
        "B": "An anchor member (base case) and a recursive member that references the CTE itself",
        "C": "A GROUP BY clause and a HAVING clause",
        "D": "Two separate UNION ALL queries with no self-reference"
      },
      "answer": "B",
      "explanation": "An anchor member (base case) and a recursive member that references the CTE itself"
    },
    {
      "id": 50,
      "subtopic": "DBMS Programming",
      "question": "A recursive CTE traversing a hierarchy does not terminate and keeps running until a system-imposed recursion limit is hit. What is the most likely cause?",
      "options": {
        "A": "Recursive CTEs are not supported in standard SQL",
        "B": "The recursive member's join condition doesn't correctly exclude already-visited rows, or the hierarchy contains a cycle",
        "C": "The anchor member was omitted entirely, which is required to stop recursion",
        "D": "The WITH RECURSIVE keyword was placed after the query instead of before"
      },
      "answer": "B",
      "explanation": "The recursive member's join condition doesn't correctly exclude already-visited rows, or the hierarchy contains a cycle"
    },
    {
      "id": 51,
      "subtopic": "DBMS Programming",
      "question": "Using GROUP BY ROLLUP(region, product) versus GROUP BY CUBE(region, product), what is the key structural difference in the result sets produced?",
      "options": {
        "A": "ROLLUP and CUBE always produce identical result sets",
        "B": "CUBE only works with a single grouping column",
        "C": "ROLLUP requires a HAVING clause while CUBE does not",
        "D": "ROLLUP produces a hierarchical subset of subtotals (region, then region+product, then grand total), while CUBE produces subtotals for every possible combination including product alone"
      },
      "answer": "D",
      "explanation": "ROLLUP produces a hierarchical subset of subtotals (region, then region+product, then grand total), while CUBE produces subtotals for every possible combination including product alone"
    },
    {
      "id": 52,
      "subtopic": "DBMS Programming",
      "question": "In an E-R diagram, an entity set is represented by which shape, and what distinguishes it from a weak entity set?",
      "options": {
        "A": "A diamond; weak entities use an oval instead",
        "B": "A single rectangle; a weak entity set is shown with a double rectangle",
        "C": "A circle; weak entities use a triangle",
        "D": "An ellipse; weak entities have no shape"
      },
      "answer": "B",
      "explanation": "A single rectangle; a weak entity set is shown with a double rectangle"
    },
    {
      "id": 53,
      "subtopic": "DBMS Programming",
      "question": "A weak entity set depends on a strong (identifying) entity set. What is required for a weak entity set to be uniquely identifiable?",
      "options": {
        "A": "It must have its own primary key independent of any other entity",
        "B": "It combines its partial key (discriminator) with the primary key of the identifying entity",
        "C": "It cannot have any attributes of its own",
        "D": "It must always participate in a many-to-many relationship"
      },
      "answer": "B",
      "explanation": "It combines its partial key (discriminator) with the primary key of the identifying entity"
    },
    {
      "id": 54,
      "subtopic": "DBMS Programming",
      "question": "In E-R notation, a relationship with cardinality \"one-to-many\" from entity A to entity B means:",
      "options": {
        "A": "Each A can relate to many B, but each B relates to at most one A",
        "B": "Each B can relate to many A, but each A relates to at most one B",
        "C": "Each A relates to exactly one B and vice versa",
        "D": "Both A and B can relate to many of each other"
      },
      "answer": "A",
      "explanation": "Each A can relate to many B, but each B relates to at most one A"
    },
    {
      "id": 55,
      "subtopic": "DBMS Programming",
      "question": "What does total participation of an entity set in a relationship mean, as opposed to partial participation?",
      "options": {
        "A": "Every entity in the entity set must participate in at least one relationship instance",
        "B": "Only some entities in the set are allowed to participate",
        "C": "The entity set must be a weak entity set",
        "D": "The relationship must be many-to-many"
      },
      "answer": "A",
      "explanation": "Every entity in the entity set must participate in at least one relationship instance"
    },
    {
      "id": 56,
      "subtopic": "DBMS Programming",
      "question": "A relationship set has descriptive attributes of its own (e.g., a \"date\" attribute on a \"borrows\" relationship). Where must such an attribute be placed when converting to a relational schema?",
      "options": {
        "A": "It is discarded since relationships cannot have attributes in the relational model",
        "B": "It becomes part of a separate, unrelated table",
        "C": "It is added as a column in the relation created for that relationship set",
        "D": "It must be duplicated into both participating entity tables"
      },
      "answer": "C",
      "explanation": "It is added as a column in the relation created for that relationship set"
    },
    {
      "id": 57,
      "subtopic": "DBMS Programming",
      "question": "Which constraint type restricts the value of an attribute to a specific set or range, such as CHECK (age >= 18)?",
      "options": {
        "A": "Domain constraint",
        "B": "Key constraint",
        "C": "Participation constraint",
        "D": "Mapping cardinality"
      },
      "answer": "A",
      "explanation": "Domain constraint"
    },
    {
      "id": 58,
      "subtopic": "DBMS Programming",
      "question": "What is the difference between a superkey and a candidate key in the E-R/relational model?",
      "options": {
        "A": "A superkey is any set of attributes that uniquely identifies a tuple; a candidate key is a minimal superkey with no redundant attributes",
        "B": "A candidate key can contain duplicate values while a superkey cannot",
        "C": "A superkey must always be a single attribute, unlike a candidate key",
        "D": "There is no difference; the terms are interchangeable"
      },
      "answer": "A",
      "explanation": "A superkey is any set of attributes that uniquely identifies a tuple; a candidate key is a minimal superkey with no redundant attributes"
    },
    {
      "id": 59,
      "subtopic": "DBMS Programming",
      "question": "In an E-R diagram, how is a multivalued attribute typically distinguished from a single-valued attribute?",
      "options": {
        "A": "It is shown with a double ellipse (or double oval)",
        "B": "It is shown with a dashed rectangle",
        "C": "It is shown with a diamond",
        "D": "It is shown in a smaller font"
      },
      "answer": "A",
      "explanation": "It is shown with a double ellipse (or double oval)"
    },
    {
      "id": 60,
      "subtopic": "DBMS Programming",
      "question": "A derived attribute, such as \"age\" computed from \"date_of_birth,\" is represented in an E-R diagram using which convention?",
      "options": {
        "A": "A solid ellipse identical to regular attributes",
        "B": "A dashed ellipse",
        "C": "A rectangle with rounded corners",
        "D": "No representation, since derived attributes are never modeled"
      },
      "answer": "B",
      "explanation": "A dashed ellipse"
    },
    {
      "id": 61,
      "subtopic": "DBMS Programming",
      "question": "When reducing a binary many-to-many relationship set to relational schemas, how many tables are typically required at minimum?",
      "options": {
        "A": "One table combining both entities and the relationship into a single relation",
        "B": "Two tables — one for each entity, with no separate relationship table",
        "C": "Three tables — one for each entity set and one for the relationship set, since the relationship's key is the union of both entities' keys",
        "D": "Zero additional tables — the relationship is captured entirely by foreign keys in one entity's table"
      },
      "answer": "C",
      "explanation": "Three tables — one for each entity set and one for the relationship set, since the relationship's key is the union of both entities' keys"
    },
    {
      "id": 62,
      "subtopic": "DBMS Programming",
      "question": "When reducing a one-to-many relationship set (A to B) to relational schemas, what is the most space-efficient standard approach?",
      "options": {
        "A": "Create a separate table for the relationship in every case",
        "B": "Add the primary key of A (the \"one\" side) as a foreign key attribute in B's table",
        "C": "Add the primary key of B as a foreign key in A's table",
        "D": "Merge A and B into a single combined table always"
      },
      "answer": "B",
      "explanation": "Add the primary key of A (the \"one\" side) as a foreign key attribute in B's table"
    },
    {
      "id": 63,
      "subtopic": "DBMS Programming",
      "question": "What is the primary purpose of specialization in the extended E-R model?",
      "options": {
        "A": "To combine multiple entity sets into a single generic entity set",
        "B": "To top-down decompose an entity set into subgroupings (subclasses) with distinct attributes",
        "C": "To remove attributes from an entity set entirely",
        "D": "To convert a relationship set into an entity set"
      },
      "answer": "B",
      "explanation": "To top-down decompose an entity set into subgroupings (subclasses) with distinct attributes"
    },
    {
      "id": 64,
      "subtopic": "DBMS Programming",
      "question": "Generalization in the extended E-R model is best described as:",
      "options": {
        "A": "A bottom-up process that combines multiple entity sets sharing common features into a higher-level entity set",
        "B": "A process that always requires disjoint constraints",
        "C": "The same as aggregation, treating relationships as entities",
        "D": "A method to enforce referential integrity only"
      },
      "answer": "A",
      "explanation": "A bottom-up process that combines multiple entity sets sharing common features into a higher-level entity set"
    },
    {
      "id": 65,
      "subtopic": "DBMS Programming",
      "question": "In extended E-R modeling, what does \"aggregation\" allow a designer to do?",
      "options": {
        "A": "Merge two unrelated entity sets without any relationship",
        "B": "Treat a relationship set (along with its participating entities) as a higher-level entity set that can itself participate in other relationships",
        "C": "Automatically generate primary keys for weak entities",
        "D": "Enforce disjointness among subclasses"
      },
      "answer": "B",
      "explanation": "Treat a relationship set (along with its participating entities) as a higher-level entity set that can itself participate in other relationships"
    },
    {
      "id": 66,
      "subtopic": "DBMS Programming",
      "question": "What is the difference between \"disjoint\" and \"overlapping\" constraints in specialization/generalization?",
      "options": {
        "A": "Disjoint means an entity can belong to only one subclass at a time; overlapping allows membership in multiple subclasses simultaneously",
        "B": "Disjoint allows multiple subclass memberships while overlapping restricts to one",
        "C": "Both terms describe the same constraint under different names",
        "D": "Disjoint applies only to weak entities"
      },
      "answer": "A",
      "explanation": "Disjoint means an entity can belong to only one subclass at a time; overlapping allows membership in multiple subclasses simultaneously"
    },
    {
      "id": 67,
      "subtopic": "DBMS Programming",
      "question": "A \"total\" specialization constraint requires that:",
      "options": {
        "A": "No entity in the higher-level entity set needs to belong to any subclass",
        "B": "Every entity in the higher-level entity set must belong to at least one lower-level subclass",
        "C": "Only entities without attributes can belong to subclasses",
        "D": "The specialization must also be disjoint"
      },
      "answer": "B",
      "explanation": "Every entity in the higher-level entity set must belong to at least one lower-level subclass"
    },
    {
      "id": 68,
      "subtopic": "DBMS Programming",
      "question": "Which DDL statement is used to define the structure of a new relation, including its attributes and their domains?",
      "options": {
        "A": "CREATE TABLE",
        "B": "SELECT",
        "C": "INSERT INTO",
        "D": "UPDATE"
      },
      "answer": "A",
      "explanation": "CREATE TABLE"
    },
    {
      "id": 69,
      "subtopic": "DBMS Programming",
      "question": "In DDL, which clause is used within CREATE TABLE to designate one or more attributes as uniquely identifying each tuple?",
      "options": {
        "A": "FOREIGN KEY",
        "B": "PRIMARY KEY",
        "C": "CHECK",
        "D": "UNIQUE INDEX ONLY"
      },
      "answer": "B",
      "explanation": "PRIMARY KEY"
    },
    {
      "id": 70,
      "subtopic": "DBMS Programming",
      "question": "Which of the following DDL statements would correctly enforce a foreign key relationship between Enrollment.student_id and Student.student_id?",
      "options": {
        "A": "ALTER TABLE Enrollment ADD CHECK (student_id IN Student);",
        "B": "ALTER TABLE Enrollment ADD FOREIGN KEY (student_id) REFERENCES Student(student_id);",
        "C": "ALTER TABLE Student ADD FOREIGN KEY (student_id) REFERENCES Enrollment(student_id);",
        "D": "CREATE INDEX student_id ON Enrollment;"
      },
      "answer": "B",
      "explanation": "ALTER TABLE Enrollment ADD FOREIGN KEY (student_id) REFERENCES Student(student_id);"
    },
    {
      "id": 71,
      "subtopic": "DBMS Programming",
      "question": "Which category of SQL statements (DML) is used to retrieve, insert, update, and delete data, as opposed to defining schema structure?",
      "options": {
        "A": "Data Manipulation Language",
        "B": "Data Definition Language",
        "C": "Data Control Language",
        "D": "Transaction Control Language"
      },
      "answer": "A",
      "explanation": "Data Manipulation Language"
    },
    {
      "id": 72,
      "subtopic": "DBMS Programming",
      "question": "A DML SELECT query joins two tables without any explicit relationship constraint enforced at the schema level. What is the risk to data integrity from an E-R design perspective?",
      "options": {
        "A": "None, since SQL automatically enforces logical relationships during SELECT",
        "B": "The join may silently produce a Cartesian product or logically invalid results because the underlying E-R relationship was never modeled with a proper key/foreign key constraint",
        "C": "The query will always fail with a syntax error",
        "D": "The database automatically creates the missing foreign key at query time"
      },
      "answer": "B",
      "explanation": "The join may silently produce a Cartesian product or logically invalid results because the underlying E-R relationship was never modeled with a proper key/foreign key constraint"
    },
    {
      "id": 73,
      "subtopic": "DBMS Programming",
      "question": "What is meant by an \"atomic domain\" for an attribute in the context of relational database design?",
      "options": {
        "A": "Each value in the domain is indivisible and does not contain a nested set of sub-values",
        "B": "The domain must contain only integer values",
        "C": "The domain must be defined using a CHECK constraint",
        "D": "The domain can only contain a single possible value"
      },
      "answer": "A",
      "explanation": "Each value in the domain is indivisible and does not contain a nested set of sub-values"
    },
    {
      "id": 74,
      "subtopic": "DBMS Programming",
      "question": "A column stores comma-separated values like \"Math, Physics, Chemistry\" to represent multiple subjects for one student in a single field. Why does this violate the principle of atomic domains?",
      "options": {
        "A": "Because comma-separated values cannot be indexed at all",
        "B": "Because the column mixes numeric and text data",
        "C": "Because the value is not indivisible — it packs multiple logical values into one attribute, complicating queries and integrity constraints",
        "D": "Because SQL does not allow VARCHAR columns to store text"
      },
      "answer": "C",
      "explanation": "Because the value is not indivisible — it packs multiple logical values into one attribute, complicating queries and integrity constraints"
    },
    {
      "id": 75,
      "subtopic": "DBMS Programming",
      "question": "Why does the relational model traditionally assume atomic (non-composite, non-multivalued) domains for attributes, unlike some object-relational or NoSQL models?",
      "options": {
        "A": "To simplify query languages and guarantee that operations like selection and comparison behave predictably on single indivisible values",
        "B": "Because atomic domains are required for a table to have a primary key",
        "C": "Because non-atomic domains are not supported by any storage engine",
        "D": "Because atomic domains eliminate the need for foreign keys"
      },
      "answer": "A",
      "explanation": "To simplify query languages and guarantee that operations like selection and comparison behave predictably on single indivisible values"
    },
    {
      "id": 76,
      "subtopic": "DBMS Programming",
      "question": "Two designers model the same real-world scenario differently — one uses a relationship set, the other converts the same concept into an entity set with two relationships. What E-R design issue does this illustrate?",
      "options": {
        "A": "The choice between using an entity set versus a relationship set to represent an object or concept is often not unique and depends on the semantics being modeled",
        "B": "Only one of the two designs can ever be syntactically valid in E-R notation",
        "C": "Relationship sets can never be converted into entity sets",
        "D": "This situation only arises with weak entity sets"
      },
      "answer": "A",
      "explanation": "The choice between using an entity set versus a relationship set to represent an object or concept is often not unique and depends on the semantics being modeled"
    },
    {
      "id": 77,
      "subtopic": "DBMS Programming",
      "question": "When should a concept be modeled as an attribute versus a separate entity set in E-R design?",
      "options": {
        "A": "Always model it as an attribute regardless of complexity",
        "B": "If the concept has its own descriptive properties or participates in relationships with multiple other entities, it should typically be modeled as an entity set rather than an attribute",
        "C": "Always model it as an entity set regardless of complexity",
        "D": "Attributes and entity sets are functionally identical in E-R modeling, so it never matters"
      },
      "answer": "B",
      "explanation": "If the concept has its own descriptive properties or participates in relationships with multiple other entities, it should typically be modeled as an entity set rather than an attribute"
    },
    {
      "id": 78,
      "subtopic": "DBMS Programming",
      "question": "What normal form requires that all attributes in a relation contain only atomic (indivisible) values?",
      "options": {
        "A": "First Normal Form (1NF)",
        "B": "Second Normal Form (2NF)",
        "C": "Third Normal Form (3NF)",
        "D": "Boyce-Codd Normal Form (BCNF)"
      },
      "answer": "A",
      "explanation": "First Normal Form (1NF)"
    },
    {
      "id": 79,
      "subtopic": "DBMS Programming",
      "question": "A relation is in 1NF but has a non-prime attribute that depends only on part of a composite candidate key, not the whole key. Which normal form violation does this describe?",
      "options": {
        "A": "A violation of Second Normal Form (2NF), due to a partial dependency",
        "B": "A violation of Third Normal Form (3NF) only",
        "C": "A violation of BCNF only",
        "D": "This is not a normalization violation"
      },
      "answer": "A",
      "explanation": "A violation of Second Normal Form (2NF), due to a partial dependency"
    },
    {
      "id": 80,
      "subtopic": "DBMS Programming",
      "question": "A relation is in 2NF but contains a non-prime attribute that depends on another non-prime attribute rather than directly on the candidate key. This describes a violation of which normal form?",
      "options": {
        "A": "BCNF exclusively",
        "B": "Third Normal Form (3NF), due to a transitive dependency",
        "C": "First Normal Form (1NF)",
        "D": "Fourth Normal Form (4NF)"
      },
      "answer": "B",
      "explanation": "Third Normal Form (3NF), due to a transitive dependency"
    },
    {
      "id": 81,
      "subtopic": "DBMS Programming",
      "question": "What is the key difference between Third Normal Form (3NF) and Boyce-Codd Normal Form (BCNF)?",
      "options": {
        "A": "3NF and BCNF are mathematically identical with no practical difference",
        "B": "BCNF is stricter: for every non-trivial functional dependency X → Y, X must be a superkey, whereas 3NF allows an exception when Y is a prime attribute",
        "C": "3NF is stricter than BCNF in all cases",
        "D": "BCNF only applies to relations with composite keys"
      },
      "answer": "B",
      "explanation": "BCNF is stricter: for every non-trivial functional dependency X → Y, X must be a superkey, whereas 3NF allows an exception when Y is a prime attribute"
    },
    {
      "id": 82,
      "subtopic": "DBMS Programming",
      "question": "Why might decomposing a relation into BCNF sometimes fail to preserve all functional dependencies, even though it eliminates redundancy?",
      "options": {
        "A": "BCNF decomposition always preserves every functional dependency without exception",
        "B": "Because BCNF decomposition can split attributes involved in a dependency across separate relations such that the dependency can no longer be checked without a join",
        "C": "Because BCNF only applies to relations with a single attribute",
        "D": "Because functional dependencies are irrelevant once a relation reaches 1NF"
      },
      "answer": "B",
      "explanation": "Because BCNF decomposition can split attributes involved in a dependency across separate relations such that the dependency can no longer be checked without a join"
    },
    {
      "id": 83,
      "subtopic": "DBMS Programming",
      "question": "Given a functional dependency X → Y, what does Armstrong's Axiom of \"transitivity\" allow you to infer if you also know Y → Z?",
      "options": {
        "A": "X → Z",
        "B": "Z → X",
        "C": "Y → X",
        "D": "No new dependency can be inferred"
      },
      "answer": "A",
      "explanation": "X → Z"
    },
    {
      "id": 84,
      "subtopic": "DBMS Programming",
      "question": "What does it mean for a set of functional dependencies to be a \"minimal cover\" (canonical cover) of the original set?",
      "options": {
        "A": "It contains dependencies with no extraneous attributes on either side, no redundant dependencies, and every dependency has a single attribute on the right-hand side, while remaining logically equivalent to the original set",
        "B": "It is simply the largest possible set of dependencies that can be derived",
        "C": "It must contain exactly one functional dependency",
        "D": "It is unrelated to the original set of dependencies"
      },
      "answer": "A",
      "explanation": "It contains dependencies with no extraneous attributes on either side, no redundant dependencies, and every dependency has a single attribute on the right-hand side, while remaining logically equivalent to the original set"
    },
    {
      "id": 85,
      "subtopic": "DBMS Programming",
      "question": "Using Armstrong's axioms (reflexivity, augmentation, transitivity), how would you determine whether a functional dependency X → Y is implied by a given set F?",
      "options": {
        "A": "By computing the attribute closure X+ under F and checking if Y is a subset of X+",
        "B": "By checking if X and Y have the same number of attributes",
        "C": "By verifying that X and Y appear in the same relation, regardless of dependencies",
        "D": "Armstrong's axioms cannot be used to test implication; only sampling data can"
      },
      "answer": "A",
      "explanation": "By computing the attribute closure X+ under F and checking if Y is a subset of X+"
    },
    {
      "id": 86,
      "subtopic": "DBMS Programming",
      "question": "What is the primary goal of a lossless-join decomposition algorithm when splitting a relation R into R1 and R2?",
      "options": {
        "A": "To ensure that joining R1 and R2 back together reconstructs exactly the original relation R without spurious tuples",
        "B": "To ensure R1 and R2 have an equal number of attributes",
        "C": "To guarantee R1 and R2 contain no functional dependencies",
        "D": "To eliminate the need for a primary key in either relation"
      },
      "answer": "A",
      "explanation": "To ensure that joining R1 and R2 back together reconstructs exactly the original relation R without spurious tuples"
    },
    {
      "id": 87,
      "subtopic": "DBMS Programming",
      "question": "For a decomposition of R into R1 and R2 to be guaranteed lossless-join, which condition on their common attributes must hold?",
      "options": {
        "A": "R1 and R2 must have no attributes in common",
        "B": "The common attributes (R1 ∩ R2) must form a superkey of at least one of R1 or R2",
        "C": "R1 and R2 must each contain exactly half of R's attributes",
        "D": "The common attributes must be excluded from both R1 and R2"
      },
      "answer": "B",
      "explanation": "The common attributes (R1 ∩ R2) must form a superkey of at least one of R1 or R2"
    },
    {
      "id": 88,
      "subtopic": "DBMS Programming",
      "question": "What does it mean for a decomposition to be \"dependency preserving\"?",
      "options": {
        "A": "Every functional dependency in the original set F can be verified/enforced by checking constraints within the individual decomposed relations, without needing to join them back together",
        "B": "Every relation in the decomposition must have identical functional dependencies",
        "C": "Dependency preservation means the decomposition is automatically lossless as well",
        "D": "It means no functional dependencies existed in the original relation"
      },
      "answer": "A",
      "explanation": "Every functional dependency in the original set F can be verified/enforced by checking constraints within the individual decomposed relations, without needing to join them back together"
    },
    {
      "id": 89,
      "subtopic": "DBMS Programming",
      "question": "Why is it sometimes impossible to achieve a decomposition that is simultaneously in BCNF, lossless-join, AND dependency-preserving?",
      "options": {
        "A": "It is always possible for every relation without exception",
        "B": "Because BCNF's strict requirement can force a split that separates attributes of a dependency across relations, breaking that dependency's local enforceability, while 3NF decomposition can achieve all three properties as a trade-off",
        "C": "Because lossless-join and dependency preservation are the same property",
        "D": "Because BCNF relations cannot have foreign keys"
      },
      "answer": "B",
      "explanation": "Because BCNF's strict requirement can force a split that separates attributes of a dependency across relations, breaking that dependency's local enforceability, while 3NF decomposition can achieve all three properties as a trade-off"
    },
    {
      "id": 90,
      "subtopic": "DBMS Programming",
      "question": "A multivalued dependency X →→ Y in relation R means:",
      "options": {
        "A": "For each value of X, there is a set of associated Y values that is independent of the other attributes in R",
        "B": "X functionally determines Y in the traditional single-value sense",
        "C": "Y must always be a candidate key",
        "D": "X and Y must be the same attribute"
      },
      "answer": "A",
      "explanation": "For each value of X, there is a set of associated Y values that is independent of the other attributes in R"
    },
    {
      "id": 91,
      "subtopic": "DBMS Programming",
      "question": "A relation storing (employee, skill, language) has independent multivalued facts — an employee's skills are unrelated to their known languages, but both are stored in the same table causing redundant row combinations. What does this describe?",
      "options": {
        "A": "A violation of Fourth Normal Form (4NF) due to two independent multivalued dependencies in one relation",
        "B": "A violation of First Normal Form only",
        "C": "A normal and correctly designed relation requiring no further decomposition",
        "D": "A violation of referential integrity"
      },
      "answer": "A",
      "explanation": "A violation of Fourth Normal Form (4NF) due to two independent multivalued dependencies in one relation"
    },
    {
      "id": 92,
      "subtopic": "DBMS Programming",
      "question": "What is the relationship between functional dependencies and multivalued dependencies?",
      "options": {
        "A": "Multivalued dependencies are unrelated to functional dependencies",
        "B": "Every functional dependency X → Y implies the multivalued dependency X →→ Y, but the reverse is not generally true.",
        "C": "Every multivalued dependency implies a functional dependency with the same attributes",
        "D": "Functional and multivalued dependencies always coexist identically in every relation"
      },
      "answer": "B",
      "explanation": "Every functional dependency X → Y implies the multivalued dependency X →→ Y, but the reverse is not generally true."
    },
    {
      "id": 93,
      "subtopic": "DBMS Programming",
      "question": "Which normal form specifically addresses and eliminates redundancy caused by multivalued dependencies?",
      "options": {
        "A": "Fourth Normal Form (4NF)",
        "B": "Second Normal Form (2NF)",
        "C": "First Normal Form (1NF)",
        "D": "Domain-Key Normal Form only"
      },
      "answer": "A",
      "explanation": "Fourth Normal Form (4NF)"
    },
    {
      "id": 94,
      "subtopic": "DBMS Programming",
      "question": "At which stage of the database design process are entities, relationships, and constraints typically identified before being translated into relational schemas?",
      "options": {
        "A": "Physical design phase",
        "B": "Conceptual design phase (E-R modeling)",
        "C": "Query optimization phase",
        "D": "Application coding phase"
      },
      "answer": "B",
      "explanation": "Conceptual design phase (E-R modeling)"
    },
    {
      "id": 95,
      "subtopic": "DBMS Programming",
      "question": "In the database design process, what is the primary purpose of the logical design phase, coming after conceptual design and before physical design?",
      "options": {
        "A": "To determine physical storage structures like indexes and file organization",
        "B": "To translate the conceptual (E-R) schema into a specific data model, such as relational schemas with normalized tables",
        "C": "To write the actual application source code",
        "D": "To choose the hardware on which the DBMS will run"
      },
      "answer": "B",
      "explanation": "To translate the conceptual (E-R) schema into a specific data model, such as relational schemas with normalized tables"
    },
    {
      "id": 96,
      "subtopic": "DBMS Programming",
      "question": "Why is normalization typically performed as part of the logical design phase rather than being skipped in favor of directly building application forms and reports?",
      "options": {
        "A": "Normalization has no effect on data redundancy or update anomalies",
        "B": "To minimize redundancy and prevent update, insertion, and deletion anomalies before the schema is used to build dependent application logic",
        "C": "Because forms and reports must always be built before any table is created",
        "D": "Normalization is only relevant for NoSQL databases, not relational design"
      },
      "answer": "B",
      "explanation": "To minimize redundancy and prevent update, insertion, and deletion anomalies before the schema is used to build dependent application logic"
    },
    {
      "id": 97,
      "subtopic": "DBMS Programming",
      "question": "In application programs and user interfaces built on top of a normalized database, why might a \"denormalized\" view or reporting table sometimes still be created despite normalization?",
      "options": {
        "A": "To improve read performance for reporting/analytics by reducing the number of joins needed, at the cost of some redundancy",
        "B": "Because normalized tables cannot be queried by application programs",
        "C": "Because SQL does not support joins across normalized tables",
        "D": "Because denormalization automatically enforces stronger integrity constraints"
      },
      "answer": "A",
      "explanation": "To improve read performance for reporting/analytics by reducing the number of joins needed, at the cost of some redundancy"
    },
    {
      "id": 98,
      "subtopic": "DBMS Programming",
      "question": "A user interface form allows direct editing of a multi-table joined view without any underlying INSTEAD OF triggers or defined update rules. What risk does this pose given the normalized schema?",
      "options": {
        "A": "No risk, since all joined views are automatically updatable in every RDBMS",
        "B": "The updates may be ambiguous or rejected, since the database cannot always determine which base table(s) an edit through a multi-table view should be applied to",
        "C": "The interface will always convert updates into safe INSERT statements automatically",
        "D": "Normalized schemas cannot be used as the basis for any user interface"
      },
      "answer": "B",
      "explanation": "The updates may be ambiguous or rejected, since the database cannot always determine which base table(s) an edit through a multi-table view should be applied to"
    },
    {
      "id": 99,
      "subtopic": "DBMS Programming",
      "question": "Which of the following best describes why insertion anomalies occur in an unnormalized (or under-normalized) relation?",
      "options": {
        "A": "Because the relation lacks a primary key entirely, making INSERT statements syntactically invalid",
        "B": "Because certain facts cannot be recorded without also having data for an unrelated fact due to attributes being bundled together in one relation that shouldn't be",
        "C": "Because INSERT statements are disallowed on any relation with foreign keys",
        "D": "Because insertion anomalies only occur in relations already in BCNF"
      },
      "answer": "B",
      "explanation": "Because certain facts cannot be recorded without also having data for an unrelated fact due to attributes being bundled together in one relation that shouldn't be"
    },
    {
      "id": 100,
      "subtopic": "DBMS Programming",
      "question": "A relation Student(student_id, course_id, instructor_office) has the dependency course_id → instructor_office, but the primary key is (student_id, course_id). If the last student enrolled in a course is deleted, what anomaly occurs?",
      "options": {
        "A": "A deletion anomaly, since deleting that row also unintentionally loses the fact about which office is associated with that course",
        "B": "No anomaly occurs, since deletion only affects student enrollment data",
        "C": "An insertion anomaly, since deletion always triggers unwanted inserts",
        "D": "A domain constraint violation"
      },
      "answer": "A",
      "explanation": "A deletion anomaly, since deleting that row also unintentionally loses the fact about which office is associated with that course"
    },
    {
      "id": 101,
      "subtopic": "DBMS Programming",
      "question": "A relation is in BCNF with respect to functional dependencies but still exhibits redundancy due to join dependencies not implied by any candidate key. Which normal form addresses this?",
      "options": {
        "A": "Fourth Normal Form (4NF)",
        "B": "Fifth Normal Form (5NF), also called Project-Join Normal Form",
        "C": "Third Normal Form (3NF)",
        "D": "Second Normal Form (2NF)"
      },
      "answer": "B",
      "explanation": "Fifth Normal Form (5NF), also called Project-Join Normal Form"
    },
    {
      "id": 102,
      "subtopic": "DBMS Programming",
      "question": "What is the practical significance of Fifth Normal Form (5NF) in real-world database design?",
      "options": {
        "A": "It is used constantly in every schema regardless of data patterns",
        "B": "It has no practical use and is purely theoretical",
        "C": "It is rarely needed in practice since the specific join dependencies it addresses are uncommon outside particular multi-way relationship scenarios",
        "D": "It replaces the need for BCNF entirely"
      },
      "answer": "C",
      "explanation": "It is rarely needed in practice since the specific join dependencies it addresses are uncommon outside particular multi-way relationship scenarios"
    },
    {
      "id": 103,
      "subtopic": "DBMS Programming",
      "question": "Domain-Key Normal Form (DKNF) is considered the \"ultimate\" normal form because:",
      "options": {
        "A": "It only applies to relations with a single domain",
        "B": "Every constraint on the relation is a logical consequence of the domain constraints and key constraints, eliminating all anomalies by definition",
        "C": "It automatically converts any relation into 1NF",
        "D": "It ignores functional dependencies entirely"
      },
      "answer": "B",
      "explanation": "Every constraint on the relation is a logical consequence of the domain constraints and key constraints, eliminating all anomalies by definition"
    },
    {
      "id": 104,
      "subtopic": "DBMS Programming",
      "question": "Which of the following best explains why achieving DKNF is often impractical for complex schemas?",
      "options": {
        "A": "DKNF cannot be defined mathematically",
        "B": "It is trivial to achieve for any relation with more than one attribute",
        "C": "Expressing all constraints purely as domain and key constraints can be extremely difficult or impossible for complex business rules",
        "D": "DKNF only applies to NoSQL databases"
      },
      "answer": "C",
      "explanation": "Expressing all constraints purely as domain and key constraints can be extremely difficult or impossible for complex business rules"
    },
    {
      "id": 105,
      "subtopic": "DBMS Programming",
      "question": "Given F = {A → B, B → C}, what is the closure of {A}, denoted A+?",
      "options": {
        "A": "{A, B}",
        "B": "{A}",
        "C": "{A, B, C}",
        "D": "{B, C}"
      },
      "answer": "C",
      "explanation": "{A, B, C}"
    },
    {
      "id": 106,
      "subtopic": "DBMS Programming",
      "question": "A candidate key is defined as a minimal set of attributes K such that K+ equals the full attribute set of the relation. If K+ equals the full set but K is not minimal, what is K instead called?",
      "options": {
        "A": "A candidate key",
        "B": "A superkey (but not a candidate key)",
        "C": "A foreign key",
        "D": "A partial key"
      },
      "answer": "B",
      "explanation": "A superkey (but not a candidate key)"
    },
    {
      "id": 107,
      "subtopic": "DBMS Programming",
      "question": "Which decomposition algorithm is designed to produce a set of relations that are each in 3NF, are dependency-preserving, and lossless-join?",
      "options": {
        "A": "BCNF decomposition algorithm",
        "B": "3NF synthesis algorithm using a minimal cover of functional dependencies",
        "C": "Chase algorithm only",
        "D": "Multivalued dependency closure algorithm"
      },
      "answer": "B",
      "explanation": "3NF synthesis algorithm using a minimal cover of functional dependencies"
    },
    {
      "id": 108,
      "subtopic": "DBMS Programming",
      "question": "During BCNF decomposition, a relation R violates BCNF due to X → Y where X is not a superkey. How is R typically split?",
      "options": {
        "A": "Into R1 = X ∪ Y and R2 = X ∪ (R − Y), sharing X as the common attribute",
        "B": "Into R1 = Y only and R2 = R − Y, discarding X entirely",
        "C": "R is left unchanged since BCNF violations cannot be resolved by decomposition",
        "D": "Into three relations regardless of the number of violating dependencies"
      },
      "answer": "A",
      "explanation": "Into R1 = X ∪ Y and R2 = X ∪ (R − Y), sharing X as the common attribute"
    },
    {
      "id": 109,
      "subtopic": "DBMS Programming",
      "question": "Why does the 3NF synthesis algorithm sometimes produce a relation that is a strict subset of another relation in the same decomposition?",
      "options": {
        "A": "This situation is prevented by removing any relation whose attributes are a subset of another relation's attributes, since it is redundant",
        "B": "Subset relations are always preserved because they represent distinct concepts",
        "C": "The algorithm never produces subset relations",
        "D": "Subset relations indicate that the algorithm has failed and must restart"
      },
      "answer": "A",
      "explanation": "This situation is prevented by removing any relation whose attributes are a subset of another relation's attributes, since it is redundant"
    },
    {
      "id": 110,
      "subtopic": "DBMS Programming",
      "question": "If a relation R has candidate keys {A} and {B}, and a multivalued dependency A →→ C holds but A is not a superkey, does this violate 4NF?",
      "options": {
        "A": "No, since 4NF only concerns functional dependencies",
        "B": "Yes, since 4NF requires that for every nontrivial multivalued dependency X →→ Y, X must be a superkey of R",
        "C": "No, since multivalued dependencies never affect normal form classification",
        "D": "Yes, but only if C is also a candidate key"
      },
      "answer": "B",
      "explanation": "Yes, since 4NF requires that for every nontrivial multivalued dependency X →→ Y, X must be a superkey of R"
    },
    {
      "id": 111,
      "subtopic": "DBMS Programming",
      "question": "A relation R(A, B, C) has the multivalued dependency A →→ B, and by definition, this implies which other multivalued dependency also holds on R (the complementation rule)?",
      "options": {
        "A": "A →→ C",
        "B": "B →→ A",
        "C": "C →→ A",
        "D": "B →→ C"
      },
      "answer": "A",
      "explanation": "A →→ C"
    },
    {
      "id": 112,
      "subtopic": "DBMS Programming",
      "question": "Which of the following is a trivial multivalued dependency?",
      "options": {
        "A": "X →→ Y where Y is a subset of X, or X ∪ Y equals the full attribute set of R",
        "B": "X →→ Y where X and Y share no attributes at all",
        "C": "X →→ Y where X is empty",
        "D": "X →→ Y where Y is a candidate key"
      },
      "answer": "A",
      "explanation": "X →→ Y where Y is a subset of X, or X ∪ Y equals the full attribute set of R"
    },
    {
      "id": 113,
      "subtopic": "DBMS Programming",
      "question": "In the database design process, \"requirements analysis\" primarily involves:",
      "options": {
        "A": "Writing the final SQL DDL statements for all tables",
        "B": "Gathering and documenting what data users need to store and how they intend to use it, before any schema is drawn",
        "C": "Choosing indexing strategies for performance",
        "D": "Testing the completed application interface"
      },
      "answer": "B",
      "explanation": "Gathering and documenting what data users need to store and how they intend to use it, before any schema is drawn"
    },
    {
      "id": 114,
      "subtopic": "DBMS Programming",
      "question": "Why is it recommended to validate a conceptual (E-R) schema against sample queries and use cases before moving to logical design?",
      "options": {
        "A": "To catch missing entities, relationships, or constraints early, when changes are far less costly than after implementation",
        "B": "Because SQL cannot be written until this step is completed",
        "C": "Because sample queries automatically generate the final schema",
        "D": "This step is unnecessary once normalization is applied"
      },
      "answer": "A",
      "explanation": "To catch missing entities, relationships, or constraints early, when changes are far less costly than after implementation"
    },
    {
      "id": 115,
      "subtopic": "DBMS Programming",
      "question": "A poorly designed user interface allows direct SQL text entry for all data modifications, bypassing the application's business logic layer. What database design risk does this primarily introduce?",
      "options": {
        "A": "Increased risk of data integrity violations and potential SQL injection, since validation and constraint logic in the application layer can be bypassed",
        "B": "No risk, since the DBMS always fully enforces every business rule regardless of the application layer",
        "C": "This approach always improves performance with no downsides",
        "D": "This approach is required for normalized schemas to function correctly"
      },
      "answer": "A",
      "explanation": "Increased risk of data integrity violations and potential SQL injection, since validation and constraint logic in the application layer can be bypassed"
    },
    {
      "id": 116,
      "subtopic": "DBMS Programming",
      "question": "Which type of index guarantees that the file's records are physically sorted on the indexed (search key) attribute?",
      "options": {
        "A": "A clustering (primary) index",
        "B": "A secondary index",
        "C": "A bitmap index",
        "D": "A hash index"
      },
      "answer": "A",
      "explanation": "A clustering (primary) index"
    },
    {
      "id": 117,
      "subtopic": "DBMS Programming",
      "question": "What distinguishes a \"dense\" index from a \"sparse\" index in an ordered index structure?",
      "options": {
        "A": "A dense index has an entry for every search key value in the file; a sparse index has entries only for some search key values (typically one per block)",
        "B": "A sparse index always has more entries than a dense index",
        "C": "A dense index can only be built on non-key attributes",
        "D": "Dense and sparse indices are identical in structure and only differ in name"
      },
      "answer": "A",
      "explanation": "A dense index has an entry for every search key value in the file; a sparse index has entries only for some search key values (typically one per block)"
    },
    {
      "id": 118,
      "subtopic": "DBMS Programming",
      "question": "In a multilevel index structure, what is the primary motivation for adding additional index levels on top of a single-level index?",
      "options": {
        "A": "To reduce the number of disk I/O operations needed to search a large index that itself does not fit in memory",
        "B": "To eliminate the need for a sorted file altogether",
        "C": "To increase the total storage space required, improving redundancy",
        "D": "Multilevel indices are used only for bitmap indices"
      },
      "answer": "A",
      "explanation": "To reduce the number of disk I/O operations needed to search a large index that itself does not fit in memory"
    },
    {
      "id": 119,
      "subtopic": "DBMS Programming",
      "question": "A B+-tree index of order n allows each node to have at most n pointers. What is the primary structural advantage of a B+-tree over a plain (non-B+) B-tree for database indexing?",
      "options": {
        "A": "B+-trees store data records directly in every internal node for faster access",
        "B": "All actual data pointers reside only at the leaf level, and leaves are linked sequentially, enabling efficient range queries alongside fast point lookups",
        "C": "B+-trees never require rebalancing after insertions or deletions",
        "D": "B+-trees eliminate the need for a search key entirely"
      },
      "answer": "B",
      "explanation": "All actual data pointers reside only at the leaf level, and leaves are linked sequentially, enabling efficient range queries alongside fast point lookups"
    },
    {
      "id": 120,
      "subtopic": "DBMS Programming",
      "question": "When a B+-tree leaf node overflows during an insertion, what operation is typically performed to maintain the tree's balance?",
      "options": {
        "A": "The entire tree is rebuilt from scratch",
        "B": "The leaf node is deleted along with its contents",
        "C": "The leaf node is split into two nodes, and the tree is adjusted upward, potentially splitting parent nodes as well",
        "D": "The overflowing keys are discarded permanently"
      },
      "answer": "C",
      "explanation": "The leaf node is split into two nodes, and the tree is adjusted upward, potentially splitting parent nodes as well"
    },
    {
      "id": 121,
      "subtopic": "DBMS Programming",
      "question": "Which hashing technique dynamically grows or shrinks the hash structure (adding/removing buckets) as data volume changes, without requiring periodic full reorganization?",
      "options": {
        "A": "Static hashing",
        "B": "Dynamic (extendable) hashing",
        "C": "Sequential file organization",
        "D": "Bitmap indexing"
      },
      "answer": "B",
      "explanation": "Dynamic (extendable) hashing"
    },
    {
      "id": 122,
      "subtopic": "DBMS Programming",
      "question": "What is a major drawback of static hashing when the number of records grows significantly beyond the originally anticipated size?",
      "options": {
        "A": "Bucket overflow becomes frequent, degrading performance, since the number of buckets is fixed at creation time",
        "B": "Static hashing automatically resizes with no performance impact",
        "C": "Static hashing cannot store more than one record ever",
        "D": "Static hashing requires no hash function at all"
      },
      "answer": "A",
      "explanation": "Bucket overflow becomes frequent, degrading performance, since the number of buckets is fixed at creation time"
    },
    {
      "id": 123,
      "subtopic": "DBMS Programming",
      "question": "In extendable hashing, what does the \"global depth\" of the directory represent?",
      "options": {
        "A": "The number of bits used from the hash value to determine which directory entry (and hence which bucket) a record maps to",
        "B": "The total number of records stored in the hash structure",
        "C": "The physical size of each bucket in bytes",
        "D": "The number of hash functions used simultaneously"
      },
      "answer": "A",
      "explanation": "The number of bits used from the hash value to determine which directory entry (and hence which bucket) a record maps to"
    },
    {
      "id": 124,
      "subtopic": "DBMS Programming",
      "question": "Which of the following best distinguishes ordered (tree-based) indexing from hashing as an access method?",
      "options": {
        "A": "Ordered indexing supports efficient range queries and sorted retrieval, while basic hashing is optimized for exact-match lookups but not range queries",
        "B": "Hashing always outperforms ordered indexing for every type of query",
        "C": "Ordered indices cannot support equality search at all",
        "D": "Hashing and ordered indexing are functionally identical in every respect"
      },
      "answer": "A",
      "explanation": "Ordered indexing supports efficient range queries and sorted retrieval, while basic hashing is optimized for exact-match lookups but not range queries"
    },
    {
      "id": 125,
      "subtopic": "DBMS Programming",
      "question": "What is a key trade-off to consider when choosing between a hash index and a B+-tree index for a given column?",
      "options": {
        "A": "Hash indices generally offer faster exact-match lookups but are unsuitable for range queries, whereas B+-tree indices support both but with somewhat higher overhead per lookup",
        "B": "Hash indices always support range queries more efficiently than B+-trees",
        "C": "B+-trees cannot support equality searches",
        "D": "There is no meaningful trade-off; the two structures perform identically for all query types"
      },
      "answer": "A",
      "explanation": "Hash indices generally offer faster exact-match lookups but are unsuitable for range queries, whereas B+-tree indices support both but with somewhat higher overhead per lookup"
    },
    {
      "id": 126,
      "subtopic": "DBMS Programming",
      "question": "A bitmap index is most effective on which type of column?",
      "options": {
        "A": "A column with a small number of distinct values (low cardinality), such as gender or status flags",
        "B": "A column with a unique value for every row, such as a primary key",
        "C": "A column storing large binary objects (BLOBs)",
        "D": "A column that changes value on every single query"
      },
      "answer": "A",
      "explanation": "A column with a small number of distinct values (low cardinality), such as gender or status flags"
    },
    {
      "id": 127,
      "subtopic": "DBMS Programming",
      "question": "How does a bitmap index represent the presence of a value for a given row?",
      "options": {
        "A": "Using a full copy of the row's data for each bit",
        "B": "Using a bit vector for each distinct value, where a 1 at a given position indicates that row has that value and 0 indicates it does not",
        "C": "Using a separate B+-tree for each row",
        "D": "Using a hash function applied to the row's primary key only"
      },
      "answer": "B",
      "explanation": "Using a bit vector for each distinct value, where a 1 at a given position indicates that row has that value and 0 indicates it does not"
    },
    {
      "id": 128,
      "subtopic": "DBMS Programming",
      "question": "Why can bitmap indices become inefficient for columns with very high cardinality (many distinct values)?",
      "options": {
        "A": "The number of bitmaps required approaches the number of distinct values, leading to excessive storage overhead compared to a B+-tree index",
        "B": "High cardinality columns cannot be indexed using any method",
        "C": "Bitmap indices automatically convert to hash indices at high cardinality",
        "D": "Bitmap indices perform identically regardless of cardinality"
      },
      "answer": "A",
      "explanation": "The number of bitmaps required approaches the number of distinct values, leading to excessive storage overhead compared to a B+-tree index"
    },
    {
      "id": 129,
      "subtopic": "DBMS Programming",
      "question": "Which SQL statement is used to explicitly create an index on a table's column(s)?",
      "options": {
        "A": "CREATE INDEX index_name ON table_name(column_name);",
        "B": "ALTER INDEX index_name;",
        "C": "DEFINE INDEX ON table_name;",
        "D": "INSERT INDEX table_name(column_name);"
      },
      "answer": "A",
      "explanation": "CREATE INDEX index_name ON table_name(column_name);"
    },
    {
      "id": 130,
      "subtopic": "DBMS Programming",
      "question": "What is a potential downside of creating an index on a column that is frequently updated (INSERT/UPDATE/DELETE heavy)?",
      "options": {
        "A": "Indexes have no impact on write performance whatsoever",
        "B": "The index must be maintained (updated) on every write operation, which can slow down INSERT, UPDATE, and DELETE performance",
        "C": "Indexed columns cannot be updated at all",
        "D": "Creating an index automatically disables all future writes to that column"
      },
      "answer": "B",
      "explanation": "The index must be maintained (updated) on every write operation, which can slow down INSERT, UPDATE, and DELETE performance"
    },
    {
      "id": 131,
      "subtopic": "DBMS Programming",
      "question": "Which SQL clause or command is typically used to remove an existing index from a database?",
      "options": {
        "A": "REMOVE INDEX",
        "B": "DROP INDEX index_name;",
        "C": "DELETE INDEX index_name;",
        "D": "TRUNCATE INDEX index_name;"
      },
      "answer": "B",
      "explanation": "DROP INDEX index_name;"
    },
    {
      "id": 132,
      "subtopic": "DBMS Programming",
      "question": "In query processing, what is the first major step after a SQL query is submitted, before an execution plan is chosen?",
      "options": {
        "A": "Parsing and translating the query into an internal representation, such as a relational algebra expression",
        "B": "Immediately executing the query against the storage engine",
        "C": "Committing the transaction",
        "D": "Generating the final query result set"
      },
      "answer": "A",
      "explanation": "Parsing and translating the query into an internal representation, such as a relational algebra expression"
    },
    {
      "id": 133,
      "subtopic": "DBMS Programming",
      "question": "What is the primary role of a query optimizer in the query processing pipeline?",
      "options": {
        "A": "To rewrite the SQL syntax into a different but equivalent SQL statement for the user to review",
        "B": "To evaluate multiple equivalent execution plans (e.g., different join orders or access methods) and choose one with the lowest estimated cost",
        "C": "To enforce access control privileges on the query",
        "D": "To physically reorganize the disk storage after every query"
      },
      "answer": "B",
      "explanation": "To evaluate multiple equivalent execution plans (e.g., different join orders or access methods) and choose one with the lowest estimated cost"
    },
    {
      "id": 134,
      "subtopic": "DBMS Programming",
      "question": "For a simple selection operation like WHERE id = 5 on a table with a B+-tree index on id, which access method is generally most efficient?",
      "options": {
        "A": "A full linear (sequential) scan of the entire table",
        "B": "An index scan using the B+-tree to directly locate the matching record(s)",
        "C": "A random sample scan",
        "D": "A bitmap scan regardless of index availability"
      },
      "answer": "B",
      "explanation": "An index scan using the B+-tree to directly locate the matching record(s)"
    },
    {
      "id": 135,
      "subtopic": "DBMS Programming",
      "question": "A selection condition combines two predicates with AND, and indices exist on both attributes separately. What technique can the optimizer use to leverage both indices together?",
      "options": {
        "A": "It must always ignore both indices and perform a full table scan",
        "B": "It can intersect the sets of record pointers obtained from each index scan before retrieving the actual records",
        "C": "It can only use one index and must discard the other entirely",
        "D": "It converts both indices into a single sequential scan automatically"
      },
      "answer": "B",
      "explanation": "It can intersect the sets of record pointers obtained from each index scan before retrieving the actual records"
    },
    {
      "id": 136,
      "subtopic": "DBMS Programming",
      "question": "Which external sorting algorithm is commonly used by DBMSs to sort data sets too large to fit into main memory?",
      "options": {
        "A": "Bubble sort",
        "B": "External merge sort",
        "C": "Binary search",
        "D": "Depth-first search"
      },
      "answer": "B",
      "explanation": "External merge sort"
    },
    {
      "id": 137,
      "subtopic": "DBMS Programming",
      "question": "In external merge sort, what happens during the \"run generation\" phase?",
      "options": {
        "A": "The entire file is sorted in a single in-memory pass regardless of size",
        "B": "Chunks of the file that fit in available memory are read, sorted internally, and written back to disk as sorted \"runs\"",
        "C": "Data is randomly shuffled without any sorting",
        "D": "The final merged output file is directly produced without intermediate steps"
      },
      "answer": "B",
      "explanation": "Chunks of the file that fit in available memory are read, sorted internally, and written back to disk as sorted \"runs\""
    },
    {
      "id": 138,
      "subtopic": "DBMS Programming",
      "question": "Why might a DBMS prefer to use an existing B+-tree index to retrieve rows in sorted order rather than performing an explicit sort operation?",
      "options": {
        "A": "Because indices can never be used to avoid a sort step",
        "B": "Because scanning the leaf level of a B+-tree already yields records in sorted key order, potentially avoiding a costly separate sort",
        "C": "Because B+-tree scans are always slower than external sorting",
        "D": "Because sorted retrieval is only possible using hash indices"
      },
      "answer": "B",
      "explanation": "Because scanning the leaf level of a B+-tree already yields records in sorted key order, potentially avoiding a costly separate sort"
    },
    {
      "id": 139,
      "subtopic": "DBMS Programming",
      "question": "Which join algorithm computes the Cartesian product of two relations and then filters rows based on the join condition, making it generally the least efficient basic approach?",
      "options": {
        "A": "Nested-loop join (naive/block, without indices)",
        "B": "Hash join",
        "C": "Merge join",
        "D": "Index nested-loop join"
      },
      "answer": "A",
      "explanation": "Nested-loop join (naive/block, without indices)"
    },
    {
      "id": 140,
      "subtopic": "DBMS Programming",
      "question": "Under what condition does a merge join (sort-merge join) perform particularly efficiently compared to a nested-loop join?",
      "options": {
        "A": "When both relations are already sorted (or can be cheaply sorted) on the join attribute",
        "B": "When neither relation fits in memory and no sorting is possible",
        "C": "Only when the join condition uses inequality rather than equality",
        "D": "Merge join is never more efficient than nested-loop join"
      },
      "answer": "A",
      "explanation": "When both relations are already sorted (or can be cheaply sorted) on the join attribute"
    },
    {
      "id": 141,
      "subtopic": "DBMS Programming",
      "question": "A hash join builds an in-memory hash table on the smaller relation's join attribute and probes it using the larger relation. What is a key limitation of this approach?",
      "options": {
        "A": "It performs poorly if the smaller relation (used to build the hash table) does not fit in available memory, requiring more complex partitioning strategies",
        "B": "Hash joins can only be used for outer joins, never inner joins",
        "C": "Hash joins require both relations to already be sorted",
        "D": "Hash joins cannot be used with equality join conditions"
      },
      "answer": "A",
      "explanation": "It performs poorly if the smaller relation (used to build the hash table) does not fit in available memory, requiring more complex partitioning strategies"
    },
    {
      "id": 142,
      "subtopic": "DBMS Programming",
      "question": "In query evaluation using an \"iterator\" (pipelined) model, what is the main advantage over a materialization model that writes intermediate results fully to disk between operators?",
      "options": {
        "A": "Iterators eliminate the need for any join algorithm",
        "B": "Iterators can pass tuples between operators one at a time (or in small batches), reducing the need to store entire intermediate results, saving I/O",
        "C": "Iterators always produce results faster regardless of query complexity",
        "D": "Iterators cannot be combined with selection or projection operators"
      },
      "answer": "B",
      "explanation": "Iterators can pass tuples between operators one at a time (or in small batches), reducing the need to store entire intermediate results, saving I/O"
    },
    {
      "id": 143,
      "subtopic": "DBMS Programming",
      "question": "Why might a query optimizer choose to materialize an intermediate result rather than pipeline it directly to the next operator?",
      "options": {
        "A": "Materialization is always forbidden in modern query optimizers",
        "B": "When the intermediate result will be used multiple times, or when the next operator (e.g., sort-merge join) requires the complete input before starting",
        "C": "Materialization never affects the amount of disk I/O performed",
        "D": "Pipelining is always faster in every scenario, so materialization is never chosen"
      },
      "answer": "B",
      "explanation": "When the intermediate result will be used multiple times, or when the next operator (e.g., sort-merge join) requires the complete input before starting"
    },
    {
      "id": 144,
      "subtopic": "DBMS Programming",
      "question": "Which relational algebra transformation rule allows a selection operation to be moved closer to the base relations, before a join, when the selection condition only involves attributes from one relation?",
      "options": {
        "A": "Selection pushdown (commuting selection with join)",
        "B": "Cartesian product expansion",
        "C": "Join elimination",
        "D": "Projection duplication"
      },
      "answer": "A",
      "explanation": "Selection pushdown (commuting selection with join)"
    },
    {
      "id": 145,
      "subtopic": "DBMS Programming",
      "question": "Why is transforming σ(R ⋈ S) into (σR) ⋈ S generally beneficial when the selection predicate applies only to R?",
      "options": {
        "A": "It has no effect on query cost",
        "B": "It reduces the size of R before the join is performed, often reducing the overall computation and I/O cost",
        "C": "It always changes the final result of the query",
        "D": "It forces the optimizer to use a nested-loop join exclusively"
      },
      "answer": "B",
      "explanation": "It reduces the size of R before the join is performed, often reducing the overall computation and I/O cost"
    },
    {
      "id": 146,
      "subtopic": "DBMS Programming",
      "question": "Which relational algebra equivalence rule states that natural join is commutative, i.e., R ⋈ S is equivalent to S ⋈ R?",
      "options": {
        "A": "This is true; join order can be swapped without changing the logical result, though physical cost may differ",
        "B": "This is false; joins are never commutative",
        "C": "This is only true for outer joins, not natural joins",
        "D": "This is only true if R and S have no attributes in common"
      },
      "answer": "A",
      "explanation": "This is true; join order can be swapped without changing the logical result, though physical cost may differ"
    },
    {
      "id": 147,
      "subtopic": "DBMS Programming",
      "question": "When transforming a query with multiple joins, why does join associativity (e.g., (R ⋈ S) ⋈ T equivalent to R ⋈ (S ⋈ T)) matter for optimization?",
      "options": {
        "A": "It allows the optimizer to explore different join orderings to find one with lower estimated cost, since intermediate result sizes can vary significantly by order",
        "B": "Join associativity has no impact on query cost since all orderings cost exactly the same",
        "C": "It only applies when all three relations have identical schemas",
        "D": "It prevents the optimizer from using indices on any of the relations"
      },
      "answer": "A",
      "explanation": "It allows the optimizer to explore different join orderings to find one with lower estimated cost, since intermediate result sizes can vary significantly by order"
    },
    {
      "id": 148,
      "subtopic": "DBMS Programming",
      "question": "To estimate the cost of an execution plan, what statistic does a query optimizer typically use to estimate the size of a selection result like σ(A = value)(R)?",
      "options": {
        "A": "The total number of tables in the database",
        "B": "The number of distinct values of A in R (often approximated as n(R) / V(A,R), the number of tuples divided by distinct values)",
        "C": "The number of columns in R",
        "D": "The physical disk block size only"
      },
      "answer": "B",
      "explanation": "The number of distinct values of A in R (often approximated as n(R) / V(A,R), the number of tuples divided by distinct values)"
    },
    {
      "id": 149,
      "subtopic": "DBMS Programming",
      "question": "Why do query optimizers rely on statistics like the number of distinct values, histograms, or table cardinalities instead of computing exact costs by executing all possible plans?",
      "options": {
        "A": "Executing every possible plan is generally far too expensive, so estimated statistics allow choosing a good plan quickly without exhaustive execution",
        "B": "Exact costs are always cheaper to compute than using statistics",
        "C": "Statistics are purely decorative and do not affect plan choice",
        "D": "Query optimizers never need cost estimates since all plans have identical cost"
      },
      "answer": "A",
      "explanation": "Executing every possible plan is generally far too expensive, so estimated statistics allow choosing a good plan quickly without exhaustive execution"
    },
    {
      "id": 150,
      "subtopic": "DBMS Programming",
      "question": "A materialized view stores the precomputed result of a query physically on disk. What is the main trade-off compared to a standard (non-materialized) view?",
      "options": {
        "A": "Materialized views provide faster read access at the cost of needing to be refreshed/maintained as underlying data changes, using extra storage",
        "B": "Materialized views always update instantly and automatically with zero overhead",
        "C": "Materialized views cannot be queried using SQL",
        "D": "Materialized views eliminate the need for indices entirely"
      },
      "answer": "A",
      "explanation": "Materialized views provide faster read access at the cost of needing to be refreshed/maintained as underlying data changes, using extra storage"
    },
    {
      "id": 151,
      "subtopic": "DBMS Programming",
      "question": "What is \"incremental view maintenance\" in the context of materialized views?",
      "options": {
        "A": "Recomputing the entire materialized view from scratch after every single change to the base tables",
        "B": "Updating only the portion of the materialized view affected by changes to the underlying base tables, rather than recomputing the whole view",
        "C": "Deleting the materialized view entirely after each update",
        "D": "A technique used only for non-materialized views"
      },
      "answer": "B",
      "explanation": "Updating only the portion of the materialized view affected by changes to the underlying base tables, rather than recomputing the whole view"
    },
    {
      "id": 152,
      "subtopic": "DBMS Programming",
      "question": "In advanced query optimization, what is the purpose of using a \"cost-based\" optimizer as opposed to a purely \"rule-based\" (heuristic) optimizer?",
      "options": {
        "A": "Cost-based optimizers ignore all statistics and rely solely on fixed transformation rules",
        "B": "Cost-based optimizers estimate the actual resource cost (I/O, CPU) of multiple candidate plans using statistics, selecting the plan with the lowest estimated cost rather than applying fixed heuristics alone",
        "C": "Rule-based and cost-based optimizers always produce identical execution plans",
        "D": "Cost-based optimization is only applicable to single-table queries"
      },
      "answer": "B",
      "explanation": "Cost-based optimizers estimate the actual resource cost (I/O, CPU) of multiple candidate plans using statistics, selecting the plan with the lowest estimated cost rather than applying fixed heuristics alone"
    },
    {
      "id": 153,
      "subtopic": "DBMS Programming",
      "question": "Why can optimizing queries with many joins become computationally expensive for the optimizer itself, motivating the use of dynamic programming or heuristics?",
      "options": {
        "A": "The number of possible join orderings grows combinatorially (roughly factorially) with the number of relations, making exhaustive search impractical beyond a small number of tables",
        "B": "Query optimizers can only handle a maximum of two relations regardless of technique",
        "C": "Join order has no effect on the number of possible plans",
        "D": "Adding more joins always reduces the number of possible execution plans"
      },
      "answer": "A",
      "explanation": "The number of possible join orderings grows combinatorially (roughly factorially) with the number of relations, making exhaustive search impractical beyond a small number of tables"
    },
    {
      "id": 154,
      "subtopic": "DBMS Programming",
      "question": "In the simple transaction model, what are the two basic low-level operations a transaction performs on data items, besides computations?",
      "options": {
        "A": "OPEN and CLOSE",
        "B": "read(X) and write(X)",
        "C": "LOCK and UNLOCK",
        "D": "COMMIT and ABORT only"
      },
      "answer": "B",
      "explanation": "read(X) and write(X)"
    },
    {
      "id": 155,
      "subtopic": "DBMS Programming",
      "question": "Which transaction state indicates that the transaction has completed its final statement but has not yet been permanently recorded?",
      "options": {
        "A": "Active",
        "B": "Partially committed",
        "C": "Failed",
        "D": "Aborted"
      },
      "answer": "B",
      "explanation": "Partially committed"
    },
    {
      "id": 156,
      "subtopic": "DBMS Programming",
      "question": "What distinguishes a \"failed\" transaction state from an \"aborted\" transaction state?",
      "options": {
        "A": "Failed means execution cannot proceed normally and the transaction must be rolled back; aborted means the rollback has completed and the database has been restored",
        "B": "They are identical states with different names",
        "C": "Aborted always occurs before failed in the transaction lifecycle",
        "D": "Failed transactions are always committed instead of rolled back"
      },
      "answer": "A",
      "explanation": "Failed means execution cannot proceed normally and the transaction must be rolled back; aborted means the rollback has completed and the database has been restored"
    },
    {
      "id": 157,
      "subtopic": "DBMS Programming",
      "question": "Which storage type loses its contents when the system crashes or loses power, such as main memory (RAM)?",
      "options": {
        "A": "Volatile storage",
        "B": "Nonvolatile storage",
        "C": "Stable storage",
        "D": "Archival storage"
      },
      "answer": "A",
      "explanation": "Volatile storage"
    },
    {
      "id": 158,
      "subtopic": "DBMS Programming",
      "question": "Why is \"stable storage\" considered a theoretical abstraction rather than something perfectly achievable in practice?",
      "options": {
        "A": "Because stable storage is meant to survive all failures, but in practice this is approximated using techniques like redundant copies on separate nonvolatile media rather than guaranteed absolutely",
        "B": "Because stable storage refers only to RAM",
        "C": "Because stable storage is identical to volatile storage",
        "D": "Because stable storage cannot be approximated at all in real systems"
      },
      "answer": "A",
      "explanation": "Because stable storage is meant to survive all failures, but in practice this is approximated using techniques like redundant copies on separate nonvolatile media rather than guaranteed absolutely"
    },
    {
      "id": 159,
      "subtopic": "DBMS Programming",
      "question": "Which ACID property ensures that once a transaction commits, its changes persist even if the system crashes immediately afterward?",
      "options": {
        "A": "Isolation",
        "B": "Consistency",
        "C": "Durability",
        "D": "Atomicity"
      },
      "answer": "C",
      "explanation": "Durability"
    },
    {
      "id": 160,
      "subtopic": "DBMS Programming",
      "question": "How is atomicity typically implemented at the storage level to allow undoing a transaction's partial effects after a failure?",
      "options": {
        "A": "By maintaining a log that records old and/or new values of updated data items, enabling undo/redo operations during recovery",
        "B": "By preventing any transaction from writing to disk until it commits",
        "C": "By duplicating the entire database before every transaction",
        "D": "Atomicity cannot be implemented; it is purely a conceptual guarantee"
      },
      "answer": "A",
      "explanation": "By maintaining a log that records old and/or new values of updated data items, enabling undo/redo operations during recovery"
    },
    {
      "id": 161,
      "subtopic": "DBMS Programming",
      "question": "A query uses a scalar subquery in the SELECT list, such as SELECT name, (SELECT COUNT(*) FROM Orders WHERE Orders.cust_id = Customers.id) FROM Customers;. What must be true for this to execute without error?",
      "options": {
        "A": "The subquery must return exactly one value per outer row (a single column, single row result)",
        "B": "The subquery must always return multiple rows",
        "C": "The subquery cannot reference the outer query's columns",
        "D": "Scalar subqueries are not allowed in the SELECT list"
      },
      "answer": "A",
      "explanation": "The subquery must return exactly one value per outer row (a single column, single row result)"
    },
    {
      "id": 162,
      "subtopic": "DBMS Programming",
      "question": "Using the SQL WITH clause to define a named temporary result set, what is a key benefit when the same subquery logic is needed multiple times in one statement?",
      "options": {
        "A": "It automatically creates a permanent table in the database",
        "B": "It avoids repeating the same subquery text multiple times, potentially also improving readability and letting the optimizer evaluate it once",
        "C": "It replaces the need for a FROM clause entirely",
        "D": "It bypasses all WHERE clause filtering"
      },
      "answer": "B",
      "explanation": "It avoids repeating the same subquery text multiple times, potentially also improving readability and letting the optimizer evaluate it once"
    },
    {
      "id": 163,
      "subtopic": "DBMS Programming",
      "question": "What does the SQL CASE expression allow you to do within a query, such as in a SELECT list?",
      "options": {
        "A": "Perform conditional logic, returning different values based on specified conditions, similar to if-then-else",
        "B": "Create a new table conditionally",
        "C": "Define a trigger dynamically",
        "D": "Replace the need for a WHERE clause"
      },
      "answer": "A",
      "explanation": "Perform conditional logic, returning different values based on specified conditions, similar to if-then-else"
    },
    {
      "id": 164,
      "subtopic": "DBMS Programming",
      "question": "Which SQL isolation level is most commonly implemented using multiversion concurrency control (MVCC), allowing readers to see a consistent snapshot without blocking writers?",
      "options": {
        "A": "READ UNCOMMITTED",
        "B": "Snapshot isolation (often mapped to REPEATABLE READ or SERIALIZABLE depending on RDBMS)",
        "C": "No isolation level uses this technique",
        "D": "Only SERIALIZABLE uses this technique"
      },
      "answer": "B",
      "explanation": "Snapshot isolation (often mapped to REPEATABLE READ or SERIALIZABLE depending on RDBMS)"
    },
    {
      "id": 165,
      "subtopic": "DBMS Programming",
      "question": "In implementing SERIALIZABLE isolation using strict two-phase locking, what guarantee does this combination provide regarding transaction schedules?",
      "options": {
        "A": "It guarantees the schedule is conflict-serializable and recoverable, preventing anomalies like dirty reads, non-repeatable reads, and phantoms",
        "B": "It only prevents dirty reads and nothing else",
        "C": "It guarantees higher performance than any other isolation level in all cases",
        "D": "It has no effect on serializability, only on durability"
      },
      "answer": "A",
      "explanation": "It guarantees the schedule is conflict-serializable and recoverable, preventing anomalies like dirty reads, non-repeatable reads, and phantoms"
    },
    {
      "id": 166,
      "subtopic": "DBMS Programming",
      "question": "In SQL, how is a transaction's isolation level typically set for the current session or transaction?",
      "options": {
        "A": "SET TRANSACTION ISOLATION LEVEL <level>;",
        "B": "ALTER ISOLATION LEVEL <level>;",
        "C": "CREATE ISOLATION <level>;",
        "D": "UPDATE TRANSACTION SET LEVEL = <level>;"
      },
      "answer": "A",
      "explanation": "SET TRANSACTION ISOLATION LEVEL <level>;"
    },
    {
      "id": 167,
      "subtopic": "DBMS Programming",
      "question": "Which SQL statement explicitly marks the boundary where a transaction begins, in systems that don't default to auto-commit mode?",
      "options": {
        "A": "START TRANSACTION or BEGIN",
        "B": "END TRANSACTION",
        "C": "OPEN TRANSACTION",
        "D": "INIT TRANSACTION"
      },
      "answer": "A",
      "explanation": "START TRANSACTION or BEGIN"
    },
    {
      "id": 168,
      "subtopic": "DBMS Programming",
      "question": "What SQL construct allows a transaction to roll back to an intermediate point without undoing the entire transaction?",
      "options": {
        "A": "SAVEPOINT, combined with ROLLBACK TO SAVEPOINT",
        "B": "PARTIAL COMMIT",
        "C": "ROLLBACK ONLY",
        "D": "SQL has no mechanism for partial rollback"
      },
      "answer": "A",
      "explanation": "SAVEPOINT, combined with ROLLBACK TO SAVEPOINT"
    },
    {
      "id": 169,
      "subtopic": "DBMS Programming",
      "question": "Which locking protocol requires a transaction to acquire all necessary locks before performing any unlock operation, split into a \"growing phase\" and a \"shrinking phase\"?",
      "options": {
        "A": "Two-phase locking (2PL)",
        "B": "Timestamp ordering protocol",
        "C": "Validation-based protocol",
        "D": "Multiple granularity protocol"
      },
      "answer": "A",
      "explanation": "Two-phase locking (2PL)"
    },
    {
      "id": 170,
      "subtopic": "DBMS Programming",
      "question": "What is the key difference between \"strict\" two-phase locking and basic two-phase locking?",
      "options": {
        "A": "Strict 2PL holds all exclusive (write) locks until the transaction commits or aborts, preventing other transactions from reading uncommitted data, whereas basic 2PL only requires locks to not be reacquired after the first unlock",
        "B": "Strict 2PL releases all locks immediately after acquiring them",
        "C": "Basic 2PL guarantees serializability while strict 2PL does not",
        "D": "There is no meaningful difference between the two"
      },
      "answer": "A",
      "explanation": "Strict 2PL holds all exclusive (write) locks until the transaction commits or aborts, preventing other transactions from reading uncommitted data, whereas basic 2PL only requires locks to not be reacquired after the first unlock"
    },
    {
      "id": 171,
      "subtopic": "DBMS Programming",
      "question": "Under two-phase locking, why can a valid schedule still potentially lead to a deadlock even though it guarantees serializability?",
      "options": {
        "A": "2PL guarantees serializability of the schedule but does not, by itself, prevent circular wait conditions between transactions holding and requesting locks",
        "B": "2PL prevents deadlocks by definition, so this situation cannot occur",
        "C": "Deadlocks only occur in systems without any locking protocol",
        "D": "2PL eliminates the need for lock compatibility checks entirely"
      },
      "answer": "A",
      "explanation": "2PL guarantees serializability of the schedule but does not, by itself, prevent circular wait conditions between transactions holding and requesting locks"
    },
    {
      "id": 172,
      "subtopic": "DBMS Programming",
      "question": "A deadlock occurs when transactions form a cycle of wait conditions. Which data structure is commonly used to detect this cycle?",
      "options": {
        "A": "A wait-for graph, where a cycle indicates a deadlock",
        "B": "A B+-tree of transaction IDs",
        "C": "A hash table of lock timestamps",
        "D": "A bitmap of active transactions"
      },
      "answer": "A",
      "explanation": "A wait-for graph, where a cycle indicates a deadlock"
    },
    {
      "id": 173,
      "subtopic": "DBMS Programming",
      "question": "Which deadlock handling approach prevents deadlocks from occurring at all, rather than detecting and resolving them after the fact?",
      "options": {
        "A": "Deadlock detection and recovery",
        "B": "Deadlock prevention (e.g., using ordering schemes or timestamp-based schemes like wait-die/wound-wait)",
        "C": "Timestamp ordering has no relation to deadlocks",
        "D": "Lock escalation exclusively"
      },
      "answer": "B",
      "explanation": "Deadlock prevention (e.g., using ordering schemes or timestamp-based schemes like wait-die/wound-wait)"
    },
    {
      "id": 174,
      "subtopic": "DBMS Programming",
      "question": "In the \"wound-wait\" deadlock prevention scheme, what happens when an older transaction requests a lock held by a younger transaction?",
      "options": {
        "A": "The older transaction is forced to wait until the younger one releases the lock, with no other action",
        "B": "The younger transaction is \"wounded\" (aborted/rolled back), and the older transaction acquires the lock",
        "C": "Both transactions are aborted immediately",
        "D": "The request is denied permanently with no retry"
      },
      "answer": "B",
      "explanation": "The younger transaction is \"wounded\" (aborted/rolled back), and the older transaction acquires the lock"
    },
    {
      "id": 175,
      "subtopic": "DBMS Programming",
      "question": "In the \"wait-die\" deadlock prevention scheme, what happens when an older transaction requests a lock held by a younger transaction?",
      "options": {
        "A": "The older transaction is allowed to wait",
        "B": "The older transaction is immediately aborted (dies)",
        "C": "The younger transaction is aborted instead",
        "D": "Both transactions proceed concurrently without conflict"
      },
      "answer": "A",
      "explanation": "The older transaction is allowed to wait"
    },
    {
      "id": 176,
      "subtopic": "DBMS Programming",
      "question": "Once a deadlock is detected via a wait-for graph cycle, what must the system do to resolve it?",
      "options": {
        "A": "Select one or more transactions in the cycle as victims and roll them back to break the cycle",
        "B": "Automatically commit all transactions in the cycle",
        "C": "Ignore the cycle since it resolves itself over time",
        "D": "Permanently halt the entire database system"
      },
      "answer": "A",
      "explanation": "Select one or more transactions in the cycle as victims and roll them back to break the cycle"
    },
    {
      "id": 177,
      "subtopic": "DBMS Programming",
      "question": "What is a key criterion the system should consider when selecting a \"victim\" transaction to abort during deadlock resolution, to avoid starvation?",
      "options": {
        "A": "Always pick the transaction with the least amount of work done, without considering how often it has been previously chosen as a victim",
        "B": "Consider factors like the transaction's age and how many times it has previously been rolled back, to prevent the same transaction from being repeatedly chosen (starvation)",
        "C": "Randomly select any transaction with no regard for repeated selection",
        "D": "Only ever abort the oldest transaction in the system, regardless of cycle membership"
      },
      "answer": "B",
      "explanation": "Consider factors like the transaction's age and how many times it has previously been rolled back, to prevent the same transaction from being repeatedly chosen (starvation)"
    },
    {
      "id": 178,
      "subtopic": "DBMS Programming",
      "question": "What does \"multiple granularity\" locking refer to in concurrency control?",
      "options": {
        "A": "Using locks at different levels of a hierarchy, such as database, table, page, and row/tuple, rather than a single fixed granularity",
        "B": "Applying exactly one lock per transaction regardless of data size",
        "C": "Locking only individual bytes within a data item",
        "D": "Applying locks only to indices, never to base tables"
      },
      "answer": "A",
      "explanation": "Using locks at different levels of a hierarchy, such as database, table, page, and row/tuple, rather than a single fixed granularity"
    },
    {
      "id": 179,
      "subtopic": "DBMS Programming",
      "question": "In multiple granularity locking, what is the purpose of \"intention\" locks (such as intention-shared or intention-exclusive)?",
      "options": {
        "A": "To signal that a transaction intends to acquire a shared or exclusive lock at a finer granularity further down the hierarchy, without needing to check every descendant node individually",
        "B": "To immediately lock all descendant nodes at the finest granularity",
        "C": "To replace the need for shared and exclusive locks entirely",
        "D": "Intention locks apply only to the root of the hierarchy"
      },
      "answer": "A",
      "explanation": "To signal that a transaction intends to acquire a shared or exclusive lock at a finer granularity further down the hierarchy, without needing to check every descendant node individually"
    },
    {
      "id": 180,
      "subtopic": "DBMS Programming",
      "question": "Under multiple granularity locking, before a transaction can acquire a shared lock (S) on a specific row, what must it first acquire on the ancestor nodes (e.g., table, database)?",
      "options": {
        "A": "Exclusive locks on all ancestors",
        "B": "Intention-shared (IS) locks (or stronger) on the ancestors, following the multiple granularity protocol",
        "C": "No locks are needed on ancestor nodes",
        "D": "Only a lock on the topmost ancestor node is required, skipping intermediate levels"
      },
      "answer": "B",
      "explanation": "Intention-shared (IS) locks (or stronger) on the ancestors, following the multiple granularity protocol"
    },
    {
      "id": 181,
      "subtopic": "DBMS Programming",
      "question": "What is the primary goal of multiversion concurrency control (MVCC) schemes?",
      "options": {
        "A": "To allow read operations to access an older, consistent version of data without blocking concurrent write operations, improving concurrency",
        "B": "To eliminate the need for any locking whatsoever in every operation",
        "C": "To store only the single most recent version of every data item",
        "D": "To force all reads and writes to execute strictly sequentially"
      },
      "answer": "A",
      "explanation": "To allow read operations to access an older, consistent version of data without blocking concurrent write operations, improving concurrency"
    },
    {
      "id": 182,
      "subtopic": "DBMS Programming",
      "question": "In multiversion timestamp ordering, how does the system decide which version of a data item a read operation should access?",
      "options": {
        "A": "It selects the version with the largest write timestamp that is still less than or equal to the reading transaction's timestamp",
        "B": "It always reads the very first version ever created, regardless of timestamps",
        "C": "It always reads the most recently created version, even if created after the reader began",
        "D": "Read operations in MVCC do not use timestamps at all"
      },
      "answer": "A",
      "explanation": "It selects the version with the largest write timestamp that is still less than or equal to the reading transaction's timestamp"
    },
    {
      "id": 183,
      "subtopic": "DBMS Programming",
      "question": "What potential drawback does multiversion concurrency control introduce compared to single-version locking schemes?",
      "options": {
        "A": "MVCC requires additional storage overhead to maintain multiple versions of data items, and old versions must eventually be garbage collected",
        "B": "MVCC always uses less storage than single-version schemes",
        "C": "MVCC eliminates the possibility of write-write conflicts entirely with no additional checks",
        "D": "MVCC cannot be combined with any timestamp-based mechanism"
      },
      "answer": "A",
      "explanation": "MVCC requires additional storage overhead to maintain multiple versions of data items, and old versions must eventually be garbage collected"
    },
    {
      "id": 184,
      "subtopic": "DBMS Programming",
      "question": "Under snapshot isolation, a transaction reads data as of the start of the transaction (its snapshot). What anomaly can still occur under standard snapshot isolation that SERIALIZABLE prevents?",
      "options": {
        "A": "Dirty reads of uncommitted data",
        "B": "Write skew, where two transactions independently make decisions based on the same snapshot that would violate a constraint if executed serially",
        "C": "Non-repeatable reads within the same transaction",
        "D": "Snapshot isolation always guarantees full serializability with no exceptions"
      },
      "answer": "B",
      "explanation": "Write skew, where two transactions independently make decisions based on the same snapshot that would violate a constraint if executed serially"
    },
    {
      "id": 185,
      "subtopic": "DBMS Programming",
      "question": "Under snapshot isolation, what is the \"first committer wins\" rule used for?",
      "options": {
        "A": "To determine the sort order of returned query results",
        "B": "To resolve write-write conflicts: if two concurrent transactions both attempt to write the same data item, only the first to commit succeeds, and the other is aborted",
        "C": "To determine which transaction gets priority for read-only operations",
        "D": "To decide which transaction is logged first regardless of write conflicts"
      },
      "answer": "B",
      "explanation": "To resolve write-write conflicts: if two concurrent transactions both attempt to write the same data item, only the first to commit succeeds, and the other is aborted"
    },
    {
      "id": 186,
      "subtopic": "DBMS Programming",
      "question": "Why do \"phantom\" problems arise specifically with predicate-based reads (e.g., a range query like WHERE age > 30) rather than with reads of specific existing rows?",
      "options": {
        "A": "Because locking individual existing rows does not prevent a new row satisfying the predicate from being inserted by another transaction, since there was no existing row to lock",
        "B": "Because predicate reads never use locks of any kind",
        "C": "Because phantom problems only occur with UPDATE statements, never SELECT",
        "D": "Because predicates automatically bypass the isolation level in use"
      },
      "answer": "A",
      "explanation": "Because locking individual existing rows does not prevent a new row satisfying the predicate from being inserted by another transaction, since there was no existing row to lock"
    },
    {
      "id": 187,
      "subtopic": "DBMS Programming",
      "question": "What locking technique is commonly used to prevent phantom insertions in range queries under strict isolation levels?",
      "options": {
        "A": "Predicate locking or index-range (next-key) locking, which locks the range/gap rather than only existing rows",
        "B": "Locking only the specific rows that currently exist and match the predicate",
        "C": "No technique exists to prevent phantoms",
        "D": "Using AUTOCOMMIT mode exclusively"
      },
      "answer": "A",
      "explanation": "Predicate locking or index-range (next-key) locking, which locks the range/gap rather than only existing rows"
    },
    {
      "id": 188,
      "subtopic": "DBMS Programming",
      "question": "Why is index concurrency control often handled differently (e.g., using specialized latch-coupling or \"crabbing\" protocols) rather than treating the entire index as one lockable unit?",
      "options": {
        "A": "Treating an entire B+-tree index as a single lockable unit would severely limit concurrency, since every transaction touching the index would serialize, so finer-grained techniques allow simultaneous access to different parts of the tree",
        "B": "Indices never require any concurrency control since they are read-only structures",
        "C": "Index concurrency control is identical to standard two-phase locking with no special techniques",
        "D": "B+-tree indices cannot be accessed concurrently under any circumstances"
      },
      "answer": "A",
      "explanation": "Treating an entire B+-tree index as a single lockable unit would severely limit concurrency, since every transaction touching the index would serialize, so finer-grained techniques allow simultaneous access to different parts of the tree"
    },
    {
      "id": 189,
      "subtopic": "DBMS Programming",
      "question": "What is \"latch crabbing\" in the context of B+-tree concurrency control?",
      "options": {
        "A": "A technique of holding a latch on a parent node only until it's confirmed safe to release, then moving down to lock the child node, allowing higher concurrency than holding all ancestor latches for the whole operation",
        "B": "A method that requires locking the entire tree for every single operation without exception",
        "C": "A technique used only for deleting entire B+-trees",
        "D": "A synonym for deadlock detection unrelated to tree traversal"
      },
      "answer": "A",
      "explanation": "A technique of holding a latch on a parent node only until it's confirmed safe to release, then moving down to lock the child node, allowing higher concurrency than holding all ancestor latches for the whole operation"
    },
    {
      "id": 190,
      "subtopic": "DBMS Programming",
      "question": "Which type of failure refers to a hardware or software bug causing the system to halt, typically resulting in loss of volatile memory contents but leaving nonvolatile (disk) storage intact?",
      "options": {
        "A": "Transaction failure",
        "B": "System crash (system failure)",
        "C": "Disk failure",
        "D": "Network partition failure"
      },
      "answer": "B",
      "explanation": "System crash (system failure)"
    },
    {
      "id": 191,
      "subtopic": "DBMS Programming",
      "question": "Which failure classification refers to the loss or corruption of data on nonvolatile storage itself, such as a physical disk head crash?",
      "options": {
        "A": "Disk failure",
        "B": "Transaction failure",
        "C": "System crash",
        "D": "Logical error"
      },
      "answer": "A",
      "explanation": "Disk failure"
    },
    {
      "id": 192,
      "subtopic": "DBMS Programming",
      "question": "What distinguishes a \"logical error\" from a \"system error\" in transaction failure classification?",
      "options": {
        "A": "A logical error means the transaction cannot continue due to some internal condition (e.g., bad input data, violated constraint), while a system error means the system itself enters an undesirable state (e.g., deadlock) causing the transaction to be aborted",
        "B": "Both terms refer to identical conditions with no distinction",
        "C": "A logical error only occurs during recovery, never during normal execution",
        "D": "A system error always results in permanent data loss, unlike a logical error"
      },
      "answer": "A",
      "explanation": "A logical error means the transaction cannot continue due to some internal condition (e.g., bad input data, violated constraint), while a system error means the system itself enters an undesirable state (e.g., deadlock) causing the transaction to be aborted"
    },
    {
      "id": 193,
      "subtopic": "DBMS Programming",
      "question": "What is the primary purpose of the recovery system's log in relation to failures?",
      "options": {
        "A": "To record enough information about database updates so that the effects of committed transactions can be redone and uncommitted transactions can be undone after a failure",
        "B": "To permanently store the entire database contents redundantly with no other purpose",
        "C": "To track user login credentials only",
        "D": "To replace the need for a database backup entirely"
      },
      "answer": "A",
      "explanation": "To record enough information about database updates so that the effects of committed transactions can be redone and uncommitted transactions can be undone after a failure"
    },
    {
      "id": 194,
      "subtopic": "DBMS Programming",
      "question": "In the write-ahead logging (WAL) protocol, what rule must be followed before a data item's updated value is written to nonvolatile (disk) storage?",
      "options": {
        "A": "The corresponding log record describing the update must first be written to stable storage",
        "B": "The data item must be written to disk before any log record is created",
        "C": "No particular ordering is required between log and data writes",
        "D": "The transaction must have already committed before any log record can be written"
      },
      "answer": "A",
      "explanation": "The corresponding log record describing the update must first be written to stable storage"
    },
    {
      "id": 195,
      "subtopic": "DBMS Programming",
      "question": "Under the WAL protocol, why must the log record for an update be written to stable storage before the actual database modification is flushed to disk?",
      "options": {
        "A": "So that if a crash occurs after the data modification but before the transaction commits, the log contains enough information to undo the uncommitted change during recovery",
        "B": "Because log records are never used during recovery, only for auditing",
        "C": "Because writing logs first guarantees zero disk I/O for the actual data",
        "D": "Because the database refuses to execute any transaction without a pre-existing log file"
      },
      "answer": "A",
      "explanation": "So that if a crash occurs after the data modification but before the transaction commits, the log contains enough information to undo the uncommitted change during recovery"
    },
    {
      "id": 196,
      "subtopic": "DBMS Programming",
      "question": "What is the role of a \"checkpoint\" in the recovery process?",
      "options": {
        "A": "To periodically record a consistent point in the log where all prior updates are known to be safely reflected on disk, reducing the amount of log that must be processed during recovery",
        "B": "To permanently delete old transaction records from the database",
        "C": "To immediately abort all currently active transactions",
        "D": "To disable logging temporarily for performance testing"
      },
      "answer": "A",
      "explanation": "To periodically record a consistent point in the log where all prior updates are known to be safely reflected on disk, reducing the amount of log that must be processed during recovery"
    },
    {
      "id": 197,
      "subtopic": "DBMS Programming",
      "question": "Which buffer management policy requires that a data item modified by an uncommitted transaction must not be written to disk before the transaction commits?",
      "options": {
        "A": "The no-force policy",
        "B": "The no-steal policy",
        "C": "The force policy",
        "D": "The steal policy"
      },
      "answer": "B",
      "explanation": "The no-steal policy"
    },
    {
      "id": 198,
      "subtopic": "DBMS Programming",
      "question": "What does the \"force\" policy require regarding buffer management at the time a transaction commits?",
      "options": {
        "A": "All updated data items must be written to disk before the commit is considered complete, simplifying redo but potentially slowing down commit",
        "B": "Data items may remain in the buffer indefinitely even after commit, with no forced write",
        "C": "Only data items belonging to aborted transactions must be forced to disk",
        "D": "The force policy has no relationship to commit processing"
      },
      "answer": "A",
      "explanation": "All updated data items must be written to disk before the commit is considered complete, simplifying redo but potentially slowing down commit"
    },
    {
      "id": 199,
      "subtopic": "DBMS Programming",
      "question": "Under a \"steal\" buffer management policy, what does the recovery system need to be capable of, since uncommitted data may already be on disk?",
      "options": {
        "A": "Undo operations, to reverse the effects of uncommitted transactions whose modified data was written (stolen) to disk before commit",
        "B": "Only redo operations, since steal guarantees all writes are already committed",
        "C": "Neither undo nor redo operations, since steal eliminates the need for logging",
        "D": "Immediate rollback of the entire database to its initial state"
      },
      "answer": "A",
      "explanation": "Undo operations, to reverse the effects of uncommitted transactions whose modified data was written (stolen) to disk before commit"
    },
    {
      "id": 200,
      "subtopic": "DBMS Programming",
      "question": "Which recovery scenario is more complex to handle: a system crash affecting only volatile storage, or a failure affecting nonvolatile storage as well?",
      "options": {
        "A": "A failure affecting nonvolatile storage is generally more complex, since recovery may require restoring from backups (e.g., remote or archival backups) in addition to using the log",
        "B": "Nonvolatile storage failures are always simpler to recover from than volatile-only crashes",
        "C": "Both scenarios are handled identically with no additional complexity",
        "D": "Volatile storage failures cannot be recovered from at all"
      },
      "answer": "A",
      "explanation": "A failure affecting nonvolatile storage is generally more complex, since recovery may require restoring from backups (e.g., remote or archival backups) in addition to using the log"
    }
  ]
};
