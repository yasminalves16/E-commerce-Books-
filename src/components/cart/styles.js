import styled from "styled-components"

export const Container = styled.section`

    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 40px;
    

    div{

        margin-left: 50px;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        width: 50%;
        

        h1{
            width: 100%;
            font-size: 2.5rem;
            margin: 20px;
        }

        h3{
            font-size: 1.5rem;
            margin: 20px;
        }
        

        @media (max-width: 768px){
            margin-left: 3px;
            h1{
                font-size: 20px;
            }
        }

    }

    aside{
        border: 1px solid grey;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin-right: 60px;
        width: 25%;
        height: 35vh;
        background-color: #fde2e4;
        box-shadow: 2px 3px 3px grey;
        color: black;
        margin-top: 80px;

        p{
            font-weight: 500;
        }

        h1, h2, h3{
            font-weight: bold;
        }

        button{
            border-bottom: 2px solid grey;
        }
    }


    @media (max-width: 768px){


        display: flex;
        flex-direction: column;
        align-items: center;

        div h1, h3{
            text-align: center;
            margin:25px;
        }

        div h3{
            font-size: 0.8rem;

        }

        div{
            width: 100%;
        }

        aside{
            width: 70%;
            margin-right: 0;
            margin-top: 20px;
        }
    }


`