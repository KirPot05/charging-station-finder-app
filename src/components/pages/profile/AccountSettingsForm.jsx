import React, { useState } from "react";
import TextInput from "../../global/TextInput";

function AccountSettingsForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="px-8 flex-1 my-6">
      <h3 className="font-semibold text-3xl">Account Settings </h3>

      <form className="grid grid-cols-2 mt-6" onSubmit={handleFormSubmit}>
        <TextInput
          title="First Name"
          value={firstName}
          setValue={setFirstName}
        />

        <TextInput title="Last Name" value={lastName} setValue={setLastName} />

        <TextInput title="Email" value={email} setValue={setEmail} />

        <TextInput
          title="Phone Number"
          value={phoneNumber}
          setValue={setPhoneNumber}
        />

        <TextInput
          title="Company"
          value={phoneNumber}
          setValue={setPhoneNumber}
        />

        <TextInput title="Designation" value={""} setValue={() => {}} />

        <div className="col-span-2 flex flex-col m-2">
          <label className="text-gray-600 font-semibold"> Bio </label>
          <textarea
            className="px-2 py-1 rounded border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            cols="30"
            rows="5"
          ></textarea>
        </div>

        <div className="m-2 space-x-4">
          <button className="px-3 py-2 font-semibold bg-primary transition duration-150 text-white rounded">
            Update
          </button>
          <button className="px-3 py-2 font-semibold hover:bg-gray-300 transition duration-150 rounded">
            {" "}
            Cancel{" "}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AccountSettingsForm;
