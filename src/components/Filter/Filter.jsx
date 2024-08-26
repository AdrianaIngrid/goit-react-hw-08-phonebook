import styles from './Filter.module.css';
import { MdPersonSearch } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../Redux/selectors';
import { setFilter } from '../../Redux/filterSlice';
import React from 'react';
function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  
  const handleFilterChange = ev => {
    dispatch(setFilter(ev.target.value));
  };
 
  return (
    <div>
      <label className={styles.labelFilter}>
        Find Contacts by Name
        <br />
        <span className = {styles.spanFind}>
          <MdPersonSearch />
        </span>
        <input className={styles.inputSearch }type="text" onChange={handleFilterChange} value={filter} />
      </label>
    </div>
  );
}    


export default Filter;