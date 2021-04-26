import '../../styles/global.scss';
import styles from '../../styles/app.module.scss';
import { Header } from '../Components/Header';
import { FiSearch } from "react-icons/fi";

export default function MyApp() {
  return (
    <div className={styles.background}>
      <Header />
      <body >
        <div className={styles.handlerContainer}>
          <h1 >EXPLORE</h1>
          <h3>THE UNKNOUN</h3>
          <p>
            The new trends for luxury travelers in the year 2018, according to
            with Virtuoso Luxe Report, are cooler and less explored regions,
            like the Arctic, Alaska, Iceland and Patagonia. Antarctic tours
            and the Arctic circle will be on the rise as they offer the unique experience
            of the Aurora Borealis light show in the polar sky.
          </p>
          <button type="button">GET STARTED</button>
        </div>  
      </body>
     </div>

  );
}
