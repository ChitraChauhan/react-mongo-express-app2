import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Create extends Component {
  constructor() {
    super();
    this.state = {
      isbn: "",
      title: "",
      author: "",
      description: "",
      published_year: "",
      publisher: ""
    };
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const {
      isbn,
      title,
      author,
      description,
      published_year,
      publisher
    } = this.state;

    axios
      .post("http://localhost:8081/api/book", {
        isbn,
        title,
        author,
        description,
        published_year,
        publisher
      })
      .then(result => {
        this.props.history.push("/");
      });
  };

  render() {
    const {
      isbn,
      title,
      author,
      description,
      published_year,
      publisher
    } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">ADD BOOK</h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to="/">
                <span
                  className="glyphicon glyphicon-th-list"
                  aria-hidden="true"
                />{" "}
                Book List
              </Link>
            </h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="isbn">ISBN:</label>
                <input
                  type="text"
                  className="form-control"
                  name="isbn"
                  value={isbn}
                  onChange={this.onChange}
                  placeholder="ISBN"
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={title}
                  onChange={this.onChange}
                  placeholder="Title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  className="form-control"
                  name="author"
                  value={author}
                  onChange={this.onChange}
                  placeholder="Author"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={description}
                  onChange={this.onChange}
                  placeholder="Description"
                  cols="80"
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label htmlFor="published_date">Published Date:</label>
                <input
                  type="number"
                  className="form-control"
                  name="published_year"
                  value={published_year}
                  onChange={this.onChange}
                  placeholder="Published Year"
                />
              </div>
              <div className="form-group">
                <label htmlFor="publisher">Publisher:</label>
                <input
                  type="text"
                  className="form-control"
                  name="publisher"
                  value={publisher}
                  onChange={this.onChange}
                  placeholder="Publisher"
                />
              </div>
              <button className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
