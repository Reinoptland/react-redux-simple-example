import request from 'superagent'
import { appIsLoading, appIsDoneLoading } from './appStatus'

export const ADD_QUOTE = 'ADD_QUOTE'
export const SET_QUOTES = 'SET_QUOTES'

export const addQuote = (source, content) => {
    return {
        type: ADD_QUOTE,
        payload: {
            source,
            content
        }
    }
}

export const setQuotes = (quotes) => {
    return {
        type: SET_QUOTES,
        payload: quotes
    }
}

export const getQuotes = () => {
    return (dispatch) => {
        dispatch(appIsLoading())
        request.get('http://localhost:4000/quotes')
            .then(response => {
                dispatch(setQuotes(response.body))
                dispatch(appIsDoneLoading())
            })
            .catch(error => {
                alert(error)
                alert('parhaps you did start the api with "npm run api"? (run that in a seperate terminal)')
                dispatch(appIsDoneLoading())
            })
    }
}