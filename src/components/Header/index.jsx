import logo from '../../assets/LOGO.png';
import Navbar from '../Navbar';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    // width: 100%;
    height: 68px;
    margin-top: 20px;
    // background-color: orange;
    margin-left: 40px;
    margin-right: 40px;
`;
const HeaderImage = styled.img``;

function Header() {
    return (
        <HeaderWrapper>
            <HeaderImage src={logo} alt="logo Kasa" />
            <Navbar />
        </HeaderWrapper>
    );
}

export default Header;
