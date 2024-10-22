import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <div className={s.fieldWrapper}>
          <label htmlFor={nameFieldId} className={s.fieldLabel}>
            Name
          </label>
          <Field
            className={s.field}
            type="text"
            name="name"
            id={nameFieldId}
            required
          />
        </div>
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
          Register
        </button>
      </Form>
    </Formik>
  );
}
