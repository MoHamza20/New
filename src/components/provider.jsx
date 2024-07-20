import React, { createContext } from 'react'

export const myContext = createContext();
const Provider = ({children}) => {
    const [ShowCarts, setShowCarts] = useState(false);
    return (
    <div>
        <myContext.Provider value={{ShowCarts,setShowCarts}} >
        {children}
        </myContext.Provider>
    </div>
  )
}

export default Provider