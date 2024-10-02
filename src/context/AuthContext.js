import { View, Text } from "react-native";
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create the AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //check if user already exist
  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await AsyncStorage.getItem("userData");
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (err) {
        console.log("Failed to load user from storage:", error);
      }
    };
    loadUser();
  }, []);

  //login function
  const login = async (userData) => {
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(userData));
      setUser(userData);
      console.log("inside context login:", user);
    } catch (err) {
      console.log("Failed to Login :", err);
    }
  };

  //logout function
  const logout = async () => {
    try {
      console.log("logout successfully");
      await AsyncStorage.removeItem("userData");

      setUser(null);
    } catch (err) {
      console.log("Failed to Logout :", err);
    }
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
