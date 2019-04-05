import React, { Component } from 'react'
import Quote from '../Quote'
import { getQuotes } from '../../actions/quotes'
import { connect } from 'react-redux';

class QuotesList extends Component {
    componentDidMount(){
       this.props.getQuotes()
    }

    render(){
        return (
            <ul>
                {this.props.quotes !== null && this.props.quotes.map(quote => {
                    return(
                        <Quote key={quote.id} quote={quote} />
                    )
                })}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        quotes: state.quotes
    }
}

export default connect(mapStateToProps, { getQuotes })(QuotesList)