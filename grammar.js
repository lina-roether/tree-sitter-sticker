/**
 * @file A simple stack-based toy programming language
 * @author Lina Roether, June Marcuse
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "sticker",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
