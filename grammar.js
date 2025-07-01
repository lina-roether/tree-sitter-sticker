/**
 * @file A simple stack-based toy programming language
 * @author Lina Roether, June Marcuse
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "sticker",

  extras: $ => [],

  rules: {
    source_file: $ => seq(repeat(seq(optional($._sep), $.function_def)), optional($._sep)),

    _sep: $ => new RustRegex("\\p{White_Space}+"),

    _char: $ => new RustRegex("\\\\.|[^\"]"),

    lit_int: $ => new RustRegex("-?[0-9]+"),

    lit_str: $ => seq("\"", repeat($._char), "\""),

    _lit: $ => choice($.lit_int, $.lit_str),

    ident: $ => new RustRegex("([[:alpha:]]|[+\\-*/$_=<>&%#~|.^])([[:alnum:]]|[+\\-*/$_=<>&%#~|.^])*"),

    block: $ => seq("{", optional($._sep), optional(seq($._item, repeat(seq($._sep, $._item)))), optional($._sep), "}"),

    _item: $ => choice($._lit, $.function_call, $.block),

    function_call: $ => $.ident,

    function_def: $ => seq("fn", $._sep, $.ident, optional($._sep), $.block),
  }
});
