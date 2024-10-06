import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import "../index.css";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I search for event venues on Venue Nexus?",
      answer:
        "Simply select your location and the type of event into our search bar. Venue Nexus will display a list of available venues that match your criteria, making it easy to compare options and make a booking.",
    },
    {
      question: "What types of events can I book venues for?",
      answer:
        "Venue Nexus offers venues for a variety of events including weddings, corporate events, birthday parties, conferences, and more. Use our filters to narrow down venues based on your specific event type.",

    },
    {
      question: "How do I know if a venue is available on my event date?",
      answer:
        "Once you select a venue, you can view its availability through the integrated calendar on the venue's detail page. Simply select your desired date, and if the venue is available, you'll be able to proceed with the booking.",
    },
    {
      question: "Can I read reviews from previous clients before booking a venue?",
      answer:
        "Yes! Each venue has a reviews section where you can read feedback from previous clients. This helps you make an informed decision before finalizing your booking.",
    },
    {
      question: "Is there a cancellation policy if I need to cancel my booking?",
      answer: "Each venue has its own cancellation policy, which will be clearly displayed on the venue's page. Be sure to review the policy before booking to understand the terms and conditions of cancellations.",
    },
  ];

  return (
    <main className=" bg-gradient-to-l from-slate-200 via-fuchsia-200 to-slate-200 md:px-16 rounded-t-3xl ">
      <div
        className="xl:px-16 md:px-6 px-0  w-full container faqs"
        id="faqs"
      >
        <div className="py-10">
          <h2 className="lg:text-6xl text-4xl font-normal relative lg:p-10 md:p-6 p-4">
            <span className="border-text text-black  absolute md:top-3 lg:top-4 top-0 lg:left-10">
              FREQUENTLY ASKED
            </span>
            <span className="gradient-span-1 gradient-text relative lg:p-6 p-6 font-[600]">
              QUESTIONS
            </span>
          </h2>
          <p className="text-center w-full !text-black pt-6 md:pt-0 text-base md:text-[21px] font-[400]">
            We're dedicated to assisting individuals looking for perfect venue based on your preferences, availability, and location
            
          </p>
        </div>
        <div className="w-full flex items-center justify-center lg:px-10 md:px-6 px-4 ">
          <div className="flex flex-col items-center ">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="w-full bg-white my-1 py-1 overflow-hidden rounded-xl borde border-black   hover:bg-gray-300 shadow-2xl   transition duration-500 "
              >
                <div
                  className="rounded-sm w-full p-6 py-4 cursor-pointer transition-all duration-300 ease-in-out "
                  onClick={() => toggleDropdown(index)}
                >
                  <div className="flex items-center w-full justify-between">
                    <span className="sm:text-base font-semibold md:text-xl text-lg text-black  ">
                      {faq.question}
                    </span>
                    <div className="text-black flex items-center">
                      {openIndex === index ? (
                        <FaMinus
                          className="text-black "
                          size={20}
                        />
                      ) : (
                        <FaPlus
                          className="text-black "
                          size={20}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className={`px-8 drop-shadow-lg transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-fit py-4" : "max-h-0"
                  } overflow-hidden`}
                >
                  <p className="text-black  border-t border-t-white/30 font-normal md:text-xl text-lg mt-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQs;
