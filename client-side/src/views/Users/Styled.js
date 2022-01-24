import styled from "styled-components";

export const StyledUsersCardAdd = styled.div`

    transition:all 0.5s ease;
    width:150px;
    height:170px;
    font-size:28px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    border-radius:20px;
    background-color:rgba(255,255,255,0.2);
    box-shadow:0px 0px 15px 5px white;
    &:hover{
        
    font-size:30px;
        background-color:rgba(0,0,0,0.8);
        color:rgba(255,255,255,1);
        box-shadow:0px 0px 30px 10px black;
    }
`
export const StyledUsersCardFind = styled.div`
    width:120px;
    font-size:20px;
    height:170px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    border-radius:20px;
    background-color:rgba(255,255,255,0.2);
    box-shadow:0px 0px 15px 5px white;
    &:hover{
        background-color:rgba(255,255,255,0.5);
        color:rgba(0,0,255,1);
        box-shadow:0px 0px 30px 10px white;
    }
`