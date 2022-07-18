import Nav from "../../components/header"
import ProductList from "../../components/productList"
import {Text} from "./styles"

const DashboardPage = () => {
    return (
        <>
        <Nav/>
            <Text>Livros Harry Potter</Text>
        <ProductList type="catalogue"/>
        </>
    )
}

export default DashboardPage