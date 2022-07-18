import styled from "styled-components"

export const Body = styled.div`
  display:flex;
  flex-direction: column;

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    button:first-child img {
        transform: rotate(180deg);
    }

    .buttons{
        margin: auto;
        display: flex;
        justify-content: center;
    }

`


export const Container = styled.ul`
    width: 60vw;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    margin: auto;
    scroll-snap-align: center;
    
    ::-webkit-scrollbar {
        display: none;
    }

`

export const List = styled.li`

    border: 2px solid grey;
    box-shadow: 2px 3px 3px grey;
    background-color: #f8edeb;
    flex-direction: column;
    align-items: center;
    margin: 15px;
    padding: 10px;
    width: 270px;
    border-radius: 16px;
    flex: none;
    color: black;
    display: flex;
    scroll-snap-align: center;

    img{
        width: 60%;
        margin: auto;
        margin-bottom: 10px;
        border-radius: 5px;
        box-shadow: 2px 2px 2px grey;
        object-fit: cover;
    }

    h3{
        font-size: 1.3rem;
        margin: 5px;
    }

    h4{
        font-size: 1.0rem;
        margin: 10px;
    }

    h5{
        font-size: 1.0rem;
        margin-bottom: 5px;
    }
    
    h3, h4, h5 {
        font-weight: bold;
    }
    span, p {
        font-weight: 500;
    }

    :hover{
        border: 2px solid #da2bef;
    }

    button{
        margin: 15px;
        border-radius: 5px;
        padding: 5px;


        svg{
            :hover{
                color: #da2bef;
            }
        }
    }


    @media (max-width: 768px){

        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 0;

        img{
            width: 25vw;
            height: 25vh;
            margin:10px;
        }
    }

`