import React from 'react'
import Quote from '../Quote'
import { connect } from 'react-redux';

const QuotesList = (props) => {
    return (
        <ul>
            {props.quotes.map(quote => {
                return(
                    <Quote key={quote.id} quote={quote} />
                )
            })}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        quotes: state
    }
}

export default connect(mapStateToProps)(QuotesList)