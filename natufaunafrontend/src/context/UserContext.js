import React, { createContext, useMemo, useState } from 'react'

export const UserContext = createContext(); 

function UserProvider({ children }) {
  
  const initialData = {
    id:1007379540,
    name: 'Juan'
  };
  const [user, setUser] = useState(initialData);
  const data = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={ data }>
      { children }
    </UserContext.Provider>
  )

}

export default UserProvider

