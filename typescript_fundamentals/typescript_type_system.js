"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookDetail = bookDetail;
/**
 * @fileOverview TypeScript's Type System.
 * To better utilize the various types typeScript has
 * to offer, it important to understand the internal mechanics
 * of typeScript type system works
 *
 * There's the ANY type, the UNKNOWN type, the UNION type,
 * the CUSTOM type
 *
 * This file also differentiate between type INFERENCE, ANNOTATION
 * and DECLARATION
 */
let school = "BYU-Idaho";
school = ["Ensign College", "BYU-Hawaii"];
/**
 * The Book custom type is a UNION type of BookType
 * and PrefaceType. A union type is the combination
 * of two or more types
 *
 * @param {BookType | PrefaceType} book
 * @returns string
 */
function bookDetail(book) {
    console.log("*********** BOOK DETAIL *************");
    if (typeof book === "string") {
        return `\nPreface:\n${book}`;
    }
    return `Book Tile: ${book.title}\nAuthor: ${book.author}\nRelease date: ${book.releaseDate}\nNumber of Chapters: ${book.chapters.chapterNumber}\n`;
}
