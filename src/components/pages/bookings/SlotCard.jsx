import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { fetchTimeSlots } from "../../../services/bookings";

function SlotCard({
  chargingSlotId,
  slotId,
  selectedSlotId,
  setSelectedSlotId,
  slots,
  isVehicleSelected,
  setTimeSlots,
}) {
  const [notAllowedSlot, setNotAllowedSlot] = useState(false);

  const handleSlotSelection = async () => {
    try {
      if (notAllowedSlot || !isVehicleSelected) return;

      const timeSlots = await fetchTimeSlots(chargingSlotId);

      setSelectedSlotId(slotId);
      setTimeSlots(timeSlots);
    } catch (error) {
      toast.error(error?.message);
    }
  };

  useEffect(() => {
    if (typeof slots === "object" && Object.keys(slots).length > 0) {
      setNotAllowedSlot(Object.values(slots)[slotId] < 15);
    }
  }, [slots]);

  return (
    <div
      className={`text-xs text-center font-semibold border-2 ${
        selectedSlotId === slotId
          ? "bg-indigo-500 text-indigo-500"
          : "text-gray-600"
      } rounded-md p-3 min-w-[10rem] ${
        notAllowedSlot || !isVehicleSelected
          ? "cursor-not-allowed bg-gray-400 text-gray-300"
          : "cursor-pointer"
      } `}
      onClick={handleSlotSelection}
    >
      {`Slot ${slotId + 1}`}
    </div>
  );
}

export default SlotCard;
