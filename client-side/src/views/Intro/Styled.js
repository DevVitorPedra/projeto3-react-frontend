import styled from "styled-components";
export const StyledIntroBg = styled.div`
    width:100vw;
    height:200px;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const StyledLogo = styled.div`
background-color:transparent;
width:250px;
height:250px;
color:white;
display:flex;
align-items:center;
flex-direction:column;
padding:20px;

gap:20px;
    border-radius:20px;
    background-color:rgba(0,0,0,0.2);
    box-shadow:0px 0px 20px 5px white;
    animation: roll-in-left 1.6s ease-out both;
    
    @keyframes roll-in-left {
  0% {
    -webkit-transform: translateX(-800px) rotate(-540deg);
            transform: translateX(-800px) rotate(-540deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
}

`