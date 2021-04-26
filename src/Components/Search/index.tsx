import styles from './styles.module.scss';
import { FiSearch } from "react-icons/fi";

export default function Search(){
  return(
    <input className={styles.search} type="text"  placeholder={`SEARCH`}></input>
  );
}