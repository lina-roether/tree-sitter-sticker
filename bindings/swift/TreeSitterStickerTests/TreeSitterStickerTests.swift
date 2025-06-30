import XCTest
import SwiftTreeSitter
import TreeSitterSticker

final class TreeSitterStickerTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_sticker())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Sticker grammar")
    }
}
