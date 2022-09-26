import React, { createContext, useMemo, useState } from "react";

export const AdoptionPetContext = createContext();

function AdoptionPetProvider({ children }) {
  const [pet, setPet] = useState(null);
  const dataPet = useMemo(() => ({ pet, setPet }), [pet]);

  return (
    <AdoptionPetContext.Provider value={dataPet}>
      {children}
    </AdoptionPetContext.Provider>
  );
}

export default AdoptionPetProvider;
