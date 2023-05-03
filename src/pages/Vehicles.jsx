import React, { useState } from "react";
import EmptyCaseContainer from "../components/global/EmptyCaseContainer";
import VehicleCard from "../components/pages/bookings/VehicleCard";
import VehicleDetailsCard from "../components/pages/vehicles/VehicleDetailsCard";

function Vehicles() {
  const [vehicles, setVehicles] = useState([
    {
      company: "Ather",
      model: "450X",
      imgUrl:
        "https://images.hindustantimes.com/auto/img/2021/06/15/600x338/WhatsApp_Image_2021-02-10_at_15.31.09_1615966496207_1618140882750_1623760189517.jpg",
      registrationNumber: "KA 22 MD 4175",
      VIN: "sd534323dsmdamd",
    },

    {
      company: "Hero",
      model: "Electric AE",
      imgUrl:
        "https://images.yourstory.com/cs/54/51bbc650fc4b11ec863f3b2095783040/vidav1Pro-1665206890988.jpg",
      registrationNumber: "KA 23 MW 2132",
      VIN: "45assasas942132325",
    },

    {
      company: "Ola",
      model: "EV Hill Climb",
      imgUrl:
        "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Ola-Electric-S1-010920211406.jpg",
      registrationNumber: "KA 23 EW 1902",
      VIN: "342sasrty5hhgrtrt6",
    },

    {
      company: "Bajaj",
      model: "Chetak",
      imgUrl: "https://www.chetak.com/rev-images/chetak-21/home/premium-1.png",
      registrationNumber: "KA 02 SD 1894",
      VIN: "56dass540593323455",
    },
    {
      company: "Bajaj",
      model: "Chetak",
      imgUrl: "https://www.chetak.com/rev-images/chetak-21/home/premium-1.png",
      registrationNumber: "KA 02 SD 1894",
      VIN: "56dass540593323455",
    },
    {
      company: "Bajaj",
      model: "Chetak",
      imgUrl: "https://www.chetak.com/rev-images/chetak-21/home/premium-1.png",
      registrationNumber: "KA 02 SD 1894",
      VIN: "56dass540593323455",
    },
  ]);

  return vehicles.length > 0 ? (
    <main className="m-6 bg-white py-6 px-20 shadow-md">
      <h1 className="font-semibold text-4xl my-4"> Your vehicles </h1>

      <section className="grid grid-cols-3 gap-6 mt-8">
        {vehicles.map(({ VIN, model, company, imgUrl }) => (
          <VehicleDetailsCard
            key={VIN}
            vehicleId={VIN}
            model={model}
            company={company}
            imgUrl={imgUrl}
          />
        ))}
      </section>
    </main>
  ) : (
    <EmptyCaseContainer
      title="New Vehicles"
      message="Get started by adding a new vehicle"
      btnText="Add Vehicle"
    />
  );
}

export default Vehicles;
