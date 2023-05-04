import { doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { dbInstance } from "../lib/firebase";

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
