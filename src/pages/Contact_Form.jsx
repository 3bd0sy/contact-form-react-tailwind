import Contact_Info from "../components/Contact_Info";
import Form from "../components/Form";
import Heading from "../components/Heading";
import Icons from "../components/Icons";
const Contact_Form = () => {
  return (
    <>
      <div className="relative flex justify-between md:flex-row flex-col md:px-6 py-10 lg:px-8 xl:p-16 ">
        <div className="">
          <Heading />
          <Contact_Info />
        </div>
        <Form />
      </div>
      <Icons />
    </>
  );
};

export default Contact_Form;
