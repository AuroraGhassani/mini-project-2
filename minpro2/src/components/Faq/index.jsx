import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is mental health consultation?",
      answer:
        "Mental health consultation involves discussing your emotional, psychological, or social challenges with a trained therapist to find effective ways to improve your well-being.",
    },
    {
      question: "How can I book a mental health consultation?",
      answer:
        "You can book a consultation by selecting an available therapist on our platform, choosing a time slot that works for you, and completing the booking process online.",
    },
    {
      question: "Is mental health consultation confidential?",
      answer:
        "Yes, all sessions are completely confidential. Your therapist is bound by ethical and legal guidelines to protect your privacy.",
    },
    {
      question: "What can I expect during my first consultation?",
      answer:
        "During your first session, your therapist will get to know you, discuss your concerns, and work with you to develop a plan to address your needs.",
    },
    {
      question: "How do I know if I need mental health consultation?",
      answer:
        "If you’re feeling overwhelmed, anxious, depressed, or struggling with daily life, a consultation can help you better understand your emotions and provide support.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-orange-50">
      <div className="container px-10 mx-auto md:px-20">
        <h2 className="mb-6 text-4xl font-bold text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white border border-gray-400 shadow-sm rounded-xl"
            >
              <button
                className="flex items-center justify-between w-full px-6 py-5 text-lg font-medium text-gray-800 transition duration-300 bg-gray-100 hover:bg-orange-600 hover:text-white focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="text-xl text-gray-500">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 leading-relaxed text-gray-700 bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
