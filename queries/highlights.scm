(lit_int) @number
(lit_str) @string

["fn"] @keyword

["{" "}"] @punctuation.bracket

(function_call name: (ident) @function)
(function_def name: (ident) @function)

(block_comment) @comment
(line_comment) @comment
