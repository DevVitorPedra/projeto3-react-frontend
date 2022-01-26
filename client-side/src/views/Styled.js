import styled from "styled-components";

export const StyledUserCreateForm = styled.form`
border-radius:20px;
font-size:15px;
box-shadow:0px 0px 15px 5px white;
    width: 400px;
    height: 400px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:20px;
    background-color:rgba(0,0,0,0.5);
`
export const StyledInputContainer = styled.fieldset`
        border:none;    
        border-radius:20px;
        width: 300px;
        height: 300px;
        display:flex;
        gap:20px;
        justify-content:center;
        align-items:center;
        padding:20px;
        flex-direction:column;
        background-color:rgba(255,255,255,0.1);
`
export const StyledFormTitle = styled.h2`
        color:white;
        font-size: 25px;
`
export const StyledInput = styled.input`
    width:90%;
    height:15px;
    
    @media(min-width:600px){
          font-size:18px;
          height:25px;
          }
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom:0.7px solid white;
    background: transparent;
    color:white;
    :focus{
      outline:none;
      border-bottom:2px solid white;
    }
    text-align:center;
`
export const StyledFormBtn = styled.button`
    width:100px;
    height:35px;
    background-color:rgba(0,0,255,0.5);
    color:white;
    border-radius:12px;
    &:hover{
        transform:scale(1.2);
        cursor:pointer;
        color:blueviolet;
        background-color:white;
        font-weight:bold;
    }
`
export const StyledExpenseCard = styled.div`
color:white;
padding:20px;
    width:200px;
    height:auto;
    border-radius:12px;
    display:flex;
    flex-direction:column;
    font-size:16px;
    background-color:rgba(0,0,0,0.7);


`