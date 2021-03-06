import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8081/api/book").then(res => {
      this.setState({ books: res.data });
      console.log(this.state.books);
    });
  }

  render() {
    console.log("books", this.state.books);
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">BOOK CATALOG</h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to="/create">
                <span
                  className="glyphicon glyphicon-plus-sign"
                  aria-hidden="true"
                />{" "}
                Add Book
              </Link>
            </h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books.map((book,index) => (
                  <tr key={index}>
                    <td>
                      <Link to={`/show/${book._id}`}>{book.isbn}</Link>
                    </td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
