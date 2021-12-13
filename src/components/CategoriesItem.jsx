import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
flex-basis: 22.333333%;

`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`
const Info = styled.div`
position: absolute;
top: 0;
/* left: 0; */
width: 100%;
height:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
color: white;
margin-bottom: 20px;
`
const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: bold;

`


const CategoriesItem = (props) => {
    return (
        <Container>
            <Link to={`/products/${props.item.cat}`}>

                <Image src={props.item.img} />
                <Info>
                    <Title>{props.item.title} </Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    )
}

export default CategoriesItem
