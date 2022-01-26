import React, { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { StyledInputContainer, StyledUserCreateForm, StyledInput, StyledFormBtn, StyledFormTitle } from '../../Styled'
import { updateUser } from '../../../utils/functions'

export default function UpdateUser() {

    const [success, setSuccess] = useState(null)
    const [info, setInfo] = useState(null)
    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            id: '',
            name: '',
            email: ''
        },
        validationSchema: Yup.object().shape({
            id: Yup.number().required(),
            name: Yup.string(),
            email: Yup.string().email()
        }),
        onSubmit: async ({ id, name, email }) => {
            let body
            if(name && email){
                body = {
                    "name":name,
                    "email":email
                }
            }else if(name && !email){
                body = {
                    "name":name
                }
            }else if( !name && email){
                body = {
                    "email":email
                }
            }else{
                return "campos vazios"
            }
            const result = await updateUser(id, body)
            setSuccess(result)

        }
    
    })

    return (
        <StyledUserCreateForm onSubmit={handleSubmit} style={{"gap":"5px"}}>
            {(!success) ? (
                <StyledInputContainer style={{"gap":"5px"}}>
                    <h1 style={{ "color": "white" }}>Atualizar Usuário</h1>
                    <StyledInput
                        style={{ borderBottom: `${touched.id && errors.id ? '1px solid red' : '1px solid white'}` }}
                        onBlur={handleBlur} onChange={handleChange} values={values.id} name="id" type="text" />

                    <label style={{ "color": "white" }}>Id</label>
                    <StyledInput
                        style={{ borderBottom: `${touched.name && errors.name ? '1px solid red' : '1px solid white'}` }}
                        onBlur={handleBlur} onChange={handleChange} values={values.name} name="name" type="text" />
                    <label style={{ "color": "white" }}>Nome</label>
                    <StyledInput
                        style={{ borderBottom: `${touched.email && errors.email ? '1px solid red' : '1px solid white'}` }}
                        onBlur={handleBlur} onChange={handleChange} values={values.email} name="email" type="text" />
                    <label style={{ "color": "white" }}>Email</label>

                    <StyledFormBtn type="submit">Atualizar</StyledFormBtn>
                </StyledInputContainer>
            ) : <StyledInputContainer>{(success.data) ? (<><StyledFormTitle>Atualização Realizada</StyledFormTitle>
                
            </>) : <StyledFormTitle>{info}</StyledFormTitle>}</StyledInputContainer>
            }
        </StyledUserCreateForm>
    )

}
