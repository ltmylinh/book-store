import React from "react";

// stateless method that returns jsx that shows a unordered list of books for each line
// props contains the book array that was sent from App.js. App.js contains the books array imported from data/books.js
const bookList = ({books}) => {
  // variable that is created using the map function on the books array to return a new array.
  // this array contains jsx li elements containing all of the book properties
  const bookLines = books.map(({isbn, title, author}) => (
    <li key={isbn}>
      <strong>{title}</strong>, {author}
    </li>
  ));

  // using the single curly braces syntax, we are able to return the bookLines variable within an ul jsx element
  return <ul>{bookLines}</ul>;
};

export default bookList;
