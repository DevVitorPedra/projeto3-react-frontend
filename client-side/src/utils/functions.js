import axios from 'axios'
export const createUser = async (name, email)=>{
   
    const body ={
        "name":name,
        "email":email
    }
console.log(name, email)
       
            const url = "https://warm-inlet-55774.herokuapp.com/api/users"
          const result = await axios.post(url,body).then((response)=>{
              console.log(response)
              
                        return response
            }).catch((error)=>{
                console.log(error)
                return error.message
            })
            return result
        
}
export const getUser = async (id) =>{


    const url = `https://warm-inlet-55774.herokuapp.com/api/users/${id}`
    const result = await axios.get(url).then((response)=>{
        console.log(response.data)
                  return response.data
      }).catch((error)=>{
          console.log(error.message)
          return error
      })
      return result

}
export const updateUser = async (id, body)=>{
    const reqBody = body
    const url = `https://warm-inlet-55774.herokuapp.com/api/users/${id}`
    const result = await axios.patch(url,reqBody).then((response)=>{
        console.log(response.data)
                  return response
      }).catch((error)=>{
          console.log(error.message)
          return error
      })
      return result

}
export const getExpensesId = async (id) => {
   
    const url = `https://warm-inlet-55774.herokuapp.com/api/finance/ids/${id}`
    const result = await axios.get(url).then((response)=>{
        console.log(response.data)
                  return response.data
      }).catch((error)=>{
          console.log(error.message)
          return error
      })
      return result
    }
    export const deleteExpense = async(userid,financeid) => {
        const url = `https://warm-inlet-55774.herokuapp.com/api/finance/${userid}/${financeid}`
        const result = await axios.delete(url).then((response)=>{
            console.log(response.data)
                      return response.data
          }).catch((error)=>{
              console.log(error.message)
              return error
          })
          return result 
    }