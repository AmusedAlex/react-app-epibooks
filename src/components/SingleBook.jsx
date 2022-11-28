import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    clickedBook: null,
  };

  render() {
    return (
      <Card
        className="mb-4"
        onClick={() => this.props.changeSelectedBook(this.props.book.asin)}
      >
        <Card.Img
          variant="top"
          src={this.props.book.img}
          onClick={() => {
            this.state.clickedBook
              ? this.setState({
                  clickedBook: false,
                })
              : this.setState({
                  clickedBook: true,
                });
          }}
        />
      </Card>
    );
  }
}
export default SingleBook;
