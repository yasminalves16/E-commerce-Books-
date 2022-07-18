import { createContext, useContext, useState } from "react";

export const CatalogueContext = createContext([])

export const CatalogueProvider = ({children}) => {

    const [catalogue, setCatalogue] = useState([
		
        { id: 1, title: "Harry Potter", subtitle: "e a Pedra Filosofal" , autora: "J. K. Rowling", img: "https://osmelhoreslivros.com.br/wp-content/uploads/2020/02/harry-potter-e-a-pedra-filosofal.jpg" , price: 39 },
        { id: 2, title: "Harry Potter", subtitle: "e a Câmara Secreta" , autora: "J. K. Rowling", img: "https://osmelhoreslivros.com.br/wp-content/uploads/2020/02/harry-potter-e-a-camara-secreta.jpg", price: 39 },
        { id: 3, title: "Harry Potter", subtitle: "e o Prisioneiro de Azkaban" , autora: "J. K. Rowling", img: "https://osmelhoreslivros.com.br/wp-content/uploads/2020/02/harry-potter-e-o-prisioneiro-de-askaban.jpg", price: 39},
        { id: 4, title: "Harry Potter", subtitle: "e o Cálice de Fogo" , autora: "J. K. Rowling", img: "https://osmelhoreslivros.com.br/wp-content/uploads/2020/02/harry-potter-e-o-calice-de-fogo.jpg" ,price: 39},
        { id: 5, title: "Harry Potter", subtitle: "e a Ordem da Fênix" , autora: "J. K. Rowling", img: "https://osmelhoreslivros.com.br/wp-content/uploads/2020/02/harry-potter-e-a-ordem-da-fenix.jpg" , price: 39},
        { id: 6, title: "Harry Potter", subtitle: "e o Enigma do Príncipe" , autora: "J. K. Rowling", img: "https://osmelhoreslivros.com.br/wp-content/uploads/2020/02/harry-potter-e-o-enigama-do-principe.jpg", price: 39},
        { id: 7, title: "Harry Potter", subtitle: "e e as Relíquias da Morte" , autora: "J. K. Rowling",img: "https://osmelhoreslivros.com.br/wp-content/uploads/2020/02/harry-potter-e-as-reliquias-da-morte.jpg", price: 39},
        { id: 8, title: "Harry Potter", subtitle: "e e a Criança Amaldiçoada" , autora: "J. K. Rowling", img: "https://osmelhoreslivros.com.br/wp-content/uploads/2020/02/Harry-potter-e-a-criaca-amaldicoada.jpg" ,  price: 39},
        { id: 9, title: "Animais Fantásticos", subtitle: " e Onde Habitam" , autora: "J. K. Rowling", img:"https://osmelhoreslivros.com.br/wp-content/uploads/2021/08/animais-fantasticos.jpg" , price: 39},
        { id: 10, title: "Animais Fantásticos", subtitle: "Os crimes de Grindelwald" , autora: "J. K. Rowling", img: "https://osmelhoreslivros.com.br/wp-content/uploads/2021/08/crimes-grindewald.jpg", price: 39},
        { id: 11, title: "Os Contos de Beedle", subtitle: "o Bardo" , autora: "J. K. Rowling", img: "https://osmelhoreslivros.com.br/wp-content/uploads/2021/08/beedle-bardo.jpg", price: 39},
        { id: 12, title: "Quadribol", subtitle: "através dos séculos" , autora: "J. K. Rowling", img: "https://osmelhoreslivros.com.br/wp-content/uploads/2021/08/quadribol.jpg" ,price: 39},
        
	])

    return(
        <CatalogueContext.Provider value={{ catalogue, setCatalogue }} >
        {children}</CatalogueContext.Provider>
    )
}

export const useCatalogue = () => useContext(CatalogueContext)