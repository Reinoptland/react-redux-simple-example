import React from 'react'
import './Quote.css'

export default (props) => {
    const { content, source } = props.quote
    return (
        <blockquote className={'Quote'} >
            <p className={'Quote__content'}>{content}</p>
            <br/>
            <b><i>- {source}</i></b>
        </blockquote>
    )
}

