import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { selectFilterValue } from 'redux/contacts/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const changeFilterHandler = e =>
    dispatch(changeFilter(e.currentTarget.value.toLowerCase().trim()));

  return (
    <>
      <label className={css.filterLabel}>
        <p className={css.filterText}>Find contacts by name</p>

        <input
          className={css.filterInput}
          type="text"
          value={filter}
          placeholder="search"
          onChange={changeFilterHandler}
        />
      </label>
    </>
  );
};
