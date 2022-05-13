import React, { useState } from 'react';
import fleche from '../../assets/FlecheDropdown.svg';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
    border-radius: 5px;
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
    width: 100%;

    @media screen and (min-width: 1200px) {
        width: 48%;

        &.full {
            width: 100%;
        }
    }
`;
const DropdownHeader = styled.div`
    background-color: #ff6060;
    border-radius: 5px;
    display: flex;
    align-items: center;
`;
const DropdownTitle = styled.div`
    color: #ffffff;
    height: 40px;
    // width: 100%;
    background-color: black;
    display: flex;
    align-items: center;
`;
const DropdownLink = styled.a`
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    width: 100%;
    &.${true} {
        justify-content: flex-start;
        transform: rotate(180deg);
    }
`;

const DropdownContent = styled.div`
    background-color: #f6f6f6;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #ff6060;
    margin-top: -10px;
    min-height: 100px;
    padding: 25px 10px 10px 10px;
`;

function Dropdown({ fullWidth, titre, description }) {
    /* Création d'un hook d'état pour gérer le Dropdown */
    const [dropdown, setDropdown] = useState(false);

    return (
        <DropdownWrapper className={`${fullWidth}`} id={`dropdown-${titre}`}>
            <DropdownHeader>
                <DropdownTitle>{titre}</DropdownTitle>
                <DropdownLink
                    className={`${dropdown}`}
                    href={`#dropdown-${titre}`}
                    onClick={() => setDropdown(!dropdown)}
                >
                    <img src={fleche} alt="Ouvrir cette liste" />
                </DropdownLink>
            </DropdownHeader>
            {
                /* Quand le state est à TRUE alors on affiche la description */
                dropdown && <DropdownContent>{description}</DropdownContent>
            }
        </DropdownWrapper>
    );
}

export default Dropdown;
