import React from "react";

const Contact = () => {
  return (
    <>
    {/* // bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 */}
    <div className="contact-section bg-[#153448]  text-white py-20 px-4">
      <div className="max-w-2xl mx-auto text-center transition-all duration-1000 transform hover:scale-105 hover:shadow-xl animate-fadeInUp">
        <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 animate-textGlow">
          Contact Us
        </h2>
        <p className="text-lg text-gray-200 mb-8 font-light leading-relaxed">
          We're here to assist you! Whether you have questions or need support,
          feel free to reach out.
        </p>
        <div className="contact-info space-y-4">
          <p className="text-xl tracking-wide transition-colors duration-500 hover:text-yellow-300">
            Email: <span className="font-bold">contact@venuenexus.com</span>
          </p>
          <p className="text-xl tracking-wide transition-colors duration-500 hover:text-yellow-300">
            Phone: <span className="font-bold">+123 456 7890</span>
          </p>
          <p className="text-xl tracking-wide transition-colors duration-500 hover:text-yellow-300">
            Address:{" "}
            <span className="font-bold">
              123 Venue Nexus St, Event City, 45678
            </span>
          </p>
        </div>
      </div>

      <p className="my-12">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        natus voluptates fuga ipsum? Natus dicta deleniti nesciunt tenetur vero
        velit hic minus quisquam! A ex maxime commodi obcaecati quod recusandae
        mollitia doloremque iste. Ullam tempore sed, ea repellat molestiae
        explicabo placeat rem amet ipsam sunt vel unde corrupti quam dolorum.
      </p>
    </div>
    </>
  );
};

export default Contact;
