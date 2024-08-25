// import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
// import Button from "../Button";
// import Input from "../Input";
// import { login as authLogin } from "../../store/authSlice";
// import { axiosInstance } from "../../common/axios";
// import error from "./error";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// interface FormValues {
//   email: string;
//   password: string;
// }

// interface FieldErrors {
//   [key: string]: string | null;
// }

// const SignIn: React.FC = () => {
//   const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
//   // const [email, setEmail] = useState<string | null>(null);
//   const [value, setValue] = useState<FormValues>({
//     email: "",
//     password: "",
//   });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { id, value: inputValue } = e.target;

//     setValue((updatedValue) => ({
//       ...updatedValue,
//       [id]: inputValue,
//     }));

//     const errorMessage = error(inputValue, id, value.password);
//     setFieldErrors((prevError) => ({ ...prevError, [id]: errorMessage }));
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Check for validation errors before proceeding
//     const hasErrors = Object.values(fieldErrors).some(
//       (errorMsg) => errorMsg !== null
//     );

//     if (!hasErrors) {
//       try {
//         // Make the API call to log in
//         const response = await axiosInstance.post(
//           "/api/v1/admins/login",
//           value
//         );

//         // Log the full response for debugging
//         console.log("API Response:", response);

//         // Verify the response data structure
//         if (response.data && response.data.status === "success") {
//           if (response.data.user) {
//             // Save user data to local storage
//             localStorage.setItem("user", JSON.stringify(response.data.user));
//             console.log(
//               "User saved in localStorage:",
//               JSON.parse(localStorage.getItem("user") || "{}")
//             );

//             // Navigate to the dashboard
//             navigate("/dashboard");

//             // Dispatch login action with user data
//             dispatch(authLogin(response.data.user));
//           } else {
//             console.error("User data is missing in the response.");
//           }
//         } else {
//           console.error(
//             "Login failed. Response status:",
//             response.data?.status,
//             "Message:",
//             response.data?.message || "Unknown error"
//           );
//         }
//       } catch (error) {
//         // Enhanced error handling
//       }
//     } else {
//       console.log("Form has validation errors:", fieldErrors);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen text-black bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
//         <Link to="/dashboard">
//           <h2 className="text-3xl font-bold text-center text-gray-900">
//             Sign In
//           </h2>
//         </Link>
//         <form onSubmit={handleSubmit} className="flex flex-col">
//           <div className="space-y-8 px-3">
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
//             <Link to={"/home"}>
//               {" "}
//               <Button
//                 type="submit"
//                 className="w-full px-3 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
//               >
//                 Sign In
//               </Button>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import Button from "../Button";
import Input from "../Input";
import { login as authLogin } from "../../store/authSlice";
import { axiosInstance } from "../../common/axios";
import error from "./error";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Heading from "../Heading";

interface FormValues {
  email: string;
  password: string;
}

interface FieldErrors {
  [key: string]: string | null;
}

const SignIn: React.FC = () => {
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [value, setValue] = useState<FormValues>({
    email: "",
    password: "",
  });
  const [isSignedUp, setIsSignedUp] = useState<boolean>(false); // New state for sign-up status
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already signed up by checking localStorage
    const user = localStorage.getItem("user");
    if (user) {
      setIsSignedUp(true);
      navigate("/dashboard"); // Optionally redirect to dashboard if user is already signed in
    }
  }, [navigate]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value: inputValue } = e.target;

    setValue((updatedValue) => ({
      ...updatedValue,
      [id]: inputValue,
    }));

    const errorMessage = error(inputValue, id, value.password);
    setFieldErrors((prevError) => ({ ...prevError, [id]: errorMessage }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const hasErrors = Object.values(fieldErrors).some(
      (errorMsg) => errorMsg !== null
    );

    if (!hasErrors) {
      try {
        console.log("Submitting data: ", value);
        const response = await axiosInstance.post(
          "/api/v1/admins/login",
          value
        );

        if (response.data && response.data.status === "success") {
          if (response.data.user) {
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate("/dashboard");
            dispatch(authLogin(response.data.user));
          } else {
            console.error("User data is missing in the response.");
          }
        } else {
          console.error(
            "Login failed. Response status:",
            response.data?.status,
            "Message:",
            response.data?.message || "Unknown error"
          );
        }
      } catch (error: any) {
        if (error.response) {
          console.error("SignIn error: ", error.response.data);
        } else {
          console.error("SignIn error: ", error);
        }
      }
    } else {
      console.log("Form has validation errors:", fieldErrors);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-black bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md border border-orange-300 border-separate border-s-4">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          {isSignedUp ? "Welcome Back!" : "Sign In"} {/* Conditional heading */}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="space-y-8 px-3">
            <Input
              type="email"
              label="Email"
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
            <Button
              type="submit"
              className="w-full px-3 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Sign In
            </Button>
            <p className="text-center mt-4">
              {isSignedUp ? (
                <Link to="/dashboard" className="text-blue-600 underline">
                  Go to Dashboard
                </Link>
              ) : (
                <Link to="/signup" className="text-blue-600 underline">
                  Don't have an account? Sign up
                </Link>
              )}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
