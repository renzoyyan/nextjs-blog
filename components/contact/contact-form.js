import { useState, useEffect } from "react";

import Notification from "../ui/notification";

async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

export default function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    // optional: add client-side validation

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEnteredMessage("");
      setEnteredEmail("");
      setEnteredName("");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <section className="font-poppins my-8 mx-auto rounded-md bg-gray-100 w-[90%] max-w-[50rem] p-4 shadow-sm text-md">
      <h1 className="my-4 text-2xl font-bold text-center md:text-4xl">
        How can I help you?
      </h1>
      <form onSubmit={sendMessageHandler}>
        {/* controls */}
        <div className="flex flex-wrap gap-4">
          {/* control */}
          <div className="flex-1 min-w-[10rem]">
            <label
              htmlFor="email"
              className="block mt-2 mb-1 font-bold font-poppins"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-400 rounded font-poppins bg-gray-50"
            />
          </div>
          {/* control */}
          <div className="flex-1 min-w-[10rem]">
            <label
              htmlFor="name"
              className="block mt-2 mb-1 font-bold font-poppins"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-400 rounded font-poppins bg-gray-50"
            />
          </div>
        </div>

        {/* control */}
        <div className="flex-1 min-w-[10rem]">
          <label
            htmlFor="message"
            className="block mt-2 mb-1 font-bold font-poppins"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows="5"
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-400 rounded resize-none font-poppins bg-gray-50"
          ></textarea>
        </div>

        {/* actions */}
        <div className="my-4 text-right">
          <button className="px-4 py-2 bg-indigo-700 border border-indigo-700 rounded shadow text-indigo-50 hover:bg-indigo-500 hover:border-indigo-500">
            Send Message
          </button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}
