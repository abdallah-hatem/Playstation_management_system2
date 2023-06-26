"use client";
import { createContext, useState, useEffect } from "react";
import {
  StoreToLocalStorage,
  GetFromLocalStorage,
  RemoveFromLocalStorage,
} from "../Services/localStorageService";

const UserContext = createContext();

function UserProvider({ children }) {
  function login(id) {
    StoreToLocalStorage("user", id, null);
  }

  function logout() {
    RemoveFromLocalStorage("user");
  }

  function getUserId() {
    return GetFromLocalStorage("user");
  }

  function isLoggedIn() {
    return GetFromLocalStorage("user");
  }

  const contextValue = {
    login,
    logout,
    getUserId,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserProvider };
