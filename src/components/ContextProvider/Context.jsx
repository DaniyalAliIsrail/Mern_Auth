import React, { createContext, useState } from 'react'
//create context 
export const LoginContext = createContext("");

const Context = ({children}) => {

    //global state hay isay ham ksy bhy component may use kar sakrtay hay:
    const [logindata,setLoginData] = useState("");
    console.log(logindata);

  return (
    <>
    <LoginContext.Provider value={{logindata,setLoginData}}>
        {children}
    </LoginContext.Provider>
    </>
  )
}

export default Context