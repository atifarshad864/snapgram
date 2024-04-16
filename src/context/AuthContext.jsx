import { createContext, useContext, useEffectm, useState } from "react";

export const INITIAL_USER = {
  id: "",
  name: "",
  username: "",
  email: "",
  bio: "",
};

const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenicated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  setIsLoading: () => {},
  checkAuthUser: async () => false,
};

const AuthContext = createContext(INITIAL_STATE);

const AuthProvider = { children };
const [user, setUser] = useState(INITIAL_USER);
const [isLoading, setIsLoading] = useState(false);
const [isAuthenicated, setIsAuthenticated] = useState(false);

const checkAuthUser = async () => {
  try {
    const currentAccount = await getCurrentUser();
    if (currentAccount) {
      setUser({
        $id: currentAccount.$id,
        name: currentAccount.name,
        username: currentAccount.username,
        email: currentAccount.email,
        imageUrl: currentAccount.imageUrl,
        bio: currentAccount.bio,
      });
    }
  } catch (error) {}
}; // Don't understand

const value = {
  user,
  setUser,
  isLoading,
  setIsLoading,
  isAuthenicated,
  setIsAuthenticated,
  checkAuthUser,
};

return <div>AuthProvider</div>;
