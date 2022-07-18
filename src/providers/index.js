import { CartProvider } from "./cart";
import { CatalogueProvider } from "./catalogue";

const Providers = ({ children }) => {
  return (
    <CartProvider>
      <CatalogueProvider>{children}</CatalogueProvider>
    </CartProvider>
  );
};

export default Providers;