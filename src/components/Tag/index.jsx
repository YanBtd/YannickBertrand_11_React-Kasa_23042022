import React from 'react';
import styled from 'styled-components';

const TagWrapper = styled.span`
    background-color: #ff6060;
    border-radius: 10px;
    color: #ffffff;
    display: inline-block;
    font-size: 14px;
    margin: auto 10px;
    min-width: 115px;
    padding: 5px 15px;
    text-align: center;
    &:first-of-type {
        margin-left: 0;
    }
`;

function Tag({ nom }) {
    return <TagWrapper className="tag">{nom}</TagWrapper>;
}

export default Tag;
