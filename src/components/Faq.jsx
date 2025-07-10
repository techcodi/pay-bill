import { useState } from "react";

function Faq() {
  const Questions = [
    {
      id: 0,
      question: "What types of bills can I pay?",
      answer:
        "You can pay utility bills such as electricity, water, internet, TV subscriptions, and more.",
    },
    {
      id: 1,
      question: "Is my payment information secure?",
      answer:
        "Yes, we use bank-level encryption to ensure your payment information is always secure.",
    },
    {
      id: 2,
      question: "How long does it take for payments to process?",
      answer:
        "Payments are processed instantly, and you will receive confirmation immediately.",
    },
    {
      id: 3,
      question: "Can I pay bills from different countries?",
      answer:
        "Yes, you can pay bills from various countries as long as they are supported by our platform.",
    },
    {
      id: 4,
      question: "What should I do if I encounter an issue?",
      answer:
        "If you encounter any issues, please contact our support team via email or phone.",
    },
  ];

  const [isOpen, setIsOpen] = useState(0);

  function handleActive(id) {
    setIsOpen(isOpen === id ? null : id);
  }

  return (
    <div className="section-faq" id="faq">
      <section>
        <div>
          <h2 className="section-title">
            Checkout our <span style={{ color: "#2563eb" }}>FAQs</span>{" "}
          </h2>
          <p className="section-subtitle">
            Have a question about our services? Our FAQ section has got you
            covered with hepful information on all of our offerings.
          </p>
        </div>
        <div className="container-faq">
          {Questions.map((item) => (
            <div key={item.id} className="faq-item">
              <div className="faq-header">
                <h3 className="faq-question">{item.question}</h3>
                <button className="" onClick={() => handleActive(item.id)}>
                  {isOpen === item.id ? (
                    <i className="fas fa-chevron-up"></i>
                  ) : (
                    <i className="fas fa-chevron-down"></i>
                  )}
                </button>
              </div>

              {isOpen === item.id && (
                <div className="faq-answer">
                  <p className="faq-answer">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Faq;
