import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import s from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <main className={s.main}>
      {/* <h1 className={s.heading}>Register Your Account</h1> */}
      <RegistrationForm />
    </main>
  );
}
