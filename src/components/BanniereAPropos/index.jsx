import banniereAPropos from '../../assets/banniereAPropos.png';
import styled from 'styled-components';

const BanniereWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    border-radius: 25px;
    background-color: #000000;
    width: 100%;
    height: 223px;
    margin-bottom: 40px;
`;
const BanniereImage = styled.img`
    opacity: 0.8;
    border-radius: 25px;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

function BanniereAPropos() {
    return (
        <BanniereWrapper>
            <BanniereImage src={banniereAPropos} alt="banniere a-propos" />
        </BanniereWrapper>
    );
}

export default BanniereAPropos;
