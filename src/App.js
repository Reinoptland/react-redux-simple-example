import React, { Component } from 'react';
import './App.css';
import Quote from './components/Quote';

class App extends Component {
  state = {
    quotes: [
      { id: 1, 
        content: "Talk is cheap. Show me the code. ", 
        source: "Linus Torvalds"
      },
      { id: 2, 
        content: "Programs must be written for people to read, and only incidentally for machines to execute. ", 
        source: "Harold Abelson"
      },
      { id: 3, 
        content: "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime. " , 
        source: "Muhammad Waseem"
      },
    ],
    content: '',
    source: ''
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value })
  }

  addQuote = (event) => {
    event.preventDefault()
    const { source, content, quotes } = this.state
    this.setState({
      quotes: quotes.concat({ source, content }),
      source: "",
      content: ""
    })
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1>Quotes</h1>
        </header>

        <main>

          <form onSubmit={this.addQuote}>
            <h2>Add a new quote:</h2>
            <label htmlFor="content">Content</label>
            <textarea 
              name="content" 
              value={this.state.content}
              onChange={this.handleChange} 
            >
            </textarea>
            <label htmlFor="source">Source</label>
            <input 
              name="source"
              value={this.state.source}
              onChange={this.handleChange}/>
            <input type="submit"/>
          </form>

          <section>
            {this.state.quotes.map(quote => {
              return(
                <Quote quote={quote} />
                )
            })}
          </section>

        </main>
      </div>
    );
  }
}

export default App;
