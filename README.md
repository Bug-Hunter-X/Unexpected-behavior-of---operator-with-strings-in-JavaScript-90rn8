# Unexpected behavior of + operator with strings in JavaScriptThis example demonstrates how JavaScript's loose typing can lead to unexpected behavior when using the + operator with strings.  The + operator will perform string concatenation when one or both operands are strings, resulting in unexpected outputs if you intend for it to perform numerical addition.

## How to reproduce

1. Run the provided `bug.js` file.
2. Observe the unexpected outputs when using the + operator with a mixture of numbers and strings. 

## Solution

The `bugSolution.js` file offers a corrected version ensuring proper type checking before performing the addition to avoid unexpected string concatenation.