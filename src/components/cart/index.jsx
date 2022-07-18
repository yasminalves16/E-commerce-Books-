import ProductList from "../productList"
import { useCart } from "../../providers/cart"
import { Container } from "./styles"

const Cart = () => {


    const { cart }  = useCart()

    const valorTotal = () => {

        return (
            cart.reduce((acumulador, valorAtual) =>
                (acumulador + Number(valorAtual.price)), 0)
        )
    }

    const total = cart.length

    return (
        <Container>

        <div>
        <h1>Meu carrinho de compras</h1>
        {cart.length >= 1 ? <ProductList type="cart"/>  : <h3> ainda não ha produtos no carrinho</h3>}
        
        </div>

        {cart.length >=1 ? <aside>
            <h2>Resumo do Pedido</h2>
            <>
            <p>Produtos: {total}</p>
            <p>Total: {Intl.NumberFormat("pt-BR", {style: "currency",currency: 'BRL' }).format(valorTotal())}</p>

            <button >Comprar </button>
            </>
        </aside> : null
        }

        </Container>


    );
};

export default Cart;


