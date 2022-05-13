import BanniereAPropos from '../../components/BanniereAPropos';
import styled from 'styled-components';
import Dropdown from '../../components/Dropdown';

const AProposContainer = styled.div`
    // background-color: green;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    padding-left: 40px;
    padding-right: 40px;
    // min-height: 100vh;
`;

function APropos() {
    return (
        <AProposContainer>
            <BanniereAPropos />
            <Dropdown
                fullWidth="full"
                titre="Fiabilité"
                description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
            />
            <Dropdown
                fullWidth="full"
                titre="Respect"
                description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <Dropdown
                fullWidth="full"
                titre="Service"
                description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            />
            <Dropdown
                fullWidth="full"
                titre="Sécurité"
                description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            />
        </AProposContainer>
    );
}

export default APropos;
