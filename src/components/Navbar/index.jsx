import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
    width: 309px;
    height: 34px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background-color: black;
    }
`;

function Navbar() {
    return (
        <NavbarContainer role="navigation">
            <Link to="/">Accueil</Link>
            <Link to="/a-propos">A propos</Link>
        </NavbarContainer>
    );
}

export default Navbar;
