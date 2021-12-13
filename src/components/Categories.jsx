import styled from 'styled-components'
import { categories } from '../data'
import CategoriesItem from './CategoriesItem'


const Container = styled.div`
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;

`;

const Title = styled.h1`

`
const Contents = styled.div`
display: flex;
padding: 20px;
flex-wrap: wrap;
/* justify-content: space-between; */
`

const Categories = () => {
    return (
        < Container >
            <Title>Categories</Title>
            <Contents>
                {
                    categories.map(item => (
                        <CategoriesItem item={item} key={item.id} />
                    ))
                }
            </Contents>
        </Container >


    )
}

export default Categories
