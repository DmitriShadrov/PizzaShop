import styled from "styled-components";
import { Title } from "../Styles/title";

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
`

export const FoodLadel = styled.div`
    position: absolute;
    background-color: #ffffff91;
    padding: 5px;
`

export const Food = styled(Title)`
    height: 200px;
    padding: 10px;
    font-size: 20px;
    background-image: ${({img}) => `url(${img});` }
    background-position: center;
    background-size: cover;
    filter: contrast(75%);
    border-radius: 11px;
    box-shadow: 0px 0px 15px 0px #1c1c1c;
    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }
`