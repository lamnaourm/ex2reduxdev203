import * as Types from './TypesAction'

export const increment = (pas=1) => {
    return {
        type: Types.INCREMENT,
        payload: pas
    }
}

export const decrement = () => {
    return {
        type: Types.DECREMENT
    }
}

export const init = () => {
    return {
        type: Types.INIT
    }
}