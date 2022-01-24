import React, { useState } from 'react'
import { RiHqLine } from 'react-icons/ri'
import { getUser } from '../../utils/functions'
import { StyledFormBtn, StyledInput, StyledInputContainer, StyledUserCreateForm } from '../UserCreate/Styled'

export default function FindUser() {

    const [data, setData] = useState()
    const [id, setId] = useState('')

    const handleChange = value => {

        setId(value)
    }
    const handleClick = async () => {
        const result = await getUser(id)
        setData(result)
        console.log(data)
    }

    return (
        <StyledUserCreateForm >
            {(!data) ?
                (<StyledInputContainer>
                    <h1 style={{ "color": "white" }}>Procurar Usuário</h1>
                    <label style={{ "color": "white" }}>Id</label>
                    <StyledInput onChange={(e) => handleChange(e.target.value)} name="id" value={id} placeholder="Pesquisar" type="text" />
                    <StyledFormBtn onClick={(e) => {
                        e.preventDefault()
                        if(id===''){
                            return null
                        }
                        handleClick()
                    }}>Pesquisar</StyledFormBtn>

                </StyledInputContainer>) : (data.message !== 'Request failed with status code 400') ? (
                    <>
                        <h1 style={{ "color": "white" }} >{data.message.name}</h1>
                        <h1 style={{ "color": "white" }}>{data.message.email}</h1>
                        <StyledFormBtn onClick={()=>{
                        setData(null)
                    }}>Voltar</StyledFormBtn>
                    </>
                ) :  <><h1 style={{ "color": "white" }}>Usuário inexistente</h1>
                    <StyledFormBtn onClick={()=>{
                        setData(null)
                    }}>Voltar</StyledFormBtn>
                </>

            }


        </StyledUserCreateForm>
    )
}
