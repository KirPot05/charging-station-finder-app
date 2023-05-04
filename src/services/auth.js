import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { auth, dbInstance, googleAuthProvider } from "../lib/firebase";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
} from "firebase/firestore";

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

export async function signUp(email, password, displayName) {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    addDoc(collection(dbInstance, "users"), {
      uid: user.uid,
      name: displayName,
      authProvider: "email",
      email: user.email,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return user;
  } catch (err) {
    throw err;
  }
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
