import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { Link } from "react-router-dom";
import Images from "../components/Images/Images";
import sn1 from "../assets/img/sneakers-1.jpg";
import sn2 from "../assets/img/sneakers-2.jpg";
import sn3 from "../assets/img/sneakers-3.jpg";
import sn4 from "../assets/img/sneakers-4.jpg";
import sn5 from "../assets/img/sneakers-women-1.jpeg";
import sn6 from "../assets/img/sneakers-women-2.jpeg";
import sn7 from "../assets/img/sneakers-women-3.jpeg";
import sn8 from "../assets/img/sneakers-women-4.jpeg";
import { Layout, Header, Body } from "../components/Layout/index";
import styles from "./CollectionsPage.module.scss";

const CollectionsPage = () => {
    return (
        <Layout>
        <Header isFixed>
            <NavigationBar />
        </Header>
        <Body isHeaderFixed>
        <p className={`${styles["titleFirst"]}`}>Fall</p>
        <p className={`${styles["titleSecond"]}`}>Collections</p>
            <div className={`${styles["contentWrapper"]}`}>
            <Link to="/men">
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
            </Link>

            <div className={`${styles["infoSec"]}`}>
                <h1 className={`${styles["infoBrandMen"]}`}>SNEAKERS COMPANY</h1>
                <h2 className={`${styles["infoItemName"]}`}>
                Fall Limited Edition Sneakers - MEN
                </h2>
                <h3 className={`${styles["infoDes"]}`}>
                These low-profile sneakers are your perfect casual wear companion.
                Featuring a durable rubber outer sole, they’ll withstand
                everything the weather can offer
                </h3>
            </div>
            </div>
            <div className={`${styles["contentWrapper"]}`}>
            <Link to="/women">
                <div className={`${styles["imgSec"]}`}>
                <Images
                    className={`${styles["primaryImg"]}`}
                    type="primary"
                    link={sn5}
                ></Images>

                <div className={`${styles["subImg"]}`}>
                    <Images type="secondary" link={sn5}></Images>
                    <Images type="secondary" link={sn6}></Images>
                    <Images type="secondary" link={sn7}></Images>
                    <Images type="secondary" link={sn8}></Images>
                </div>
                </div>
            </Link>
            <div className={`${styles["infoSec"]}`}>
                <h1 className={`${styles["infoBrandWomen"]}`}>SNEAKERS COMPANY</h1>
                <h2 className={`${styles["infoItemName"]}`}>
                Fall Limited Edition Sneakers - WOMEN
                </h2>
                <h3 className={`${styles["infoDes"]}`}>
                These low-profile sneakers are your perfect casual wear companion.
                Featuring a durable rubber outer sole, they’ll withstand
                everything the weather can offer
                </h3>
            </div>
            </div>
        </Body>
        </Layout>
    );
};

export default CollectionsPage;
