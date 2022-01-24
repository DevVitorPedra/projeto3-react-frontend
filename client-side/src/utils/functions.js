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