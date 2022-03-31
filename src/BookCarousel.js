import React, { Component } from "react";
import { Carousel,Card,Button } from "react-bootstrap";
import BookInfo from "./BookInfo";
import './BookCarousel.css'

export default class BookCarousel extends Component {
  
  render() {
    return (
      <Card>
        <Carousel>
          {/* {this.state.books.map((book) => <Carousel.Item><Carousel.Caption>{book.title}</Carousel.Caption></Carousel.Item>) } */}
          
          {this.props.books.map((book) => (
            <Carousel.Item>
              <h1>{book._id}</h1>
              <BookInfo key={book._id} book={book} deleteBook={this.props.deleteBook} updateBook={()=> this.props.updateBook(book._id)}  books={this.props.books}  showModal={this.props.showModal} onClick={this.handleClick} closeModal={this.closeModal} postBook={this.postBook}/>
              <Button onClick={() => this.props.deleteBook(book._id)} variant='danger'>
          Delete
        </Button>
        
        <Button onClick={() => this.props.updateBook(book._id)} variant='primary'>
          Update
        </Button>
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Card>
    );
  }
}