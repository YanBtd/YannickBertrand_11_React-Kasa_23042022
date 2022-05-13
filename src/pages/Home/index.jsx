import Banniere from '../../components/Banniere';
import Gallery from '../../components/Gallery';
import styled from 'styled-components';

const HomeContainer = styled.main`
    background-color: blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
`;

function Home() {
    return (
        <HomeContainer>
            <Banniere />
            <Gallery />
        </HomeContainer>
    );
}

export default Home;
