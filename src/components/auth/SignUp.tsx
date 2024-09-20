import React, { ChangeEvent, FormEvent, useState } from "react";

import Button from "../Button";
import Input from "../Input";
import axios from "axios";
import { axiosInstance } from "../../common/axios";
import error from "./error";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Heading from "../Heading";
interface FormValues {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  img2: string;
}

interface FieldErrors {
  [key: string]: string | null;
}

const SignUp: React.FC = () => {
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [value, setValue] = useState<FormValues>({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    img2: "",
  });
  const [otp, setOtp] = useState<string>("");
  const [showOtpInput, setShowOtpInput] = useState<boolean>(false);

  const { password } = value;

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setValue((updatedValue) => ({
      ...updatedValue,
      [id]: value,
    }));

    const errorMessage = error(value, id, password);
    setFieldErrors((prevError) => ({ ...prevError, [id]: errorMessage }));
  };

  const handleOtpChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleOtpSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const otpValue = { ...value, otp };

    try {
      const res = await axiosInstance.post(`/api/v1/admins/signup`, otpValue);
      if (res.data.success) {
        navigate("/signIn");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Otp Submit Error: ", error.response?.data); // Log the detailed error response
      } else {
        console.error("Otp Submit Error: ", error);
      }
    }
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasErrors = Object.values(fieldErrors).some(
      (errorMsg) => errorMsg !== null
    );
    if (!value.username) {
      setFieldErrors((prevError) => ({
        ...prevError,
        username: "Username is required",
      }));
      console.log("Submitted values:", value);
    }

    if (!hasErrors) {
      try {
        const response = await axiosInstance.post(
          `/api/v1/admins/signupToken`,
          value,

          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.data.success) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate("/dashboard");
        }

        console.log(response, "response");

        setShowOtpInput(true);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("SignUp error : ", error.response?.data);
        } else {
          console.error("SignUp error : ", error);
        }
      }
    }
  };

  return (
    <div className=" min-h-screen  bg-gray-100  text-black ">
      <Heading />
      <div className="flex justify-center align-middle mt-4">
        <div className="w-[30%] h-[660px]  max-w-md p-8 space-y-8 bg-gradient-to-r from-pink-200 to-yellow-100 rounded-3xl shadow-md border bg-gradient-to-pink-100 border-orange-200 border-separate border-s-4  relative ">
          {!showOtpInput ? (
            <div className="w-full p-8 bg-white rounded-3xl shadow-2xl   absolute top-14 -inset-0 left-0 h-[600px] ">
              <div className="     absolute  -inset-0 left-0  ml-16 ">
                {" "}
                <img
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOqSBP7m8j966uS133NvqR6HY-kLETeqzQVFk2EPBgZZs4l16Z"
                  }
                  className="w-[300px] h-[150px]  "
                  alt="User Avatar"
                />
              </div>
              <h2 className="text-3xl font-bold text-center text-gray-900 p-6 mt-28">
                Sign Up
              </h2>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col absolute bottom-0 ml-2 "
              >
                <div className="space-y-6  ">
                  <Input
                    type="text"
                    label="   Name"
                    id="username"
                    placeholder="Enter name"
                    value={value.username}
                    onChange={handleChange}
                    error={fieldErrors?.username}
                    className="w-full "
                  />
                  <Input
                    type="email"
                    label="   Email"
                    id="email"
                    placeholder="Enter email"
                    value={value.email}
                    onChange={handleChange}
                    error={fieldErrors?.email}
                    className="w-full"
                  />
                  <Input
                    type="password"
                    label="Password"
                    id="password"
                    placeholder="Enter password"
                    value={value.password}
                    onChange={handleChange}
                    error={fieldErrors?.password}
                    className="w-full"
                  />
                  <Input
                    type="password"
                    label="Confirm Password"
                    id="passwordConfirm"
                    placeholder="Confirm password"
                    value={value.passwordConfirm}
                    onChange={handleChange}
                    error={fieldErrors?.passwordConfirm}
                    className="w-full"
                  />
                  <div className="py-2">
                    <Button
                      type="submit"
                      className="w-[40%] text-white  bg-blue-600 rounded-md hover:text-black hover:border hover:border-black  hover:bg-white focus:outline-none focus:bg-blue-700 ml-28 shadow-3xl "
                    >
                      Sign Up
                    </Button>

                    <p className=" p-4 flex justify-end ">
                      If you have an account,
                      <Link to="/signIn" className="text-blue-600 underline">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="h-[180px] ">
              <form
                onSubmit={handleOtpSubmit}
                className="flex flex-col space-y-6  rounded-lg shadow-2xl "
              >
                <div className="space-y-4 h-[180px]">
                  <h3 className="text-xl font-bold text-center text-gray-900 mt-4 ">
                    Enter OTP
                  </h3>
                  <Input
                    type="text"
                    label="    OTP"
                    id="otp"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={handleOtpChange}
                    className="w-full"
                  />
                  <Button
                    type="submit" // Ensure this matches the prop definition in Button component
                    className="px-2 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700  ml-6 mt-16 "
                  >
                    Submit OTP
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// import React, { ChangeEvent, FormEvent, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import Button from "../Button";
// import Input from "../Input";
// import { axiosInstance } from "../../common/axios";
// import error from "./error";

// interface FormValues {
//   username: string;
//   email: string;
//   password: string;
//   passwordConfirm: string;
// }

// interface FieldErrors {
//   [key: string]: string | null;
// }

// const SignUp: React.FC = () => {
//   const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
//   const [value, setValue] = useState<FormValues>({
//     username: "",
//     email: "",
//     password: "",
//     passwordConfirm: "",
//   });

//   const { password } = value;
//   const navigate = useNavigate();

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { id, value } = e.target;

//     setValue((updatedValue) => ({
//       ...updatedValue,
//       [id]: value,
//     }));

//     const errorMessage = error(value, id, password);
//     setFieldErrors((prevError) => ({ ...prevError, [id]: errorMessage }));
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const hasErrors = Object.values(fieldErrors).some(
//       (errorMsg) => errorMsg !== null
//     );

//     if (!hasErrors) {
//       try {
//         const response = await axiosInstance.post(
//           `/api/v1/admins/signup`,
//           value,
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         console.log("API Response:", response.data);

//         if (response.data.success) {
//           console.log("API Response:", response.data);
//           localStorage.setItem("user", JSON.stringify(response.data.user));
//           console.log("Stored user in localStorage:", response.data.user);
//           navigate("/dashboard");
//         }
//       } catch (error) {
//         if (axios.isAxiosError(error)) {
//           console.error("SignUp error : ", error.response?.data);
//         } else {
//           console.error("SignUp error : ", error);
//         }
//       }
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen text-black bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
//         <h2 className="text-3xl font-bold text-center text-gray-900">
//           Sign Up
//         </h2>
//         <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
//           <div className="space-y-4">
//             <Input
//               type="text"
//               label="Name"
//               id="username"
//               placeholder="Enter name"
//               value={value.username}
//               onChange={handleChange}
//               error={fieldErrors?.username}
//               className="w-full"
//             />
//             <Input
//               type="email"
//               label="Email"
//               id="email"
//               placeholder="Enter email"
//               value={value.email}
//               onChange={handleChange}
//               error={fieldErrors?.email}
//               className="w-full"
//             />
//             <Input
//               type="password"
//               label="Password"
//               id="password"
//               placeholder="Enter password"
//               value={value.password}
//               onChange={handleChange}
//               error={fieldErrors?.password}
//               className="w-full"
//             />
//             <Input
//               type="password"
//               label="Confirm Password"
//               id="passwordConfirm"
//               placeholder="Confirm password"
//               value={value.passwordConfirm}
//               onChange={handleChange}
//               error={fieldErrors?.passwordConfirm}
//               className="w-full"
//             />

//             <Button
//               type="submit"
//               className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
//             >
//               Sign Up
//             </Button>
//           </div>
//         </form>
//         <p className="text-center">
//           If you have an account,{" "}
//           <Link to="/signin" className="text-blue-600 underline">
//             Sign in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
