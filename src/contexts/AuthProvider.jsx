import React, { createContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import app from '../firebase/firebase.config';

// Create an authentication context
export const AuthContext = createContext();

// Initialize Firebase authentication instance
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();

// Authentication Provider Component
const AuthProvider = ({ children }) => {
  // State to store the current user and loading state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uid, setUid] = useState(null); // Add this line


  // Function to create a new user account
  const createUser = async (email, password) => {
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setLoading(false);
      return userCredential;
    } catch (error) {
      console.error('Error creating user:', error);
      setLoading(false);
      throw error;
    }
  };

  // Function to log in with Google
  const loginwithgoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleprovider)
      .finally(() => setLoading(false));
  };

  // Function to log in with email and password
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .finally(() => setLoading(false));
  };

  // Function to log out
  const logout = () => {
    return signOut(auth);
  };

  // useEffect to observe authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setUid(currentUser.uid); // Set the user's UID
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Combine authentication-related functions and state into authInfo object
  const authInfo = {
    user,
    createUser,
    uid, // Include uid in authInfo
    loginwithgoogle,
    setLoading,
    login,
    logout,
  };

  // Provide the authInfo to the context for consumption by child components
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
