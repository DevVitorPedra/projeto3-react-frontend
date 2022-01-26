import React, { useContext, useState } from 'react'
import {  getExpensesId } from '../../../utils/functions'
import { StyledExpenseCard, StyledFormBtn, StyledInput, StyledInputContainer, StyledUserCreateForm } from '../../Styled'
import { OpenModalContext } from '../../../components/Context/OpenModalContext'
import { TempDataContext } from '../../../components/Context/TempDataContext'
import { ExpensesIdContext } from '../../../components/Context/ExpensesIdContext'

export default function ExpensesId() {
    const { modal, setModal} = useContext(OpenModalContext)
    const { Temp, setTemp} = useContext(TempDataContext)
    const { data, setData } = useContext(ExpensesIdContext)
    const [id, setId] = useState()

    const handleChange = e => {
        console.log(id, e.target.value)
        setId(e.target.value)
    }
    const handleClick = async () => {
        const result = await getExpensesId(Number(id))
        setData(result.message)
       
    }
    const handleDelete = async(userid,financeid, itemName) =>{
            setModal(1)
            setTemp([userid, financeid, itemName ])
    }
    console.log(data)
    return (
        <>
            {(!data) ?
        ( <StyledUserCreateForm >
               <StyledInputContainer>
                    <h1 style={{ "color": "white" }}>Listar Despesas</h1>
                    <StyledInput onChange={handleChange} name="id" value={id} placeholder="Pesquisar" type="text" />
                    <label style={{ "color": "white" }}>Id</label>
                    <StyledFormBtn onClick={(e) => {
                        e.preventDefault()
                        if(id===''){
                            return null
                        }
                        handleClick()
                    }}>Pesquisar</StyledFormBtn>

                </StyledInputContainer>
                </StyledUserCreateForm>
                ) : (data !== 'Request failed with status code 400') ? (
                    <>
                     <div style={{position:'relative',top:'10px',left:'0px',width:"200px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                     <StyledFormBtn onClick={()=>{
                        setData(null)
                    }}>Voltar</StyledFormBtn>
                     </div>
                      {data.map((item)=>{
                          return (
                              
                             <StyledExpenseCard key={item.id}>
                                  <p>Id: {item.id}</p>
                                  <p>Preço: R$ {item.price}</p>
                                  <p>Tipo: {item.typeofexpenses}</p>
                                  <p>Item: {item.name}</p>
                                  <button onClick={()=>handleDelete(id, item.id, item.name)} style={{"borderRadius":"12px","height":"25px", "color":"red"}}>Remover</button>
                             </StyledExpenseCard>
                          )
                      })}
                      
                    </>
                ) :  <><StyledExpenseCard><p style={{ "color": "white" }}>Sem despesas para esse usuário</p>
                    <StyledFormBtn style={{marginLeft:"30px"}} onClick={()=>{
                        setData(null)
                    }}>Voltar</StyledFormBtn>
                    </StyledExpenseCard>
                </>

            }


        </>
    )
}


//Consertar erro nda reposição do objeto data, esta ficando undefined por um instante,  