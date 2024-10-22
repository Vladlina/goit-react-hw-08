import { Field, Form, Formik } from "formik";
import { useId } from "react";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleLogin = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleLogin}>
      <Form className={s.form}>
        <div className={s.fieldWrapper}>
          <label htmlFor={emailFieldId} className={s.fieldLabel}>
            Email
          </label>
          <Field
            className={s.field}
            type="email"
            name="email"
            id={emailFieldId}
            required
          />
        </div>
        <div className={s.fieldWrapper}>
          <label htmlFor={passwordFieldId} className={s.fieldLabel}>
            Password
          </label>
          <Field
            className={s.field}
            type="password"
            name="password"
            id={passwordFieldId}
            required
          />
        </div>
        <button type="submit" className={s.formBtn}>
          Log in
        </button>
      </Form>
    </Formik>
  );
}
