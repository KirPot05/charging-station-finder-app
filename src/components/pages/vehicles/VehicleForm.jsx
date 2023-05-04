import { useState } from "react";
import DynamicInput from "../../global/DynamicInput";
import FormEditButton from "../../global/FormEditButton";
import CustomButton from "../../global/CustomButton";

function VehicleForm() {
  const [editGeneralDetails, setEditGeneralDetails] = useState(false);
  const [editRegistrationDetails, setEditRegistrationDetails] = useState(false);

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

  const handleUpdateFields = (event) => {
    event.preventDefault();
  };

  return (
    <form>
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
            isEditable={editGeneralDetails}
          />

          <DynamicInput
            id="model"
            label="Model"
            isEditable={editGeneralDetails}
          />

          <DynamicInput id="vin" label="VIN" isEditable={editGeneralDetails} />

          <DynamicInput
            id="color"
            label="Color"
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
            id="registration-num"
            label="Registration Number"
            isEditable={editRegistrationDetails}
          />
          <DynamicInput
            id="expiry"
            label="Registration Expiry"
            isEditable={editRegistrationDetails}
          />
          <DynamicInput
            id="owner"
            label="Owner"
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
          isDisabled={!editGeneralDetails || !editRegistrationDetails}
          handleAction={handleUpdateFields}
        />
      </div>
    </form>
  );
}

export default VehicleForm;
