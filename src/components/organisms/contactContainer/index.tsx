import ContactDesc from "@/src/components/atoms/contact/contactText/contactDesc";
import ContactTitle from "@/src/components/atoms/contact/contactText/contactTitle";

const ContactContainer = () => {
  return (
    <div className="container pt-10 md:py-24 mx-auto object-center max-w-7xl px-4 sm:px-6">
      <div className="flex flex-wrap justify-center items-center w-full mb-10">
        <ContactTitle />
        <ContactDesc />
      </div>
    </div>
  );
};

export default ContactContainer;
