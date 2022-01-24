import React, { useState, useReducer } from 'react'
import { StyledFormBtn, StyledFormTitle, StyledInput, StyledInputContainer, StyledUserCreateForm } from './Styled';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { createUser } from '../../utils/functions';
export default function UserCreate() {

    const [success, setSuccess] = useState(null)
    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues:{
            name:'',
            email:''
        },
        validationSchema:Yup.object().shape({
            name:Yup.string().required('Nome é obrigatório e apenas letras'),
            email:Yup.string().email("Formato de email inválido").required("Email é obrigatório")
        }),
        onSubmit: async ({name, email})=>{
            const data =  await createUser(name, email)
           setSuccess(data)
        }
        
    })
    
    return (
       <StyledUserCreateForm onSubmit={handleSubmit}>
          { (!success)?(              
           <StyledInputContainer>
            <legend style={{"marginLeft":"30px", "color":"white", "fontSize":"25px"}}>Adicionar usuario</legend>
            <label style={{"color":"white"}}>Nome</label>
            <StyledInput
                style={{ borderBottom: `${touched.name && errors.name ? '1px solid red' : '1px solid white'}` }}
                onBlur={handleBlur} onChange={handleChange} values={values.name} name="name" type="text"  />
                <label  style={{"color":"white"}}>Email</label>
            <StyledInput
                style={{ borderBottom: `${touched.email && errors.email ? '1px solid red' : '1px solid white'}` }}
                onBlur={handleBlur} onChange={handleChange} values={values.email} name="email" type="text"  />
           
            <StyledFormBtn type="submit">Adicionar</StyledFormBtn>
           </StyledInputContainer>
          ): <StyledInputContainer>{(success.data) ? (<><StyledFormTitle>Cadastro Realizado</StyledFormTitle>
            <h3 style={{'color':"white"}}>Id: {success.data.message[success.data.message.length-1].id}</h3>
            <h3 style={{'color':"white"}}>Nome: {success.data.message[success.data.message.length-1].name}</h3>
            <h3 style={{'color':"white"}}>Email: {success.data.message[success.data.message.length-1].email}</h3>
          </>):<StyledFormTitle>Nome ou email incorreto</StyledFormTitle>}</StyledInputContainer>
}
       </StyledUserCreateForm>
    )
}
