import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { auth, googleAuthProvider } from "../lib/firebase";
import { addDoc, collection, getDocs, query } from "firebase/firestore";

export async function signInWithGoogle() {
  try {
    const res = await signInWithPopup(auth, googleAuthProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }

    return user;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logOut() {
  return signOut(auth);
}

export function emailUpdate(email) {
  return updateEmail(currentUser, email);
}

export function passswordUpdate(password) {
  return updatePassword(currentUser, password);
}
