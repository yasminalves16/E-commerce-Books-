import { useCatalogue } from "../../providers/catalogue";
import { useCart } from "../../providers/cart"
import { Body, Container, List } from "./styles";
import { useRef } from 'react';

import Setinha from "../../assets/setinha.png"

import { FaCartPlus, FaCartArrowDown } from "react-icons/fa";

const ProductList = ({ type }) => {

    const { catalogue } = useCatalogue();

    const { cart, addToCart, removeFromCart } = useCart()

    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();

        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };


    return (
        <Body>
            <Container ref={carousel}>
                {type === "catalogue" &&
                    catalogue.map((item, index) => (
                        <List key={index}>
                            <img src={item.img} alt={item.name} />
                            <h3>{item.title}</h3>
                            <h5>{item.subtitle}</h5>
                            <span>{item.autora}</span>
                            <p>Valor: {Intl.NumberFormat("pt-BR", { style: "currency", currency: 'BRL' }).format(item.price)}</p>
                            <button onClick={() => addToCart(item)}>  <FaCartPlus/> </button>
                        </List>
                    ))
                }

                {type === "cart" &&
                    cart.map((item, index) => (
                        <List key={index}>
                            <img src={item.img} alt={item.title} />
                            <h3>{item.title}</h3>
                            <h5>{item.subtitle}</h5>
                            <p>Valor: {Intl.NumberFormat("pt-BR", { style: "currency", currency: 'BRL' }).format(item.price)}</p>
                            <button onClick={() => removeFromCart(index)} > <FaCartArrowDown/> </button>
                        </List>
                    ))}
            </Container>

            <div className="buttons">
                <button onClick={handleLeftClick}>
                    <img src={Setinha} alt="Scroll Left" />
                </button>
                <button onClick={handleRightClick}>
                    <img src={Setinha} alt="Scroll Right" />
                </button>
            </div>
        </Body>


    );


}

export default ProductList;