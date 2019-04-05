import React, { Component } from 'react'
import Quote from '../Quote'
import { getQuotes } from '../../actions/quotes'
import { connect } from 'react-redux';
import LoadingModal from '../LoadingModal';

class QuotesList extends Component {
    componentDidMount(){
       this.props.getQuotes()
    }

    render(){
        if(this.props.loading){
            return <LoadingModal />
        }
        
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
        quotes: state.quotes,
        loading: state.appStatus.loading
    }
}

export default connect(mapStateToProps, { getQuotes })(QuotesList)