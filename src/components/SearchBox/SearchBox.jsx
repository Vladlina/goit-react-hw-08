import { useId } from "react";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={s.searchBlock}>
      <label htmlFor={id} className={s.searchTitle}>
        Find contacts by name
      </label>
      <input
        type="text"
        className={s.searchField}
        id={id}
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
