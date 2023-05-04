import {
  collection,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { dbInstance } from "../lib/firebase";

export async function updateUserProfile(profile) {
  try {
    if (profile?.email === undefined || profile?.email?.trim() === "") {
      throw new Error("Email is required for updating profile");
    }

    const profileCollectionRef = collection(dbInstance, "users");
    const profileQuery = query(
      profileCollectionRef,
      where("email", "==", profile?.email)
    );

    await updateDoc(profileQuery, { ...profile, updatedAt: serverTimestamp() });
  } catch (error) {
    throw error;
  }
}
