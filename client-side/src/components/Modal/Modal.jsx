import React, {useContext, useState} from 'react'

import { OpenModalContext } from '../Context/OpenModalContext'
import { TempDataContext } from '../Context/TempDataContext'
import { ExpensesIdContext } from '../Context/ExpensesIdContext'
import { deleteExpense } from '../../utils/functions'
export default function Modal(props) {
   const {modal,setModal} = useContext(OpenModalContext)
   const {temp,setTemp} = useContext(TempDataContext)
   const { data, setData } =  useContext(ExpensesIdContext)
   
    let modalStyle={
display:'block',
backgroundColor:"rgba(0, 0, 0, 0.8)"
    }
    const handleDelete = async() => {
        const result = await deleteExpense(temp[0],temp[1])
        setData(result.message.financialData)
        console.log(data)
        setTemp('Despesa excluída com sucesso')
        
    }
    return (
        
            
        <div className="modal show fade" style={modalStyle} >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Deletar</h5>
              <button onClick={()=>setModal(0)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            
              {(temp!=="Despesa excluída com sucesso")?<p>Gostaria de deletar esta despesa?</p>: <p>Despesa excluída com sucesso</p>}
      
              {(temp==='Despesa excluída com sucesso')?"Pronto":<p>{props.expense}</p>}
            </div>
            {temp!=="Despesa excluída com sucesso" ? <button className= 'btn btn-danger'   onClick={handleDelete}>Deletar</button>:null}
          </div>
        </div>
      </div>
      
    )
}