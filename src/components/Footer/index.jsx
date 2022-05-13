import logo from '../../assets/logoB&W.png';
import styled from 'styled-components';

const FooterContainer = styled.div`
    background: #000000;
    width: 100%;
    height: 209px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const FooterImage = styled.img`
    width: 122px;
    height: 40px;
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterImage src={logo} alt="log kasa" />
        </FooterContainer>
    );
}

export default Footer;
