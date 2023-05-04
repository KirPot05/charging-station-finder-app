import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { dbInstance } from "../lib/firebase";

export async function addVehicle(data) {
  try {
    if (
      data !== null &&
      Object.values(data).find((val) => val.trim() === "") !== undefined
    ) {
      throw new Error("Please enter all the fields");
    }

    const vehicleCollectionRef = collection(dbInstance, "vehicles");
    const addedVehicle = await addDoc(vehicleCollectionRef, {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return addedVehicle.id;
  } catch (error) {
    throw error;
  }
}
