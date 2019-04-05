export default (state = initialState, action = {}) => {
    switch (action.type) {
    case 'ADD_QUOTE': 
        return [...state, action.payload]
    default:
        return state
    }
}

const initialState =[
    { id: 1, 
    content: "Talk is cheap. Show me the code. ", 
    source: "Linus Torvalds"
    },
    { id: 2, 
    content: "Programs must be written for people to read, and only incidentally for machines to execute. ", 
    source: "Harold Abelson"
    },
    { id: 3, 
    content: "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime. " , 
    source: "Muhammad Waseem"
    },
]
  
