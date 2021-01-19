import React from "react";
import { useForm, useStep } from "react-hooks-helper";
// import { Confirm } from "./Confirm";
import Contact from "./Contact";
import Name from "./Name";
import Needful from "./Needful";
import Submit from "./Submit";
import Onboarding from "./Onboarding";

const defaultData = {
  need: "",
  email: "",
  twitter: "",
  phone: "",
  name: "",
};
const steps = [
  { id: "onboarding" },
  { id: "needful" },
  { id: "contact" },
  { id: "name" },
  { id: "submit" },
  //   { id: "confirm" },
];
export const Userform = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  const props = { formData, setForm, navigation };
  switch (step.id) {
    case "onboarding":
      return <Onboarding {...props} />;
    case "needful":
      return <Needful {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "name":
      return <Name {...props} />;
    case "submit":
      return <Submit {...props} />;
    // case "confirm":
    //   return <Confirm {...props} />;
    default:
      break;
  }
  return <div> userform </div>;
};
