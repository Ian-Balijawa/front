import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  requiredValidation,
  useYupValidationResolver,
} from "../../../constant";
import { routes } from "../../../routes";

import "./reset-password.css";
import GPCardAuthHeader from "../../../components/GPCardAuthHeader";
import GPTextInput from "../../../components/GPTextInput/GPTextInput";
import GPBottomLinks from "../../../components/GPBottomLinks";
import GPBlockButton from "../../../components/GPBlockButton";
import { Form } from "react-bootstrap";

function ResetPassword() {
  const [validated, setValidated] = useState(false);

  const validationSchema = yup.object({
    password: yup
      .string()
      .required(`Password ${requiredValidation}`)
      .min(8)
      .max(50),
    confirmPassword: yup
      .string()
      .required(`Confirm Password ${requiredValidation}`)
      .min(8)
      .max(50),
  });

  const resolver = useYupValidationResolver(validationSchema);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver });

  const handleResetPassword = async (data) => {
    console.log("resetpasword form data =>", data);
    try {
      const res = await fetch(routes.resetpasword, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      console.log("handleResetPassword data = ", resData);
    } catch (error) {
      console.log(error);
    }
    setValidated(true);
  };

  console.log("errors => ", errors);

  return (
    <div className="">
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-4">
              <div className="card bg-white text-dark goldpos__logo  mb-5">
                <div className="card-body py-4">
                  <GPCardAuthHeader title="Create New Password" />
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit(handleResetPassword)}
                    className="needs-validation"
                  >
                    <GPTextInput
                      type="password"
                      id="password"
                      name="password"
                      label="Password"
                      register={register}
                      errors={errors}
                    />

                    <GPTextInput
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      label="Confirm Password"
                      register={register}
                      errors={errors}
                    />

                    <div className="row">
                      <div className="col-6">
                        <GPBlockButton
                          title="Back to Sign In"
                          classes="btn-light border p-2"
                        />
                      </div>
                      <div className="col-6 text-white">
                        <GPBlockButton
                          title="Reset Password"
                          type="submit"
                          classes="btn outline-dark bg-theme border-0
                      text-white forgotBtn p-2 btn btn-primary"
                        />
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
              <GPBottomLinks />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResetPassword;
