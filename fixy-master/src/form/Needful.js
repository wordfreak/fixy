import React from "react";
// { useRef } remove from above
function Needful({ formData, setForm, navigation }) {
  return (
    <div className="form-field flex flex-col mt-40 items-center justify-center mb-auto">
      <div className="control ">
        <h3 className="text-lg ml-3">Let's help you find your need</h3>

        <input
          className="needInput  bg-white rounded-full  border mt-5 border-blue-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="text"
          value={formData.need}
          name="need"
          onChange={setForm}
          placeholder="Tell us what you need"
        />
      </div>

      <button
        className="needButton flex mx-auto mt-6 text-white bg-blue-600 border-0 py-2 px-9 focus:outline-none hover:bg-blue-600  rounded-full"
        onClick={() => navigation.next()}
      >
        Go
      </button>
    </div>
  );
}

export default Needful;

// import React from "react";
// import { Container, TextField, Button } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   myinput: {
//     color: "red",

//     border: "1px solid #073A93",
//     // box-sizing: border-box;
//     borderRadius: "78px",
//     marginBottom: "5px",
//   },
// });

// export const Needful = ({ formData, setForm, navigation }) => {
//   const { need } = formData;
//   console.log(formData);
//   const classes = useStyles();
//   return (
//     <Container maxWidth="sm">
//       <h3> Let 's help you find your need</h3>{" "}
//       <TextField
//         className={classes.myinput}
//         value={formData.name}
//         name="name"
//         autoComplete="off"
//         fullWidth
//         onChange={setForm}
//       />{" "}
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={() => navigation.next()}
//         style={{ marginRight: "60px" }}
//       >
//         Next{" "}
//       </Button>{" "}
//     </Container>
//   );
// };
