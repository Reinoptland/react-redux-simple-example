import { ADD_QUOTE, SET_QUOTES } from '../actions/quotes'

export default (state = null, action = {}) => {
    switch (action.type) {
    case ADD_QUOTE: 
        return [...state, action.payload]
    case SET_QUOTES:
        return action.payload.map(quote => {
            return { ...quote }
        })
    default:
        return state
    }
}

  
