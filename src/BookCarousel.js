import React, { Component } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import BookInfo from './BookInfo';
export default class BookCarousel extends Component {

  render() {
    return (
      <Card>
        <Carousel>
          {this.props.books.map((book) => (
            <Carousel.Item>

              <BookInfo
                key={book._id}
                book={book}
                deleteBook={this.props.deleteBook}
                updateBook={this.props.updateBook}
                books={this.props.books}
                postBook={this.props.postBook}
              />

            </Carousel.Item>
          ))}
        </Carousel>
      </Card>
    );
  }
}
