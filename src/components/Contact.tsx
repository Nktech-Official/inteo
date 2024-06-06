"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import { handleContact, formData } from "@/app/actions/handleContact";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
  },
};
Modal.setAppElement("#main");

export default function ContactUs({
  modalIsOpen,
  closeModal,
}: {
  modalIsOpen: boolean;
  closeModal: any;
}) {
  const [FormData, setFormData] = useState<formData>({
    message: "",
    phone: "",
    subject: "",
  });
  const [message, setMessage] = useState<string>();
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <section className="bg-white  container">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <button
              onClick={closeModal}
              type="button"
              className="close-btn flex items-center justify-center h-6 w-6 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
              Contact Us
            </h2>
            <p>{message}</p>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const result = await handleContact(FormData);
                setMessage(result.message);
              }}
              className="space-y-8"
            >
              <div>
                <label
                  htmlFor="phone number"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your phone number
                </label>
                <input
                  value={FormData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  type="tel"
                  id="phone number"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  placeholder="7887359734"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={FormData.subject}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      subject: e.target.value,
                    }))
                  }
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={FormData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </Modal>
    </>
  );
}
