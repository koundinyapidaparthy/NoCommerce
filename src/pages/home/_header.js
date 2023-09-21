import Styles from "../../styles/home/header.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShoppingCart,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();
  const userImage = session?.user?.image;
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.section0}>
        <Image
          src={"/Images/Logo.gif"}
          width={65}
          height={65}
          className={Styles.logo}
          alt="CompanyLogo"
        />
      </div>
      <div className={Styles.section1}>
        <div className={Styles.searchBoxWrapper}>
          <input
            type="text"
            placeholder="Search Product / Order Id / Ticket Id..."
            className={Styles.searchBox}
          />
          <div className={Styles.searchOrCross}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className={Styles.directLinks}>
          <Link href={"/orders"} className={Styles.orders}>
            {" "}
            Orders{" "}
          </Link>
          <FontAwesomeIcon icon={faBell} className={Styles.bellIcon} />
          <FontAwesomeIcon
            icon={faShoppingCart}
            className={Styles.shoppingCartIcon}
          />
        </div>
      </div>
      <div className={Styles.section2}>
        <div>
          <Image
            src={userImage}
            width={35}
            height={35}
            className={Styles.userImage}
            alt="UserImage"
          />
        </div>
      </div>
    </div>
  );
}
