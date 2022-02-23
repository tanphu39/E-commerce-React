import React from 'react';
import menImg from '../../assets/img/sneakers-1.jpg';
import womenImg from '../../assets/img/sneakers-women-1.jpeg';
import cn from 'classnames';

import styles from "./Cart.module.scss";

interface Props {
    className?: string;
    totalMen: number;
    totalWomen: number;
    setTotalMen?: (p: number) => void;
    setTotalWomen?: (p: number) => void;
}

const Cart: React.FC<Props> = ({
    children,
    className = "",
    totalMen,
    totalWomen,
    setTotalMen = () => {},
    setTotalWomen = () => {},
}) => {
    const cartClassName = cn({
        [styles["cart"]]: true,
    })

    const removeMen = () => {
        setTotalMen(0);
        totalMen = 0;
        localStorage.setItem('totalMen', totalMen.toString());
    }

    const removeWomen = () => {
        setTotalWomen(0);
        totalWomen = 0;
        localStorage.setItem('totalWomen', totalWomen.toString());
    }

    var menSection;
    var womenSection;
    if(totalMen > 0) {
        menSection = (
            <section>
                <img src={menImg} alt='Men Sneaker'></img>
                <div className={`${styles["price"]}`}>
                    <p>Men Sneaker</p>
                    <p>$125 <b>x {totalMen}</b></p>
                    <p>= ${125*totalMen}</p>
                </div>
                <button onClick={removeMen} className={`${styles["removeMen"]}`}>Delete</button>
            </section>
        )
    } else {
        menSection = (<div></div>);
    }

    if(totalWomen > 0) {
        womenSection = (
            <section >
                <img src={womenImg} alt='Women sneaker'></img>
                <div className={`${styles["price"]}`}>
                    <p>Men Sneaker</p>
                    <p>$125 <b>x {totalWomen}</b></p>
                    <p>= ${125*totalWomen}</p>
                </div>
                <button onClick={removeWomen} className={`${styles["removeWomen"]}`}>Delete</button>
            </section>
        )
    } else {
        womenSection = (<div></div>);
    }


    if(totalMen > 0 || totalWomen > 0) {
        return (
            <div className={cartClassName}>
                <h1>Cart</h1>
                <hr></hr>
                {menSection}
                {womenSection}
            </div>
        )
    }
    return (
        <div className={cartClassName}>
            <h1>Cart</h1>
            <hr></hr>
            <p className={`${styles["empty"]}`}>Your cart is empty!</p>
        </div>
    )
}

export default Cart