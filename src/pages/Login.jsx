import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
    const [loginSuccess, setLoginSuccess] = useState(false);

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                'Password must have minimum 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character'
            )
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setLoginSuccess(true);
        },
    });

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="bg-white p-5 rounded-3 shadow">
                <h1 className="text-center mb-4" >
                    Welcome
                </h1>
                <h2 className="text-center text-info mb-4">
                    Login
                </h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="User Email"
                            id="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-danger text-center" id="mail_err">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            id="password"
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-danger text-center" id="password_err">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <button type="submit" data-testId="loginBtn" id="loginBtn" className="btn btn-primary w-100">Login</button>
                    {loginSuccess && <div className="text-success text-center mt-3" id="success_msg">Successfully logged in</div>}

                </form>
            </div>
        </div>
    );
};

export default Login;
