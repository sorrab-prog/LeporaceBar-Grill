import styled from 'styled-components'

export const FormContainer = styled.form`
    width: 50%;
    height: auto;
    box-sizing: border-box;
    padding: 4vw;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2vw;
    background: rgba(255, 255, 255, 0.38);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
`;

export const FormGroup = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
`;

export const FormLabel = styled.label`
    width: 100%;
    height: auto;
    font-size: 2em;
    @media(max-width: 850px){
        font-size: 1em;
    }
`;

export const FormInput = styled.input`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 0.3em;
    border-radius: 5px;
    border: 0.3px solid;
    font-size: 1.5em;
    @media(max-width: 850px){
        font-size: 1em;
    }
`;

export const FormTextArea = styled.textarea`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 0.3em;
    border-radius: 5px;
    border: 0.3px solid;
    font-size: 1.5em;
    @media(max-width: 850px){
        font-size: 1em;
    }
`;

export const FormSubmit = styled.input`
    width: auto;
    height: auto;
    box-sizing: border-box;
    padding-inline: 3vw;
    padding-block: 1vw;
    border-radius: 5px;
    border: none;
    font-size: 1.5em;
    background-color: #c8a97e;
    cursor: pointer;
    transition: all ease-in-out .1s;
    &:hover {
        transform: scale3d(1.1, 1.1, 1.1);
    }
    @media(max-width: 850px){
        font-size: 1em;
    }
`;