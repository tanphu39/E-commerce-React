import React, {useState} from "react";
import Button from "../Button/Button";
import Cart from "../Cart/Cart";
import Images from "../Images/Images";
import cart from "../../assets/svg/cart.svg"
import ava from "../../assets/img/ava.jpg"
import styles from "./NavigationBar.module.scss";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
  totalMen?: number;
  totalWomen?: number;
  setTotalMen?: (p: number) => void;
  setTotalWomen?: (p: number) => void;
}

const NavigationBar: React.FC<Props> = ({
  children,
  className = "",
  totalMen = 0,
  totalWomen = 0,
  setTotalMen = () => {},
  setTotalWomen = () => {},
}
) => {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  // const getInitialState = () => {
  //   totalMen = (Number(localStorage.getItem('totalMen')));
  //   totalWomen = (Number(localStorage.getItem('totalWomen')));
  // }
  // getInitialState();

  return (
    <div>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["pages"]}`}> 
          <Link to="/">
            <Button
              type="bold"
              className={`${styles["home-btn"]}`}
              >
              sneakers
            </Button>
          </Link>

          <Link to="/collections">
            <Button
              type="text-only"
              className={`${styles["button"]}`}
              >
              Collections
            </Button>
          </Link>

          <Link to="/men">
            <Button
              type="text-only"
              className={`${styles["button"]}`}
              >
              Men
            </Button>
          </Link>

          <Link to="/women">
            <Button
              type="text-only"
              className={`${styles["button"]}`}
              >
              Women
            </Button>
          </Link>

          <Link to="/about">
            <Button
              type="text-only"
              className={`${styles["button"]}`}
              >
              About
            </Button>
          </Link>

          <Link to="/contact">
            <Button
              type="text-only"
              className={`${styles["button"]}`}
              >
              Contact
            </Button>
          </Link>
        </div>

        <div className={`${styles["cartAva"]}`}>
          {(totalMen > 0 || totalWomen > 0) && <div className={`${styles["cartNumber"]}`}>{totalMen + totalWomen}</div>}
          <button onClick={togglePopup} className={`${styles["cartButton"]}`}> <Images type="logo" link = {cart} className={`${styles["cart"]}`}></Images> </button>
          {isOpen && <Cart totalMen={totalMen} totalWomen={totalWomen} setTotalMen={setTotalMen} setTotalWomen={setTotalWomen}></Cart>}
          
          <Images type="avatar" link = {ava} className={`${styles["ava"]}`}></Images>
        </div>

      </div>
      
      <hr></hr>
    </div>
  );
};

export default NavigationBar;
