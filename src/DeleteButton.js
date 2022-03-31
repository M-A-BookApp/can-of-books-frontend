import React, { Component } from "react";
import { Button } from "react-bootstrap";
import BookCarousel from "./BookCarousel";


class DeleteButton extends Component{
render() {
  return (
    <div>
      <h3>{this.props.book.title}</h3>
      <p>{this.props.book.description}</p>
      {console.log('book to Delete:', this.props.book_id)}
      <Button onClick={() => this.props.deleteBook(this.props.book._id)} varient="secondary">Delete</Button>


    </div>
  )

  }
}