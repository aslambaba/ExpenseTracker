import React, {createContext, useReducer } from 'react';
import Redu from './Reducer';

const initialValue = [
]

export const CreateCon = createContext(initialValue);

export const ContextPro = ({ children })=>{
    let [state, dispatch] = useReducer(Redu,initialValue);

    function AddTrans(OBJJ){
        dispatch({
            type: 'ADD',
            payload: {
                text: OBJJ.text,
                ammount: OBJJ.ammount,
            }
        })
    }
    function DelTrans(DObj){
        
    }
    return(
        <CreateCon.Provider value={{
            history: state,
            AddTrans,
            DelTrans
        }}>
            {children}
        </CreateCon.Provider>
    );
}
