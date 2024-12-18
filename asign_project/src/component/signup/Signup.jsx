import "../../index.css";
import robot from "../../images/robot.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Signup = () => {
  const initialValues = {
    email: "",
    fullname: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    fullname: Yup.string()
      .min(3, "Full name must be at least 3 characters")
      .required("Full name is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form data submitted:", values);
    alert("Form submitted successfully!");
  };
  return (
    <>
      <div className="border border-black mx-auto  p-4 md:w-[100%] sm:w-[100%]  rounded-xl bg-gradient-to-b from-blue-500 via-blue-300 to-blue-700 mt-4">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-1 ">
          <div className="flex justify-start items-end">
            <img
              src={robot}
              alt="Robot"
              className="w-[80%] md:w-auto max-h-[500px] object-contain"
            />
          </div>
          <div className="border border-black h-[500px] rounded-xl text-center bg-white shadow-md shadow-black p-6">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4 ">
                  {/* Email Field */}
                  <div className="flex flex-col items-start">
                    <label htmlFor="email" className="mb-1 font-medium">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>

                  {/* Full Name Field */}
                  <div className="flex flex-col items-start">
                    <label htmlFor="fullname" className="mb-1 font-medium">
                      Full Name
                    </label>
                    <Field
                      type="text"
                      name="fullname"
                      placeholder="Enter your full name"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                    <ErrorMessage
                      name="fullname"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>

                  {/* Password Field */}
                  <div className="flex flex-col items-start">
                    <label htmlFor="password" className="mb-1 font-medium">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>

                  {/* Confirm Password Field */}
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="confirmPassword"
                      className="mb-1 font-medium"
                    >
                      Confirm Password
                    </label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;