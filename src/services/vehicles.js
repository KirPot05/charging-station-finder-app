import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
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
    const userVehiclesQuery = query(
      vehicleCollectionRef,
      where("userId", "==", data?.userId)
    );

    const userVehicles = await getDocs(userVehiclesQuery);

    if (userVehicles.docs.length >= 3) {
      throw new Error("Maximum limit reached for user vehicles");
    }

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

export async function updateVehicle(vehicle) {
  try {
    const vehicleDocRef = doc(dbInstance, "vehicles", vehicle?.id);

    await updateDoc(vehicleDocRef, {
      ...vehicle,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    throw error;
  }
}

export async function assignPrimaryVehicle(userId, vehicleId) {
  try {
    const vehicleQuery = query(
      collection("vehicles"),
      where("userId", "==", userId)
    );

    const vehicles = await getDocs(vehicleQuery);

    if (vehicles.docs.length === 0) {
      throw new Error("No vehicles found");
    }

    for (const vehicle of vehicles.docs) {
      const vehicleRef = doc(dbInstance, "vehicles", vehicle.id);

      await updateDoc(vehicleRef, {
        primary: vehicle.id === vehicleId ? true : false,
      });
    }
  } catch (error) {
    throw error;
  }
}
