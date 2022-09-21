import React from "react";
import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const values = useMemo(
    () => ({
      user,
      setUser
    }),
    [user]
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export default UserProvider;

UserProvider.protoTypes = {
  children: PropTypes.object,
};
