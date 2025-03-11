import InputNav from "./InputNav"
import styles from "./navbar.module.scss"
import Icon1 from "../../assets/BoxIcon.tsx"
import Heart from "../../assets/HeartIcon.tsx"
import UserIcon from "../../assets/UserIcon.tsx"
import CartIcon from "../../assets/CartIcon.tsx"
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.logo_e}>ec</div>
        <span className={styles.logo_commerce}>onverse</span>
      </div>
      <InputNav />
      <div className={styles.icons_svg}>
        <Icon1 />
        <Heart />
        <UserIcon />
        <CartIcon />
      </div>
    </nav>
  )
}

export default Navbar