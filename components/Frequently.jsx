"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is Firebee Safe?",
    answer: (
      <div>
        <span>
          Yes, Firebee is safe. Firebee meets the safety standards set by ICNIRP
          (International Commission on Non-Ionizing Radiation Protection).
          Firebee is
        </span>
        <span className="font-bold"> 3000x less powerful </span>
        <span>
          than your average smartphone. Firebee uses an ultra-low signal that is
          completely safe for home use. The technology behind Firebee has been
          rigorously safety tested and has over 300,000 hours tested by users
          for efficacy and safety.
        </span>
      </div>
    ),
  },
  {
    question: "How Does Firebee work?",
    answer: (
      <div>
        <span>
          Firebee uses safe ultra-low energy magnetic signals to gently nudge
          you into a different mental state.
        </span>
        <br />
        <br />
        <span>
          Every Firebee signal is made by studying real world magnetic
          signatures. Did you know caffeine has a unique one of a kind magnetic
          signature? It’s a relatively unknown fact that every molecule on earth
          actually has a unique magnetic signature.
        </span>
        <br />
        <br />
        <span>
          Firebee using patented technology is able to take a magnetic signature
          and play it back through the Firebee headband. When you use the alert
          signal with Firebee you are actually playing back the magnetic
          signature of caffeine which our bodies already recognize.
        </span>
        <br />
        <br />
        <span>
          Within minutes of feeling the ultra-low magnetic signal of caffeine
          our body begins to feel more alert and awake.
        </span>
        <br />
        <br />
        <span>
          Firebee signal is 3000 times less powerful than a smartphone and
          completely safe to use.{" "}
        </span>
      </div>
    ),
  },
  {
    question: "Will Firebee Fit on My Head?",
    answer:
      "Firebee has a fully adjustable headband you can adjust to fit comfortably and snug on your head.",
  },
  {
    question: "What If I want the signal to stop?",
    answer:
      "Firebee is designed to be used on command. If you wish to turn off a signal, the effects wear off within minutes.",
  },
  {
    question: "How do you charge Firebee?",
    answer:
      "Firebee comes with a charging dock and a charging cable. Just set up the charging dock on a nightstand and plug it in. ",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FBFBFB]">
      <div className="w-full max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-5xl md:text-6xl tracking-wide font-extralight text-center mb-8 text-[#3F3631] ">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`mb-4 border-b-2 border-[#3F3631] pb-4 ${
              faq.question === "Is Firebee Safe?"
                ? "mt-4 border-t-2 border-[#3F3631] pt-4"
                : ""
            }`}
          >
            <button
              className="flex justify-between items-center w-full text-left p-4 rounded-md transition-colors duration-300 hover:bg-gray-100"
              onClick={() => toggleQuestion(index)}
            >
              <span className="md:text-2xl text-xl font-medium text-[#3F3631] transition-colors duration-300">
                {faq.question}
              </span>
              <span
                className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                  openIndex === index ? "rotate-0 scale-75" : "rotate-0"
                }`}
              >
                {openIndex === index ? <Minus /> : <Plus />}
              </span>
            </button>
            <div
              className={`transition-[max-height, opacity] duration-500 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-[520px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-2 text-[#3F3631] text-base md:text-xl font-extralight tracking-wide transition-opacity duration-500 ease-in-out drop-shadow-lg">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
