import React from 'react'
import Quote from '../Quote'

export default (props) => {
    return (
        <ul>
            {props.quotes.map(quote => {
                return(
                    <Quote quote={quote} />
                )
            })}
        </ul>
    )
}