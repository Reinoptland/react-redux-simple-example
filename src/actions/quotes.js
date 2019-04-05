export const ADD_QUOTE = 'ADD_QUOTE'

export const addQuote = (source, content) => {
    return {
        type: ADD_QUOTE,
        payload: {
            source,
            content
        }
    }
}