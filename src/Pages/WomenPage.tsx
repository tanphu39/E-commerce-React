import React, {useState} from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Button from "../components/Button/Button";
import Images from "../components/Images/Images";
import sn1 from "../assets/img/sneakers-women-1.jpeg";
import sn2 from "../assets/img/sneakers-women-2.jpeg";
import sn3 from "../assets/img/sneakers-women-3.jpeg";
import sn4 from "../assets/img/sneakers-women-4.jpeg";
import cart from "../assets/svg/cart.svg";
import { Layout, Header, Body } from "../components/Layout/index";
import styles from "./WomenPage.module.scss";

const WomenPage = () => {
    const [count, setCount] = useState(0);
    const [totalWomen, setTotalWomen] = useState(0)
    const addToCart = () => {
        setTotalWomen((prevTotalWomen) => (prevTotalWomen += count));
        setCount(0);
        localStorage.setItem('totalWomen', totalWomen.toString());
    };
    return (
        <Layout>
        <Header isFixed>
            <NavigationBar totalWomen={totalWomen} setTotalWomen={setTotalWomen}/>
        </Header>
        <Body isHeaderFixed>
            <div className={`${styles["contentWrapper"]}`}>
            <div className={`${styles["imgSec"]}`}>
                <Images
                className={`${styles["primaryImg"]}`}
                type="primary"
                link={sn1}
                ></Images>

                <div className={`${styles["subImg"]}`}>
                <Images type="secondary" link={sn1}></Images>
                <Images type="secondary" link={sn2}></Images>
                <Images type="secondary" link={sn3}></Images>
                <Images type="secondary" link={sn4}></Images>
                </div>
            </div>

            <div className={`${styles["infoSec"]}`}>
                <h1 className={`${styles["infoBrand"]}`}>SNEAKERS COMPANY</h1>
                <h2 className={`${styles["infoItemName"]}`}>
                Fall Limited Edition Sneakers
                </h2>
                <h3 className={`${styles["infoDes"]}`}>
                These low-profile sneakers are your perfect casual wear companion.
                Featuring a durable rubber outer sole, they’ll withstand
                everything the weather can offer
                </h3>

                <div className={`${styles["price"]}`}>
                <h1 className={`${styles["pricePrice"]}`}>$125.00</h1>
                <h2 className={`${styles["priceDiscount"]}`}>50%</h2>
                </div>
                <h4 className={`${styles["priceOriginal"]}`}>$250.00</h4>

                <div className={`${styles["cart"]}`}>
                <div className={`${styles["addDel"]}`}>
                    <Button className={`${styles["adddelButton"]}`} onClick={() => {
                        if(count > 0) {
                            setCount(count-1)
                        }
                    }}>-</Button>
                    <h1 className={`${styles["cartItems"]}`}>{count}</h1>
                    <Button className={`${styles["adddelButton"]}`} onClick={() => setCount(count+1)}>+</Button>
                </div>
                <Button className={`${styles["addToCart"]}`} onClick={addToCart}>
                    <Images type="logo" link={cart}></Images>
                    <p className={`${styles["addToCartText"]}`}>Add to cart</p>
                </Button>
                </div>
            </div>
            </div>
        </Body>
        </Layout>
    );
};

export default WomenPage;
