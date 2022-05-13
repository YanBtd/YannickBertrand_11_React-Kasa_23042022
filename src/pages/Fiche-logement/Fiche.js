import React from 'react';
// import './Fiche.css';
import { useParams, Navigate } from 'react-router-dom';
import ListeLogements from '../../dataKasa/logements.json';
import Carrousel from '../../components/Carrousel/';
import Tag from '../../components/Tag';
import EtoilePleine from '../../assets/Etoile.png';
import EtoileVide from '../../assets/EtoileVide.png';
import Dropdown from '../../components/Dropdown/';
import styled from 'styled-components';

const LogementContainer = styled.div`
    color: #ff6060;
    // color: blue;
    padding-left: 5%;
    padding-right: 5%;
    margin-top: 40px;
`;
const LogementWrapper = styled.section`
    // background-color: yellow;
    display: flex;
    justify-content: space-between;
`;
const LogementInfos = styled.div`
    // background-color: green;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const LogementTitre = styled.span`
    background-color: black;
    // color: white;
    font-size: 1.5rem;
`;
const LogementLocation = styled.span`
    background-color: brown;
    // color: black;
    font-size: 1rem;
`;
const LogementTags = styled.div`
    background-color: yellow;
`;
const HostWrapper = styled.div`
    background-color: blue;
`;
const HostInfos = styled.div`
    background-color: yellow;
    margin-bottom: 25px;
    display: flex;
    justify-content: flex-end;
`;
const HostName = styled.span`
    background-color: red;
    font-size: 1.5rem;
    margin-right: 10px;
    text-align: right;
    width: 100px;
`;
const HostPhoto = styled.img`
    border-radius: 50%;
    height: 64px;
    object-fit: cover;
    width: 64px;
`;
const HostNote = styled.div`
    background-color: black;
    display: flex;
    justify-content: flex-end;
    // align-items: center;
`;
const Etoile = styled.img`
    height: 30px;
    width: 30px;
`;
const DescAndEquipts = styled.div`
    background-color: orange;
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1200px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;
const Equipement = styled.li`
    // background-color: black;
    list-style: none;
`;

function Fiche() {
    /* Récupère l'objet Logement en fonction de son id' */
    const getId = useParams();
    const ficheLogement = ListeLogements.find(
        (logement) => logement.id === getId.id
    );

    /* Tags */
    const tagsLogement = ficheLogement?.tags.map((tag, index) => {
        return <Tag key={index} nom={tag} />;
    });

    /* Notes */
    let noteLogement = [];
    let etoileComplete = true;
    for (let index = 0; index < 5; index++) {
        if (index === parseInt(ficheLogement?.rating)) {
            etoileComplete = false;
        }
        if (etoileComplete === true) {
            noteLogement.push(
                <Etoile
                    key={index}
                    src={EtoilePleine}
                    alt={`${ficheLogement?.rating}/5`}
                />
            );
        } else {
            noteLogement.push(
                <Etoile
                    key={index}
                    src={EtoileVide}
                    alt={`${ficheLogement?.rating}/5`}
                />
            );
        }
    }

    /* Équipements */
    const equipementsLogement = ficheLogement?.equipments.map(
        (equipment, index) => {
            return <Equipement key={index}>{equipment}</Equipement>;
        }
    );

    return (
        <>
            {ficheLogement ? (
                <LogementContainer>
                    <Carrousel images={ficheLogement?.pictures} />

                    <LogementWrapper>
                        <LogementInfos>
                            <LogementTitre>
                                {ficheLogement?.title}
                            </LogementTitre>
                            <LogementLocation>
                                {ficheLogement?.location}
                            </LogementLocation>
                            <LogementTags>{tagsLogement}</LogementTags>
                        </LogementInfos>
                        <HostWrapper>
                            <HostInfos>
                                <HostName>{ficheLogement?.host.name}</HostName>
                                <HostPhoto
                                    src={ficheLogement?.host.picture}
                                    alt="Propriétaire"
                                />
                            </HostInfos>
                            <HostNote>{noteLogement}</HostNote>
                        </HostWrapper>
                    </LogementWrapper>
                    <DescAndEquipts>
                        <Dropdown
                            titre="Description"
                            description={ficheLogement?.description}
                        />
                        <Dropdown
                            titre="Équipements"
                            description={equipementsLogement}
                        />
                    </DescAndEquipts>
                </LogementContainer>
            ) : (
                <Navigate replace to="*" />
            )}
        </>
    );
}

export default Fiche;
