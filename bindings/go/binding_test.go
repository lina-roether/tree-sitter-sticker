package tree_sitter_sticker_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_sticker "github.com/boxbeam/sticker/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_sticker.Language())
	if language == nil {
		t.Errorf("Error loading Sticker grammar")
	}
}
