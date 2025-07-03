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

    line_comment: $ => new RustRegex("//[^\n]*"),

    block_comment: $ => new RustRegex("(?s)/\\*.*\\*/"),

    _whitespace: $ => new RustRegex("\\p{White_Space}+"),

    _sep: $ => prec(-1, repeat1(choice($._whitespace, $.block_comment, $.line_comment))),

    _char: $ => new RustRegex("\\\\.|[^\"]"),

    lit_int: $ => new RustRegex("-?[0-9]+"),

    lit_str: $ => seq("\"", repeat($._char), "\""),

    _lit: $ => choice($.lit_int, $.lit_str),

    ident: $ => new RustRegex("([[:alpha:]]|[+\\-*/$_=<>&%#~|.^])([[:alnum:]]|[+\\-*/$_=<>&%#~|.^])*"),

    block: $ => seq("{", optional($._sep), optional(seq($._item, repeat(seq($._sep, $._item)))), optional($._sep), "}"),

    _item: $ => choice($._lit, $.function_call, $.block),

    function_call: $ => field("name", $.ident),

    function_def: $ => seq("fn", $._sep, field("name", $.ident), optional($._sep), field("body", $.block)),
  }
});
