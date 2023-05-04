import { collection, doc, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  useCollectionDataOnce,
  useDocumentDataOnce,
} from "react-firebase-hooks/firestore";
import { dbInstance } from "../lib/firebase";

// export function useVehicles() {
//   const [vehicles, setVehicles] = useState([]);

//   const [value, loading, error] = useCollectionDataOnce(
//     query(collection(dbInstance, "vehicles"))
//   );

//   useEffect(() => {
//     if (value.length > 0) {
//       setVehicles((prevBookings) => [...prevBookings, value]);
//     }
//   }, []);

//   return [vehicles, loading, error];
// }

export function useVehicles(vehicleId) {
  const [vehicle, setVehicle] = useState(null);

  const [value, loading, error] = useDocumentDataOnce(
    doc(dbInstance, "vehicles", vehicleId)
  );

  useEffect(() => {
    if (value !== undefined || value !== null) {
      setVehicle(value);
    }
  }, [value]);

  return [vehicle, loading, error];
}
