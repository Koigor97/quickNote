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
let school : any = "BYU-Idaho"

school = ["Ensign College", "BYU-Hawaii"]

// the problem with declaring ANY type is that you forcing
// typescript to treat variables like javascript does -
// wherein variables can be assigned other data types after their
// initial assignment. It makes no sense

type BookChapterType = {
    chapterName: string[];
    chapterNumber: number;
}

export type BookType = {
    title: string;
    author: string;
    releaseDate: Date;
    chapters: BookChapterType
}

type PrefaceType = string

/**
 * The Book custom type is a UNION type of BookType
 * and PrefaceType. A union type is the combination
 * of two or more types
 *
 * @param {BookType | PrefaceType} book
 * @returns string
 */
export function bookDetail(book: BookType | PrefaceType): string {
    console.log("*********** BOOK DETAIL *************")

    if (typeof book === "string") {
        return `\nPreface:\n${book}`
    }
    return `Book Tile: ${book.title}\nAuthor: ${book.author}\nRelease date: ${book.releaseDate}\nNumber of Chapters: ${book.chapters.chapterNumber}\n`
}
