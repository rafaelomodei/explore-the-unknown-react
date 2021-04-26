import Search from '../Search';
import styles from './styles.module.scss';

export function Header(){
  return(
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Logo"/>
      <span>
        <button type="button">HOME</button>
        <button type="button">ABOUT</button>
        <button type="button">SERVICES</button>
        <Search/>
      </span>
    </header>
  );
}