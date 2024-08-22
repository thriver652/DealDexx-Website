const CompanyOverview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-text-primary text-center">
          Company Overview
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="flex-1 bg-white shadow-md rounded-lg p-8 lg:p-12 border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-text-primary">
              Mission
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Our mission is to provide a seamless, integrated e-commerce
              experience that encompasses shopping, food delivery, and
              groceries. We aim to simplify the lives of our customers by
              offering a diverse range of products and services under one roof.
            </p>
          </div>
          <div className="flex-1 bg-white shadow-md rounded-lg p-8 lg:p-12 border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-text-primary">
              Vision
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Our vision is to become the leading platform connecting customers
              with a variety of products and services through innovative
              technology. We strive to be at the forefront of e-commerce by
              continuously improving our offerings and user experience.
            </p>
          </div>
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-text-primary">
            Core Values
          </h3>
          <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 mx-auto max-w-4xl">
            <li className="mb-4">
              <strong className="text-accent">Customer-centricity:</strong>{" "}
              Prioritizing the needs and satisfaction of our customers.
            </li>
            <li className="mb-4">
              <strong className="text-accent">Innovation:</strong> Continuously
              evolving and adopting new technologies to enhance our services.
            </li>
            <li className="mb-4">
              <strong className="text-accent">Integrity:</strong> Conducting our
              business with honesty and transparency.
            </li>
            <li>
              <strong className="text-accent">Collaboration:</strong> Building
              strong partnerships with local businesses and stakeholders.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
