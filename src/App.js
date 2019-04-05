import React, { Component } from 'react';
import './App.css';
import QuotesList from './components/QuotesList';
import Header from './components/Header';
import QuoteForm from './components/QuoteForm';

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
  }

  addQuote = (source, content) => {
    this.setState({
      quotes: this.state.quotes.concat({ source, content }),
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>

          <QuoteForm addQuote={this.addQuote}/>
          <QuotesList quotes={this.state.quotes}/>

        </main>
      </div>
    );
  }
}

export default App;
