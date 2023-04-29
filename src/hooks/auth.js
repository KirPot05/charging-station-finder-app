import {
  signInWithGoogle,
  logOut,
  login,
  signUp,
  emailUpdate,
  passswordUpdate,
} from "../services/auth";

export function useAuth() {
  return {
    signInWithGoogle,
    logOut,
    login,
    signUp,
    emailUpdate,
    passswordUpdate,
  };
}
