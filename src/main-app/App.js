import React, { Component } from "react";
import "./App.css";
import JSAlpharetta from "../assets/JSAlpharetta.jpg";

import initialBooks from "../data/books";
import TextBox from "../components/text-box/text-box";
import BookList from "../components/book-list/book-list";

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			// current state for list of books, new book title, new book isbn, and new book author
			newBookTitle: "",
			newBookIsbn: "",
			newBookAuthor: "",
			books: initialBooks
		};

		this.handleChangeNewBookTitleTextBox = this.handleChangeNewBookTitleTextBox.bind(this);
		this.handleChangeNewBookIsbnTextBox = this.handleChangeNewBookIsbnTextBox.bind(this);
		this.handleChangeNewBookAuthorTextBox = this.handleChangeNewBookAuthorTextBox.bind(this);
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
	}

  // method to handle the change of text within textbox for new book title
  handleChangeNewBookTitleTextBox(title){
    this.setState((preStates) => ({
			...preStates,
      newBookTitle: title
    }));
  };

  // method to handle the change of text within textbox for new book isbn
  handleChangeNewBookIsbnTextBox(newBookIsbn){
    this.setState((preStates) => ({
			...preStates,
      newBookIsbn
    }));
  };

  // method to handle the change of text within textbox for new book author
  handleChangeNewBookAuthorTextBox(newBookAuthor){
    this.setState((preStates) => ({
			...preStates,
      newBookAuthor
    }));
  };

  // handle clicking the add book button
  handleOnSubmit(){
    const book = {
      isbn: this.state.newBookIsbn,
      title: this.state.newBookTitle,
      author: this.state.newBookAuthor
    };

    const books = [...this.state.books, book];

    // clear out current values for author, isbn, and title and set books array to data/books.js with the new values added
    this.setState({
      books,
      newBookAuthor: "",
      newBookIsbn: "",
      newBookTitle: ""
    });
  };

  render() {
		const {newBookIsbn, newBookTitle, newBookAuthor, books} = this.state;
    return (
      <div>
        <header className="App-header">
          <img src={JSAlpharetta} height="100" width="150" alt="jsAlpharetta" />
          <h1 className="App-title">AlpharettaJS Bookstore</h1>
        </header>
        <h2>Add New Book</h2>
        <div className="new-book-form">
          <label>ISBN: </label>
          <TextBox
						placeholder="ISBN"
            value={newBookIsbn}
            change={this.handleChangeNewBookIsbnTextBox}
          />
          <label>Title: </label>
          <TextBox
						placeholder="Title"
            value={newBookTitle}
            change={this.handleChangeNewBookTitleTextBox}
          />
          <label>Author: </label>
          <TextBox
						placeholder="Author"
            value={newBookAuthor}
            change={this.handleChangeNewBookAuthorTextBox}
          />
          <button onClick={this.handleOnSubmit} className="form-button">Add Book</button>
        </div>
        <h2>Book List</h2>
        <BookList books={books} />
      </div>
    );
  }
}

export default App;
