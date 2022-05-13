import React, { useState } from 'react';
import fleche from '../../assets/FlecheCarrousel.png';
import styled from 'styled-components';

const CarrouselWrapper = styled.div`
    display: block;
    height: 415px;
    margin: auto auto 30px auto;
    position: relative;
    width: 100%;

    @media screen and (max-width: 1490px) {
        height: 255px;
        margin: auto auto 15px auto;
    }
`;
const CarrouselFlGauche = styled.img`
    position: absolute;
    width: 45px;
    z-index: 1;
    margin-left: 25px;
    top: 50%;
    transform: translateY(-50%) rotate(-180deg);
    &:hover {
        cursor: pointer;
        filter: drop-shadow(2px 4px 6px black);
    }

    @media screen and (max-width: 1490px) {
        width: 15px;
        margin-left: 5px;
    }
`;
const CarrouselFlDroite = styled.img`
    position: absolute;
    width: 45px;
    z-index: 1;
    margin-right: 25px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    &:hover {
        cursor: pointer;
        filter: drop-shadow(2px 4px 6px black);
    }

    @media screen and (max-width: 1490px) {
            width: 15px;
            margin-right: 5px;
`;
const CarrouselImage = styled.img`
    border-radius: 15px;
    height: 415px;
    object-fit: cover;
    display: none;
    width: 100%;
    &.active {
        display: block;
    }

    @media screen and (max-width: 1490px) {
        height: 255px;
    }
`;

function Carrousel({ images }) {
    /* Création d'un hook d'état pour gérer le Carrousel */
    let [imageEnCours, changerImage] = useState(0);
    let nombreImages = images.length;

    const prevImage = () => {
        if (imageEnCours === 0) {
            changerImage(nombreImages - 1);
        } else {
            changerImage(imageEnCours - 1);
        }
        return changerImage;
    };

    const nextImage = () => {
        if (imageEnCours === nombreImages - 1) {
            changerImage((nombreImages = 0));
        } else {
            changerImage(imageEnCours + 1);
        }
        return changerImage;
    };

    return (
        <CarrouselWrapper>
            {nombreImages > 1 && (
                <CarrouselFlGauche
                    src={fleche}
                    alt="Contenu précedént"
                    onClick={prevImage}
                />
            )}
            {images.map((image, index) => {
                return (
                    <CarrouselImage
                        key={index}
                        className={index === imageEnCours && 'active'}
                        src={image}
                        alt="Logement"
                    />
                );
            })}
            {nombreImages > 1 && (
                <CarrouselFlDroite
                    src={fleche}
                    alt="Contenu suivant"
                    onClick={nextImage}
                />
            )}
        </CarrouselWrapper>
    );
}

export default Carrousel;
