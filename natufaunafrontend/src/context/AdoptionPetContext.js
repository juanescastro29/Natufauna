import React, { createContext, useMemo, useState } from 'react'

export const AdoptionPetContext = createContext();

function AdoptionPetProvider({ children }) {

  const [pet, setPet] = useState([])
  const dataPet = useMemo(() => ({ pet, setPet }), [pet, setPet]);
    
  return (
    <AdoptionPetContext.Provider value={ dataPet }>
      {children}
    </AdoptionPetContext.Provider>
  )
}

export default AdoptionPetProvider
