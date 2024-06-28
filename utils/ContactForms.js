import React, { useState } from "react";
import axios from "axios";

const ContactForm = ({ subject }) => {
  const [yourState, setYourState] = useState(null);
  const [yourCity, setYourCity] = useState(null);
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [fileErrors, setFileErrors] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const [selectCountry, setSelectCountry] = useState("IN");
  const [selectState, setSelectState] = useState("KA");
  const [hideSubmitButton, setHideSubmitButton] = useState(true);
  const [selectedVessel, setSelectedVessel] = useState("");
  const [positions, setPositions] = useState([]);
  const [newPosition, setNewPosition] = useState("");

  const jobType = [
    { id: "1", name: "Part Time" },
    { id: "2", name: "Full Time" },
  ];
  const applying = [
    { id: "1", position: "Project A" },
    { id: "2", position: "Project B" },
    { id: "3", position: "Project C" },
  ];

  const [formData, setFormData] = useState({
    firstname: "",
    contactNo: "",
    email: "",
    resume: "",
  });

  const handleVesselChange = (e) => {
    const vesselId = e.target.value;
    const selectedOption = e.target.options[e.target.selectedIndex];
    setSelectedVessel(selectedOption.text);
  };

  const handlePositionChange = (e) => {
    setNewPosition(e.target.value);
  };

  const isBlank = (str) => {
    return !str.trim();
  };

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const notAllowedDomains = [
    "test.com",
    "sample.com",
    "example.com",
    "testing.com",
  ];

  const customErrors = {
    email: "Please enter a valid email address.",
    emailDomain: "This email domain is not allowed.",
    contactNo: "Please enter only numbers.",
  };

  function isValidEmail(email) {
    const [, domain] = email.split("@");
    return notAllowedDomains.includes(domain);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    if (name === "contactNo" && !/^\d+$/.test(value)) {
      newErrors.contactNo = customErrors.contactNo;
    } else if (name === "email") {
      if (!emailRegex.test(value)) {
        newErrors.email = customErrors.email;
      } else if (isValidEmail(value)) {
        newErrors.email = customErrors.emailDomain;
      } else {
        delete newErrors.email;
      }
    } else {
      delete newErrors[name];
    }

    setErrors(newErrors);
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const allowedExtensions = ["pdf", "doc", "docx", "rtf", "txt"];
      const fileExtension = selectedFile.name.split(".").pop().toLowerCase();

      if (allowedExtensions.includes(fileExtension)) {
        console.log(selectedFile);
        setFile(selectedFile);
        setHideSubmitButton(false);
        setFileErrors(false);
        setErrors("");
      } else {
        setFileErrors(true);
        setHideSubmitButton(true);
        setErrors({
          resume:
            "Invalid file type. Allowed types are PDF, DOC, DOCX, RTF, and TXT.",
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsSubmitting(true);
    console.log("iam clicked");
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      formDataToSend.append("jobtype", selectedVessel);
      formDataToSend.append("applyingfor", newPosition);
      if (file) {
        formDataToSend.append("resume", file);
      }

      const response = await axios.post(
        `https://beta.upfront.global/wp-json/contact-form-7/v1/contact-forms/102/feedback`,
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response);
      if (response.data.status === "mail_sent") {
        setFormVisible(false);
        setSuccessMessage(true);
      } else if (response.data.status === "validation_failed") {
        const fieldErrors = {};
        response.data.invalid_fields.forEach((field) => {
          fieldErrors[field.field] = field.message;
        });
        setErrors(fieldErrors);
      } else {
        setError("An error occurred. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 py-1 px-5">
      {formVisible ? (
        <div className="bg-[#4A4A4A] py-5 px-5 mt-5 container mx-auto max-w-3xl">
          <p className="text-white mt-5">
            If you would like to explore an opportunity to work with Upfront,
            please fill up this form and submit.
          </p>
          <form
            className="mt-5 grid grid-cols-3 md:grid-cols-2 gap-4"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <input
                name="firstname"
                className={`form-input border border-gray-500 w-72 px-3 py-2 ${
                  errors.firstname ? "is-invalid" : ""
                }`}
                placeholder="Enter Name"
                value={formData.firstname}
                onChange={handleChange}
                maxLength={6}
              />
              {errors.firstname && (
                <div className="invalid-feedback text-red-500">
                  {errors.firstname}
                </div>
              )}
            </div>
            <div className="mb-3">
              <input
                name="contactNo"
                maxLength="10"
                className={`form-input border border-gray-500 w-72 px-3 py-2 ${
                  errors.contactNo ? "is-invalid" : ""
                }`}
                placeholder="Contact No."
                value={formData.contactNo}
                onChange={handleChange}
              />
              {errors.contactNo && (
                <div className="invalid-feedback text-red-500">
                  {errors.contactNo}
                </div>
              )}
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className={`form-input border border-gray-500 w-72 px-3 py-2 ${
                  errors.email ? "is-invalid" : ""
                }`}
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="invalid-feedback text-red-500">
                  {errors.email}
                </div>
              )}
            </div>
            <div className="mb-3">
              <select
                className={`form-select border border-gray-500 text-gray-500 w-72 px-3 py-2 ${
                  errors.jobType ? "is-invalid" : ""
                }`}
                id="jobType"
                name="jobType"
                onChange={handleVesselChange}
              >
                <option value="">Job Type</option>
                {jobType.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
              {errors.jobType && (
                <div className="invalid-feedback text-red-500">
                  {errors.jobType}
                </div>
              )}
            </div>
            <div className="mb-3">
              <select
                id="position"
                name="position"
                className={`form-select border border-gray-500 text-gray-500 w-72 px-3 py-2 ${
                  errors.position ? "is-invalid" : ""
                }`}
                disabled={!selectedVessel}
                onChange={handlePositionChange}
              >
                <option value="">Select Position</option>
                {applying.map((items) => (
                  <option key={items.id} value={items.position}>
                    {items.position}
                  </option>
                ))}
              </select>
              {errors.position && (
                <div className="invalid-feedback text-red-500">
                  {errors.position}
                </div>
              )}
            </div>
            <div className="mb-3 col-span-2 md:col-span-2">
              <input
                type="file"
                name="resume"
                id="resume"
                className={`form-input text-gray-500 bg-white w-72 border ${
                  fileErrors || errors.resume ? "is-invalid" : ""
                }`}
                onChange={handleFileChange}
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
              />
              <p
                className="text-white text-xs mt-1 w-64"
                style={{ lineHeight: "16px", fontSize: "12px" }}
              >
                Complete your job application by uploading your resume or CV.
                Upload either DOC, DOCX, PDF, RTF or TXT file types, 4 MB max.
              </p>
              {errors.resume && (
                <div className="invalid-feedback text-red-500">
                  {errors.resume}
                </div>
              )}
              {fileErrors && (
                <div className="text-red-500">
                  Please upload the resume (DOC, DOCX, PDF, RTF, TXT).
                </div>
              )}
            </div>
            <div className="col-span-3 md:col-span-2">
              <button
                type="submit"
                className="focus:outline-none w-full md:w-auto rounded-sm text-white bg-red-500 hover:bg-red-600 font-normal text-md px-4 py-2 mb-2"
                disabled={hideSubmitButton || isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="mt-5 text-center mb-5">
          <h3 className="text-white text-lg">Thank you for your interest.</h3>
          <h3 className="text-white text-lg">
            We will get in touch with you as soon as possible.
          </h3>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
