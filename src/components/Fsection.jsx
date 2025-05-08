import React from 'react'
import image31 from '../assets/image31.svg';

const faqs = [
  {
    question: "Who should file an ITR?",
    answer:
      "An individual whose annual income is more than the basic exemption limit of Rs 2.5 lakh should file an ITR. The basic exemption limit for senior citizens (60 years onwards and less than 80 years) is Rs 3 lakh, and for super senior citizens it is Rs 5 lakh.",
  },
  { question: "How can I claim deductions for tax saving?", answer: "" },
  { question: "How do I check TDS details from my form 26AS?", answer: "" },
  { question: "How can I claim an income tax refund?", answer: "" },
  { question: "Is my data filed with Tax Pay secure?", answer: "" },
  { question: "What are the GST services offered by Tax Pay?", answer: "" },
  { question: "How to e-verify my ITR?", answer: "" },
  { question: "How to choose a suitable mutual fund for SIP?", answer: "" },
];
function Fsection() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Have an issue?</h2>
        <h4 className="text-muted">Get a personal guide</h4>
      </div>

      <div className="row align-items-center">
        {/* Left - FAQ Accordion */}
        <div className="col-md-7">
  <div className="accordion" id="faqAccordion">
    {faqs.map((faq, index) => (
      <div className="accordion-item mb-3" key={index}>
        <h2 className="accordion-header" id={`heading-${index}`}>
          <button
            className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse-${index}`}
            aria-expanded={index === 0 ? "true" : "false"}
            aria-controls={`collapse-${index}`}
          >
            {faq.question}
          </button>
        </h2>
        <div
          id={`collapse-${index}`}
          className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
          aria-labelledby={`heading-${index}`}
          data-bs-parent="#faqAccordion"
        >
          <div className="accordion-body">
            {faq.answer || "Answer coming soon..."}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Right - Image */}
        <div className="col-md-5 position-relative text-center mt-4 mt-md-0">
          <img
            src={image31}
            alt="FAQ Help"
            className="img-fluid rounded"  style={{   marginTop:"182px"}}
          />
        <div
  className="faq-label px-5 py-5  text-white rounded shadow position-absolute"
  style={{
    left: "10%",
    top: "71%",
    marginTop: "23px",
    // fontSize: "85px",
    fontWeight: 600,
   backgroundColor: " #5192E1",
    WebkitTextStroke: "1px #000",
    textAlign: "center",
    // margin: "10px 0"
  }}
>
  <strong>Frequently</strong>
  <br />
  Asked
  <br />
  Questions
</div>

        </div>
      </div>
    </div>
  )
}

export default Fsection
