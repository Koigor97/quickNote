/**
 * @fileOverview *** Objects int TypeScript ***
 * Objects in TypeScript is where type aliases shines.
 */

/**
 * Because objects properties can be lengthy, and re-declaring
 * data types of the object's property values when duplicated
 * can be repetitively painful, type aliases mitigate this problem
 */
type Post = {
    title : string;
    content : string;
    date: Date;
}

let post : Post = {
    title: "A Blog Post",
    content: "This is a beautiful blog post on technology",
    date: new Date(),
}
