import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { dbInstance } from "../lib/firebase";
import stations from "../mock/station";
import StationCard from "../components/pages/home/StationCard";
import { toast } from "react-hot-toast";
import { fetchUserLocation } from "../services/location";

function Home() {
  const [primaryVehicle, setPrimaryVehicle] = useState(null);
  const user = useSelector(selectUser);
  const [location, setLocation] = useState(null);

  const [value, loading, error] = useCollectionDataOnce(
    query(
      collection(dbInstance, "vehicles"),
      where("userId", "==", user?.userId),
      where("primary", "==", true)
    )
  );

  const handleUserLocation = async (coords, signal) => {
    try {
      const userLocation = await fetchUserLocation(coords, signal);

      setLocation(userLocation[0].locations[0]);
    } catch (error) {
      console.error(error);
      // toast.error(error?.message || "Unable to fetch user location");
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        if (location) {
          const { latitude, longitude } = location.coords;

          if (latitude && longitude)
            handleUserLocation({ latitude, longitude }, signal);
        }
      });
    }

    return () => {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    if (value?.length > 0) {
      setPrimaryVehicle(value[0]);
    }
  }, [value]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div> {JSON.stringify(error)} </div>;

  return (
    <main>
      <section className="bg-white m-6 p-8">
        <div className=" flex items-center justify-between">
          <h1 className="text-4xl font-semibold"> Welcome </h1>
          {/* Create new booking */}
          <Link to="/bookings/new">
            <button className="px-4 py-2 bg-primary text-white rounded shadow-md flex items-center gap-x-2">
              {" "}
              <PlusIcon className="h-5 w-5 font-bold" />
              New Booking{" "}
            </button>
          </Link>
        </div>

        <div className="mt-6">
          {location && (
            <p className="my-2">
              {" "}
              <span> Your location: </span>{" "}
              <span>
                {" "}
                {location?.street} - {location?.adminArea6},{" "}
                {location?.adminArea5}{" "}
              </span>
            </p>
          )}

          {primaryVehicle?.imgUrl ? (
            <img
              src={primaryVehicle?.imgUrl}
              className="h-72 bg-contain rounded"
              alt=""
            />
          ) : (
            <div className="h-40 flex items-center justify-center border-2 rounded">
              No primary vehicle present
            </div>
          )}
        </div>
      </section>

      <section className="bg-white m-6 p-6">
        <h4 className="font-semibold text-xl my-4">
          {" "}
          Nearby charging stations{" "}
        </h4>

        <div className="flex items-center gap-4">
          {stations.map(
            ({
              location,
              name,
              slotsAvailable,
              googleMapLink,
              imgUrl,
              active,
            }) => (
              <StationCard
                location={location}
                name={name}
                slotsAvailable={slotsAvailable}
                key={location + Math.random()}
                imgUrl={imgUrl}
                googleMapLink={googleMapLink}
                active={active}
              />
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;
