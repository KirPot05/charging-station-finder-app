import { useEffect, useReducer, useState } from "react";
import DynamicInput from "../../global/DynamicInput";
import CustomButton from "../../global/CustomButton";
import { toast } from "react-hot-toast";
import { PhotoIcon } from "@heroicons/react/24/outline";
import FormEditButton from "../../../components/global/FormEditButton";
import { updateVehicle } from "../../../services/vehicles";
import { handleImageUpload } from "../../../services";

const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_TEXT_INPUT":
      return {
        ...state,
        [action.field]: action.payload,
      };

    case "REFRESH_DATA":
      return action.payload;

    default:
      return state;
  }
};

function VehicleForm({ vehicle, id }) {
  const initialState = {
    company: vehicle?.company,
    model: vehicle?.model,
    VIN: vehicle?.VIN,
    color: vehicle?.color,
    registrationNumber: vehicle?.registrationNumber,
    registrationExpiry: vehicle?.registrationExpiry,
    owner: vehicle?.owner,
    imgUrl: vehicle?.imgUrl,
    id,
  };

  const [editGeneralDetails, setEditGeneralDetails] = useState(false);
  const [vehicleImg, setVehicleImg] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const [percentageUploadCompleted, setPercentageUploadCompleted] = useState(0);

  const [editPhoto, setEditPhoto] = useState(false);
  const [editRegistrationDetails, setEditRegistrationDetails] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "REFRESH_DATA",
      payload: { ...vehicle, id },
    });
  }, [vehicle]);

  const handleEditGeneralDetails = (event) => {
    event.preventDefault();
    setEditGeneralDetails(true);
  };

  const handleEditRegistrationDetails = (event) => {
    event.preventDefault();
    setEditRegistrationDetails(true);
  };

  const handleCancelEditFields = (event) => {
    event.preventDefault();
    setEditGeneralDetails(false);
    setEditRegistrationDetails(false);
  };

  const handleUpdateFields = async (event) => {
    event.preventDefault();
    try {
      console.log("submitting", state);
      await updateVehicle(state);

      toast.success("Successfully updated fields");
      setEditGeneralDetails(false);
      setEditRegistrationDetails(false);
    } catch (error) {
      toast.error(error?.message || "Error updating fields");
    }
  };

  const handleInput = (event) => {
    dispatch({
      type: "HANDLE_TEXT_INPUT",
      field: event.target.name,
      payload: event.target.value,
    });
  };

  const handleImagePreview = async (e) => {
    const localImageUrl = URL.createObjectURL(e.target.files[0]);
    setVehicleImg(localImageUrl);
    try {
      await handleImageUpload(
        e.target.files[0],
        setPercentageUploadCompleted,
        setImgUrl
      );

      dispatch({
        type: "HANDLE_TEXT_INPUT",
        field: "imgUrl",
        payload: imgUrl,
      });

      console.log(state);
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleUpdateFields}>
      <div className="col-span-full">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Cover photo
        </label>
        <div className="flex items-center flex-col">
          <img src={vehicle?.imgUrl} alt="Vehicle" className="h-72" />
          <div>
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Change Image</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  accept="image/*"
                  onChange={handleImagePreview}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-blue-700 ">
              Upload Progress
            </span>
            <span className="text-sm font-medium text-blue-700 ">
              {percentageUploadCompleted}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 ">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: percentageUploadCompleted + "%" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-900/10 pb-12">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            General Details
          </h2>

          <FormEditButton
            isDisabled={editGeneralDetails}
            handleAction={handleEditGeneralDetails}
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 relative">
          <DynamicInput
            id="company"
            label="Company"
            value={state?.company}
            setValue={handleInput}
            isEditable={editGeneralDetails}
          />

          <DynamicInput
            id="model"
            label="Model"
            value={state?.model}
            setValue={handleInput}
            isEditable={editGeneralDetails}
          />

          <DynamicInput
            id="vin"
            label="VIN"
            isEditable={editGeneralDetails}
            value={state?.VIN}
            setValue={handleInput}
          />

          <DynamicInput
            id="color"
            label="Color"
            value={state?.color}
            setValue={handleInput}
            isEditable={editGeneralDetails}
          />
        </div>
      </div>

      <div className="border-b border-gray-900/10 pb-12 mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Registration Details
          </h2>

          <FormEditButton
            isDisabled={editRegistrationDetails}
            handleAction={handleEditRegistrationDetails}
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <DynamicInput
            id="registrationNumber"
            label="Registration Number"
            value={state?.registrationNumber}
            setValue={handleInput}
            isEditable={editRegistrationDetails}
          />
          <DynamicInput
            id="registrationExpiry"
            label="Registration Expiry"
            value={state?.registrationExpiry}
            setValue={handleInput}
            isEditable={editRegistrationDetails}
          />
          <DynamicInput
            id="owner"
            label="Owner"
            value={state?.owner}
            setValue={handleInput}
            isEditable={editRegistrationDetails}
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6 pb-10">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={handleCancelEditFields}
        >
          Cancel
        </button>
        <CustomButton
          btnText="Update"
          isDisabled={
            !(editGeneralDetails || editRegistrationDetails || !editPhoto)
          }
        />
      </div>
    </form>
  );
}

export default VehicleForm;
