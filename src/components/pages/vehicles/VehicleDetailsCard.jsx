import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../global/CustomButton";
import { assignPrimaryVehicle } from "../../../services/vehicles";

function VehicleDetailsCard({
  vehicleId,
  model,
  company,
  imgUrl,
  isPrimary,
  userId,
}) {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/vehicles/${vehicleId}`);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="p-4 hover:shadow-md rounded-md border-2 flex flex-col items-center relative"
        onClick={handleNavigation}
      >
        {isPrimary && (
          <div className="bg-green-500 w-full text-sm text-center text-white absolute top-0 rounded-t-md">
            primary
          </div>
        )}

        <img
          src={imgUrl}
          alt={model || ""}
          className={`h-40 bg-contain rounded-md`}
        />
        <div>
          <h4 className="font-semibold my-2">
            {company} {model}{" "}
          </h4>

          <p>Unique Id: {vehicleId}</p>
        </div>
      </div>

      {!isPrimary && (
        <CustomButton
          btnText="Assign Primary"
          handleAction={() => assignPrimaryVehicle(userId, vehicleId)}
        />
      )}
    </div>
  );
}

export default VehicleDetailsCard;
