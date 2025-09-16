import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="1v4ncr1s@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="09467405817" Image={FiPhone} />
      <SingleInfo text="Sto.Domingo, Albay" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
