import styled from 'styled-components'

const padding = "20px"

const CardContainer = styled.div`
    max-width: 600px;
    width: 100%;
    height:300px;
    display: flex;
`
const CardLeft = styled.div`
    width : 40%;
    height:300px;
`
const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`
const CardRight = styled.div`
    width:60%;
    height:100%;
`
const CardRightTop = styled.div`
    width: 100%;
    height: 50%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid #F7FAFC;
    border-right: 1px solid #F7FAFC;
`
const CardRightBottom = styled.div`
    width: 100%;
    height: 50%;
    background-color: #F7FAFC;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: black;
    padding-left: ${padding};
`
const Text = styled.p`
    color: grey;
    padding-left: ${padding};
    margin-top: -20px;
`
const Button = styled.button`
    width:150px;
    height: 70px;
    background-color:#6D9BE9;
    outline: none;
    border:none;
    cursor:pointer;
    border-radius: 99px;
    text-transform: uppercase;
    color: white;
    font-weight: 800;
    letter-spacing:2px
`







const Card = () => {
    return <CardContainer>
            <CardLeft>
                <Img src="https://images.unsplash.com/photo-1560026301-88340cf16be7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></Img>
            </CardLeft>
            <CardRight>
                <CardRightTop>
                    <Title>New House</Title>
                    <Text>Lorem ipsum</Text>
                </CardRightTop>
                <CardRightBottom> 
                    <Button>Discover</Button>
                </CardRightBottom>
            </CardRight>
        </CardContainer>
}

export default Card