import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #d0ecec;
  border-radius: 10px;
  margin: 10px;
  border: 3px solid black;
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
transition:all 0.3s ease;
font-size:15px;
margin:10px;


:hover{
    opacity:0.8;
}


button{
font-weight:bold;
    cursor:pointer;
    user-select:none;
    width:100%;
    height:60px;
    margin 5px 0;
    background: ${({ correct, userClicked }: ButtonWrapperProps) =>
      correct ? "#6FD132" : !correct && userClicked ? "red" : "lightgrey"};
  

border-radius:10px;
border:solid 5px black;

}
`;

export const Quest = styled.div`
  background-color: #250f5b;
  border-radius: 10px;
  margin: 10px;
  color: white;
  box-shadow: 0 0 20px #cb30ae;
  border: 2px solid;
`;
