import React from 'react'
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Images from "../components/Images/Images";
import { Layout, Header, Body } from "../components/Layout/index";
import styles from './AboutPage.module.scss';
import ava from "../assets/img/ava.jpg";

const AboutPage = () => {
    return (
        <Layout>
            <Header isFixed>
                <NavigationBar />
            </Header>
            <Body isHeaderFixed>
                <div className={`${styles["contentWrapper"]}`}>
                    <Images type="contact" link = {ava} className={`${styles["ava"]}`}></Images>
                    <p className={`${styles["info"]}`}>
                        Email: tanphu39@gmail.com <br></br>
                        Phone Number: 0964943520 <br></br>
                        Zalo: 0964943520 <br></br>
                        Website: https://tanphu39.github.io/Phu-s-Portfolio/
                        <hr></hr>
                    </p>
                </div>
            </Body>
        </Layout>
    )
}

export default AboutPage;
