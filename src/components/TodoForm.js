import React, { Component } from 'react'

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(e){
    const { name, value } = e.target;
    this.setState({
      [name] : value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onAddTodo(this.state)
  }

  render(){
    return(
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="title"
              placeholder="Title"
              onChange={this.handleInput}
            >
            </input>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="responsible"
              placeholder="Responsible"
              onChange={this.handleInput}
            >
            </input>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="description"
              placeholder="Description"
              onChange={this.handleInput}
            >
            </input>
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                onChange={this.handleInput}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }
}

export default TodoForm;