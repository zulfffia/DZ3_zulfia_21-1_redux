const container ={
    counter: 0
}
export function reducer(state = container, action){
    if (action.type === "PLUS_COUNT"){
        return{...state, counter: state.counter +1}
    }
    else if (action.type === "MINUS_COUNT"){
        return {...state, counter: state.counter -1}
    }
    return state
}





// const count = {
//     counter: 0
// }
// export function reducer(state = count, action){
//     if (action.type === 'PLUS_COUNTER'){
//         return {...state, counter: state.counter + 1}
//     }
//     else if (action.type === 'MINUS_COUNTER'){
//         return {...state, counter: state.counter - 1}
//     }
//
//     return state
// }