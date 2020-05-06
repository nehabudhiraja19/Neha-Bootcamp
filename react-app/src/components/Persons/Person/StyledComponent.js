import styled from 'styled-components';

const StyledButton=styled.button`

    background-color: ${props=>props.alt ? 'red':'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      &:hover
      {
        background-color: ${props=>props.alt ? 'salmon':'yellow'};;
        color:black

      }
`;



const StyleDiv=styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid seagreen;
    box-shadow: 0 2px 3px  slateblue;
    padding: 16px;
    text-align: center;


'@media(min-width:500px)':
        {
            width:'450px'
        }
`;

export {StyledButton,StyleDiv};

