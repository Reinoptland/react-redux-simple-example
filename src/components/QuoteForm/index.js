import React, { Component } from 'react'
import './QuoteForm.css'

export default class QuoteForm extends Component {
    state = {
        content: '',
        source: ''
    }

    handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { source, content } = this.state
        this.props.addQuote(source, content)
        this.setState({ content: '', source: '' })
    }

    render(){
        return <form className={'QuoteForm'} onSubmit={this.handleSubmit}>
            <h2>Add a new quote:</h2>
            <label htmlFor="content">Content</label>
            <textarea 
                name="content" 
                value={this.state.content}
                onChange={this.handleChange} 
                className={'QuoteForm__textarea'}>
            </textarea>
            <label htmlFor="source">Source</label>
            <input 
                name="source"
                value={this.state.source}
                onChange={this.handleChange}
                className={'QuoteForm__input'}/>
            <input type="submit" className={'QuoteForm__submitButton'}/>
        </form>
    }
}