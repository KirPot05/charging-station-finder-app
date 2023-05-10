import { useState } from "react";
import VehicleForm from "../components/pages/vehicles/VehicleForm";
import { useVehicles } from "../hooks/vehicle";
import { useParams } from "react-router-dom";

function VehiclePage() {
  const { id } = useParams();

  const [vehicle, loading, error] = useVehicles(id);

  if (error) return <div>{JSON.stringify(error)}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <main className="m-6 bg-white py-6 px-20 shadow-md">
      {/* <VehicleForm /> */}
      <h1 className="font-semibold text-2xl my-8">
        {" "}
        {`${vehicle?.company} ${vehicle?.model}`}{" "}
      </h1>

      <section className="px-10">
        <hr className="border my-8" />

        <VehicleForm vehicle={vehicle} id={id} />
      </section>
    </main>
  );
}

export default VehiclePage;
