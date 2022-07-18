import styled, { keyframes } from 'styled-components'
import Logo from "../../assets/logoLivraria.png"

export const Container = styled.div`
    height: 100vh;
    display: flex;
`

export const Background = styled.div`
    @media (min-width: 1100px){
        flex: 1;
        background: url(${Logo})  no-repeat center ;
        background-size: 100%;
    }

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 50%;
`

const appearFromRigth = keyframes `

    from{
        opacity: 0;
        transform: translateX(50px)
    }

    to {
        opacity: 1;
        transform: translateX(0px)
    }

`

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${appearFromRigth} 3s;

    form{
        margin: 88px 0;
        width: 340px;
        text-align: center;
    

    h1{
        margin-bottom: 32px;
        font-size: 25px;
    }

    >div{
        margin-top: 16px;
    }

    button{
        background-color: #b794f4;
        color: black;
        margin: 25px;
        width: 80px;
        padding: 6px;
        border-radius: 20px;

        :hover{
            background-color: #d6bcfa;
        }
    }

    p{
        margin-top: 15px;
        
        a{
            font-weight: bold;
            color: #b794f4;
            margin-left: 12px;
            :hover{
                color:  #d6bcfa;
            }
        }
    }
}
`