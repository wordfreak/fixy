import React from "react";
import { ReactComponent as FrontImage } from "../Front.svg";

function Onboarding({ formData, setForm, navigation }) {
  return (
    <div className="onboarding bg-white flex flex-wrap justify-center items-center">
      <div className="onboarding-image">
        <FrontImage />
      </div>
      <div className="textDiv text-left       ">
        <p className="  leading-7 text-sm font-medium">
          Finding what you need just got easier. <br />
          Tell us what you looking for and get it sent <br />
          to you in minutes.
        </p>
        <p className="text-xs leading-7 mt-3">
          Are you looking for the perfect shoe for your date?
          <br /> Or the highly skilled plumber to fix your faulty <br />
          shower?. FIXY's got you, your number one source
          <br /> for all the things you looking for.
        </p>
        <p className="text-xs leading-7 mt-4">
          We're dedicated to giving you the best of <br />
          experience, with our well detailed customer <br />
          service and highly alert salesperson that pay’s apt <br />
          attention to your needs. You can also signUp
          <a href="#" className="underline">
            &nbsp;here
          </a>
          to become a FIXY's vendor
        </p>
        <div className="buttonDiv">
          <button
            onClick={() => navigation.next()}
            className=" flex mx-auto mt-6 text-white bg-blue-600 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded-full"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
