import React, { createContext, useMemo, useState } from 'react'

export const UserContext = createContext(); 

function UserProvider({ children }) {

  const [user, setUser] = useState({
    id:1007379540,
    name: 'Juan'
  });
  const data = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={ data }>
      { children }
    </UserContext.Provider>
  )

}

export default UserProvider

