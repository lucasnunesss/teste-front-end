import SearchNavBar from "../../assets/SearchNavBar"
import styles from "./navbar.module.scss"
const InputNav = () => {
  return (
    <div className={styles.nav_input}>
      <input type="text"  placeholder="O que você está buscando?" />
      <div className={styles.search_nav}>
        <div className={styles.search_icon}>
          <SearchNavBar />
        </div>
      </div>
    </div>
  )
}

export default InputNav