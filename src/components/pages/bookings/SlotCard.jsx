function SlotCard({ timing, slotId, selectedSlotId, setSelectedSlotId }) {
  const handleSlotSelection = () => {
    setSelectedSlotId(slotId);
  };
  return (
    <div
      className={`text-xs text-center font-semibold border-2 ${
        selectedSlotId === slotId
          ? "border-indigo-500 text-indigo-500"
          : "text-gray-600"
      } rounded-md p-3 min-w-[10rem] cursor-pointer`}
      onClick={handleSlotSelection}
    >
      {" "}
      {timing}{" "}
    </div>
  );
}

export default SlotCard;
