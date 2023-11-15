import * as Types from './TypesAction'

const init = {
    compteur: 0
}
const  ReducerCompteur = (state = init, action) =>  {

    let newState = {...state}

    switch(action.type){
        case Types.INCREMENT: newState.compteur += action.payload; break;
        case Types.DECREMENT: newState.compteur -= 1; break;
        case Types.INIT: newState.compteur = 0; break;
    }
    return newState
}

export default ReducerCompteur
