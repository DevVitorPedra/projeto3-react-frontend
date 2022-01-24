import React, { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { StyledInputContainer, StyledUserCreateForm, StyledInput, StyledFormBtn, StyledFormTitle } from '../UserCreate/Styled'

export default function UpdateUser() {

    const [success, setSuccess] = useState(null)
    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            id: '',
            name: '',
            email: ''
        },
        validationSchema: Yup.object().shape({
            id: Yup.number().required(),
            name: Yup.string(),
            email: Yup.string().email("Formato de email inválido")
        }),
        onSubmit: async ({ id, name, email }) => {

        }

    })

    return (
        <StyledUserCreateForm onSubmit={handleSubmit}>
            {(!success) ? (
                <StyledInputContainer>
                    <legend style={{ "margin-left": "30px", "color": "white" }}>Atualizar usuário</legend>
                    <label style={{ "color": "white" }}>Id</label>
                    <StyledInput
                        style={{ borderBottom: `${touched.id && errors.id ? '1px solid red' : '1px solid white'}` }}
                        onBlur={handleBlur} onChange={handleChange} values={values.id} name="id" type="text" />

                    <label style={{ "color": "white" }}>Nome</label>
                    <StyledInput
                        style={{ borderBottom: `${touched.name && errors.name ? '1px solid red' : '1px solid white'}` }}
                        onBlur={handleBlur} onChange={handleChange} values={values.name} name="name" type="text" />
                    <label style={{ "color": "white" }}>Email</label>
                    <StyledInput
                        style={{ borderBottom: `${touched.email && errors.email ? '1px solid red' : '1px solid white'}` }}
                        onBlur={handleBlur} onChange={handleChange} values={values.email} name="email" type="text" />

                    <StyledFormBtn type="submit">Atualizar</StyledFormBtn>
                </StyledInputContainer>
            ) : <StyledInputContainer>{(success.data) ? (<><StyledFormTitle>Cadastro Realizado</StyledFormTitle>
                <h3 style={{ 'color': "white" }}>Id: {success.data.message[success.data.message.length - 1].id}</h3>
                <h3 style={{ 'color': "white" }}>Nome: {success.data.message[success.data.message.length - 1].name}</h3>
                <h3 style={{ 'color': "white" }}>Email: {success.data.message[success.data.message.length - 1].email}</h3>
            </>) : <StyledFormTitle>Nome ou email incorreto</StyledFormTitle>}</StyledInputContainer>
            }
        </StyledUserCreateForm>
    )

}
