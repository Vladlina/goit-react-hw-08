import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={s.main}>
      <h1 className={s.heading}>Welcome to the Contacts Book!</h1>
      <p className={s.paragraph}>
        Never lose touch – manage contacts with ease!
      </p>
    </div>
  );
}
