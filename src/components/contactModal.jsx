import React, { useState } from "react";
import axios from "axios";

const ContactModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    fName: "",
    phone: "",
    pharmacy_name: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false); // Sending holati

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fName.trim()) newErrors.fName = "Required field";
    if (!formData.phone.trim()) newErrors.phone = "Required field";
    if (!formData.pharmacy_name.trim())
      newErrors.pharmacy_name = "Required field";
    return newErrors;
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSending(true); // Yuborish boshlanishida loading holatini yoqish

    const token = "8024120942:AAH1AIllWTi8XfuieMA32tEcxEjCtcXHfQg";
    const chat_id = -1002455007178;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const messageContent = `Имя: ${formData.fName} \nНомер телефона: ${formData.phone} \nНазвание аптеки: ${formData.pharmacy_name}`;

    try {
      await axios.post(url, {
        chat_id: chat_id,
        text: messageContent,
      });
      setFormData({ fName: "", phone: "", pharmacy_name: "" });
      setErrors({});
      closeModal();
    } catch (err) {
      console.log("Yuborishda xatolik,", err);
    } finally {
      setIsSending(false); // Yuborish tugagandan keyin loadingni o‘chirish
    }
  };

  return (
    <div
      className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal}
    >
      <div
        className="bg-white lg:w-[60%] md:w-[80%] w-full p-6 rounded shadow-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="text-gray-700 hover:text-red-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={sendMessage}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Имя
            </label>
            <input
              className={`w-full p-2 border border-solid rounded-md focus:outline-none focus:border-blue-500 ${
                errors.fName ? "border-red-500" : "border-gray-300"
              }`}
              type="text"
              id="name"
              name="fName"
              value={formData.fName}
              onChange={handleChange}
            />
            {errors.fName && (
              <span className="text-red-500 text-sm font-sans">
                {errors.fName}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone_number"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Номер телефона
            </label>
            <input
              className={`w-full p-2 border border-solid rounded-md focus:outline-none focus:border-blue-500 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              type="text"
              id="phone_number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm font-sans">
                {errors.phone}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="pharmacy_name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Название аптеки
            </label>
            <input
              className={`w-full p-2 border border-solid rounded-md focus:outline-none focus:border-blue-500 ${
                errors.pharmacy_name ? "border-red-500" : "border-gray-300"
              }`}
              type="text"
              id="pharmacy_name"
              name="pharmacy_name"
              value={formData.pharmacy_name}
              onChange={handleChange}
            />
            {errors.pharmacy_name && (
              <span className="text-red-500 text-sm font-sans">
                {errors.pharmacy_name}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            {isSending ? "Отправка..." : "Отправить сообщение"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
