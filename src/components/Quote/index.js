import React from 'react'
import './Quote.css'

export default (props) => {
    const { id, content, source } = props.quote
    return (
        <blockquote className={'Quote'} key={id}>
            <p className={'Quote__content'}>{content}</p>
            <br/>
            <b><i>- {source}</i></b>
        </blockquote>
    )
}

