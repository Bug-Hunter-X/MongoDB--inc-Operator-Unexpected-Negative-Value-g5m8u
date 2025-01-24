# MongoDB $inc Operator Unexpected Negative Value

This repository demonstrates a common error when using the `$inc` operator in MongoDB and how to solve it.

The problem occurs when trying to decrement a counter using `$inc` with a negative value.  If the counter doesn't exist, it leads to an unexpected behavior instead of creating it with the intended value.

**bug.js** shows the erroneous code, and **bugSolution.js** shows the corrected implementation.
