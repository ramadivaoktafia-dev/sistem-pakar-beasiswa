function Stepper({ step }) {
  const steps = [
    "Data Pribadi",
    "Akademik",
    "Ekonomi",
    "Prestasi",
    "Organisasi",
    "Karakter",
    "Dokumen",
    "Review",
  ];

  return (
    <div className="stepper">

      {steps.map((item, index) => (

        <div
          key={index}
          className={`step ${step === index ? "active" : ""} ${
            step > index ? "done" : ""
          }`}
        >

          <div className="circle">

            {step > index ? "✓" : index + 1}

          </div>

          <span>{item}</span>

        </div>

      ))}

    </div>
  );
}

export default Stepper;