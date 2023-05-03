import { useState } from "react";
import VehicleCard from "./VehicleCard";
import SlotCard from "./SlotCard";
import CustomButton from "../../global/CustomButton";

function BookSlotForm({ stations }) {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedSlotId, setSelectedSlotId] = useState([]);

  return (
    <form>
      <div className="border-b border-gray-900/10 pb-12">
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Book slots for charging your EV from the station nearest.
        </p>

        <div className="mt-8 flex items-center overflow-x-auto max-w-5xl scrolling-wrapper gap-x-3">
          {Array.from({ length: 6 }).map((_, idx) => (
            <VehicleCard
              id={idx + 1}
              key={Math.random() * idx}
              setSelectedVehicle={setSelectedVehicle}
              selectedVehicle={selectedVehicle}
            />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* Select vehicles */}

          <div className="sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Charging Stations
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block px-2 outline-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 cursor-pointer"
              >
                <option>Station 1</option>
                <option>Station 2</option>
              </select>
            </div>
          </div>

          <div className="col-span-full px-2 mt-3 space-y-2">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Please select a slot
            </label>

            <div className="grid grid-cols-4 gap-4 p-2 border-2 border-gray-400  rounded-md">
              {Array.from({ length: 8 }).map((_, idx) => (
                <SlotCard
                  timing="10:30AM - 11:30 AM"
                  slotId={idx + 1}
                  selectedSlotId={selectedSlotId}
                  setSelectedSlotId={setSelectedSlotId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <CustomButton btnText="Book" />
      </div>
    </form>
  );
}

export default BookSlotForm;
