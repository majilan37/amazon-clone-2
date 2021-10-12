import { createContext, useContext, useReducer } from 'react'

const contextProvider = createContext()

export default function StateProvider({children, initialState, reducer}) {
    return (
        <contextProvider.Provider value={useReducer(reducer, initialState)}>
            {children}
        </contextProvider.Provider>
    )
}

export const useStateValue = () => useContext(contextProvider)
