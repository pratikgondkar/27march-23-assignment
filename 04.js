const books = [
    {
        title: "the Great Gatsby",
        author: "F. Scott fitzgerald",
        year: 1925,
    },
    {
        title: "To Kill a Mockinight",
        author: "harper Lee",
        year: 1960,
    },
    {
        title: "Who are You?.",
        author: "Shivam Bole",
        year: 1949,
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Asuten",
        year: 1813,
    },
];
function logTitles(titles) {
    titles.sort();
    console.log(titles.join(", "));
}
function extractTitles(books,callback) {
    const titles = books.map((books) => books.title);
    callback(titles);
}
extractTitles(books, logTitles);