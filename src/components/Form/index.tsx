import React from 'react'
import { FormContainer, FormGroup, FormLabel, FormInput, FormSubmit, FormTextArea } from './styles'
import InputMask from "react-input-mask"

function Form() {
  return (
    <FormContainer>
        <FormGroup>
            <FormLabel>
                Seu nome:
            </FormLabel>
            <FormInput
            type="text"
            />
        </FormGroup>
        <FormGroup>
            <FormLabel>
                Seu CPF:
            </FormLabel>
            <InputMask
            mask="999.999.999-99"
            style={{
                width: '100%',
                height: 'auto',
                boxSizing: 'border-box',
                padding: '1vw',
                borderRadius: '5px',
                border: '0.3px solid',
                fontSize: '1em',
            }}
            />
        </FormGroup>
        <FormGroup>
            <FormLabel>
                Tamanho da Reserva:
            </FormLabel>
            <FormInput
            type="number"
            />
        </FormGroup>
        <FormGroup>
            <FormLabel>
                Observações
            </FormLabel>
            <FormTextArea
            rows={5}
            />
        </FormGroup>
        <FormGroup>
            <FormSubmit
            type="submit"
            />
        </FormGroup>
    </FormContainer>
  )
}

export default Form