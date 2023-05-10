import {
  addDoc,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { dbInstance } from "../lib/firebase";

export async function bookSlot(data) {
  try {
    const bookingCollectionRef = collection(dbInstance, "bookings");
    const userBookingsQuery = query(
      bookingCollectionRef,
      where("vehicleId", "==", data?.vehicleId),
      where("status", "==", "pending-action")
    );

    const userBookings = await getDocs(userBookingsQuery);

    if (userBookings.docs.length > 0) {
      throw new Error("Bookings yet to be completed for this vehicle");
    }

    const updateTimeSlotStatusQuery = query(
      collection(dbInstance, "slots"),
      where("chargingSlotId", "==", data?.slot),
      where("timePeriod", "==", data?.timeSlot)
    );

    const updateTimeSlot = await getDocs(updateTimeSlotStatusQuery);
    if (updateTimeSlot.docs.length === 0)
      throw new Error("Failed to update timeslot status");

    const timeSlotDoc = doc(dbInstance, "slots", updateTimeSlot.docs[0].id);

    await updateDoc(timeSlotDoc, {
      isAvailable: false,
    });

    const bookedSlot = await addDoc(bookingCollectionRef, {
      ...data,
      status: "pending-action",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return bookedSlot.id;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function fetchTimeSlots(chargingSlotId) {
  try {
    const slotsQuery = query(
      collection(dbInstance, "slots"),
      where("chargingSlotId", "==", chargingSlotId),
      orderBy("createdAt")
    );
    const snapshots = await getDocs(slotsQuery);

    if (snapshots.docs.length === 0) throw new Error("No slots found");

    const slots = [];
    snapshots.forEach((snapshot) => {
      if (snapshot.exists()) {
        slots.push({ timeSlotId: snapshot.id, ...snapshot.data() });
      }
    });

    return slots;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
