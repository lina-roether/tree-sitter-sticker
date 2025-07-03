(lit_int) @number
(lit_str) @string

["fn"] @keyword
(keyword_function) @keyword

(function_call name: (ident) @function)
(function_def name: (ident) @function)

(operator_function) @operator


["{" "}"] @punctuation.bracket

(block_comment) @comment
(line_comment) @comment
