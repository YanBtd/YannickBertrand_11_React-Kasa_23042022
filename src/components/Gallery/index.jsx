import Card from '../../components/Card';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const CardsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    background-color: #f6f6f6;
    border-radius: 30px;
    margin-top: 30px;
    padding-left: 40px;
    padding-right: 10px;
    padding-top: 40px;
    // padding-bottom: 40px;
    border-radius: 25px;
    background-color: yellowgreen;
`;

function Gallery() {
    const [logements, setLogement] = useState([]);

    useEffect(() => {
        fetch('../../data/logements.json')
            .then((data) => data.json())
            .then((result) => setLogement(result));
    }, [setLogement]);

    return (
        <CardsContainer>
            {logements.map((logement) => (
                <NavLink
                    key={logement.id}
                    to={'/logement/' + logement.id + '/#'}
                >
                    <Card key={logement.id} logement={logement} />
                </NavLink>
            ))}
        </CardsContainer>
    );
}

export default Gallery;
