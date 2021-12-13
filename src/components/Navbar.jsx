import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { mobile } from "../responsive";
import { Link } from 'react-router-dom';

const Container = styled.div`
height:50px;

${mobile({
    height: "50px"
})}
`;

const Wrapper = styled.div`
padding:10px 20px;
display: flex;
align-items: center;
justify-content: space-between;

${mobile({
    padding: "10px"
})}
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;

${mobile({
    display: "none"
})}
`
const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
border:none;

${mobile({
    width: "50px"
})}
`

const Center = styled.div`
flex: 1;
text-align: center;
`

const Logo = styled.h1`
font-weight: bold;

${mobile({
    fontSize: "24px"
})}
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;

${mobile({
    justifyContent: "center"
})}
`
const RightMenu = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const RightMenuItems = styled.div`
margin-left: 25px;
`

const MenuItems = styled.div`
margin-left: 25px;
cursor: pointer;
display: ${(props) => props.type === true && "none"};

${mobile({
    fontSize: "10px", marginLeft: "10px"
})}
`


const Navbar = ({ user }) => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                    <MenuItems>Home</MenuItems>
                    <MenuItems>Shop</MenuItems>
                </Left>
                <Center> <Logo>Sezatri.</Logo> </Center>
                <Right>
                    <RightMenu>
                        <RightMenuItems>Pages</RightMenuItems>
                        <RightMenuItems>Contact</RightMenuItems>
                    </RightMenu>

                    <Link to="/register" style={{ textDecoration: "none" }} >
                        <MenuItems type={user}>REGISTER</MenuItems>
                    </Link>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <MenuItems type={user}>SIGN IN</MenuItems>
                    </Link>
                    <MenuItems>
                        {/* <Stack spacing={10} direction="row"> */}
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                        {/* </Stack> */}
                    </MenuItems>
                </Right>
            </Wrapper>
        </Container >
    )
}

export default Navbar
