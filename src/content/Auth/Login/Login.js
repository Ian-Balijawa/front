import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  requiredValidation,
  useYupValidationResolver,
} from "../../../constant";
import { routes } from "../../../routes";
import { useNavigate } from "react-router-dom";

import { Form } from "react-bootstrap";
import GPBlockButton from "../../../components/GPBlockButton";
import GPBottomLinks from "../../../components/GPBottomLinks";
import GPCardAuthHeader from "../../../components/GPCardAuthHeader";
import GPSpinner from "../../../components/GPSpinner";
import GPTextInput from "../../../components/GPTextInput/GPTextInput";

export default function Login() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup.string().email().required(`Email ${requiredValidation}`),
    password: yup.string().required(`Password ${requiredValidation}`),
  });

  const resolver = useYupValidationResolver(validationSchema);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver });

  const handleLogin = async (data) => {
    console.log("login form data =>", data);
    if (data) {
      navigate("/");
    }
    try {
      const res = await fetch(routes.login, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resData = await res.json();

      // if (resData.status === "success") {
      //   navigate("/dashboard");
      // }

      console.log("handleLogin data = ", resData);
    } catch (error) {
      console.log(error);
    }
    setValidated(true);
  };

  const PasswordLabel = () => {
    return (
      <div className="d-flex justify-content-between">
        <span>Password</span>
        <span>
          <Link to="/forgot-password">Forgot Password?</Link>
        </span>
      </div>
    );
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-4">
            <div className="card bg-white text-dark goldpos__logo  mb-5">
              <div className="card-body py-4">
                <GPCardAuthHeader title="Login In to your GOLDPOS account" />

                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit(handleLogin)}
                  className="needs-validation"
                >
                  <GPTextInput
                    type="text"
                    id="email"
                    name="email"
                    label="Email or Username"
                    register={register}
                    errors={errors}
                  />

                  <GPTextInput
                    type="password"
                    id="password"
                    name="password"
                    label={<PasswordLabel />}
                    register={register}
                    errors={errors}
                  />
                  <GPBlockButton
                    type="submit"
                    title="Sign In"
                    variant="primary"
                    classes="btn-primary bg-theme border-0 text-white btn-md"
                  />
                </Form>
              </div>
            </div>
            <GPBottomLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
