import React, { Component } from 'react';
import './App.css';
import QuotesList from './components/QuotesList';
import Header from './components/Header';
import QuoteForm from './components/QuoteForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>

          <QuoteForm addQuote={this.addQuote}/>
          <QuotesList />

        </main>
      </div>
    );
  }
}

export default App;
