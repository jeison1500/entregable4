import axios from 'axios'
import './App.css'
import Header from './componenst/Header'
import ModalForm from './componenst/ModalForm'
import { useEffect, useState } from 'react'
import UserlList from './componenst/UserlList'
import swal from 'sweetalert'




const BASE_URL = "https://users-crud.academlo.tech"

const DEFAULT_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
  image_url: ""
}



function App() {
  const [isUseerToEdit, setIsUseerToEdit] = useState(null)
  const [isShowModal, setIsShowModal] = useState(false)
  const [user, setUser] = useState([])


  

  const changeShowModal = () => setIsShowModal(!isShowModal)    


  const getAllUsers = () => {
    const url = BASE_URL + "/users/"

    axios.get(url)
      .then(({ data }) => setUser(data))        
      .catch((err) => console.log(err))
      
  }

  const createUser = (data, reset) => {
    const url = BASE_URL + "/users/"

    axios.post(url, data)
      .then(() => {
        getAllUsers()
        swal({
          title: 'Usuario Creado con exito!',
          icon: 'success',
          button: 'Aceptar'
        })
       
      resetModalForm(reset)
      
      })
      .catch((err) => 
      swal({
        title: 'No se Pudo Crear el Usuario!',
        icon: 'error',
        button: 'Aceptar'
      }))
  
      
  }

  const deleteUser = (id) => {
    const url = BASE_URL + `/users/${id}/`

    axios.delete(url)
      .then(() => {
       getAllUsers()
       swal({
        title: 'Usuario Eliminado Satisfactoriamente!',
        icon: 'success',
        button: 'Aceptar'})
      
      })
  
      .catch((err) => 
      swal({
        title: 'Usuario! No Eliminado',
        icon: 'error',
        button: 'Aceptar'
      }))
  }


    const updateUser = (data, reset) => {
      const url = BASE_URL + `/users/${isUseerToEdit.id}/`

      axios.patch(url, data)
        .then(() => 
          getAllUsers(),
          resetModalForm(reset),
          swal({
            title: 'Usuario Actualizado con Exito',
            icon: 'success',
            button: 'Aceptar'})
        )
        .catch((err) => 
        swal({
          title: 'Usuario! No Eliminado',
          icon: 'error',
          button: 'Aceptar'
        }))
    }





    const resetModalForm = (reset) => {
      setIsShowModal(false)
      reset(DEFAULT_VALUES)
      setIsUseerToEdit(null)
      
    }

  useEffect(() => {
    getAllUsers()
  }, [])





  return <main className='font ["Roboto"]'>

     
    <Header changeShowModal={changeShowModal} />

    <ModalForm 
    isShowModal={isShowModal} 
    createUser={createUser} 
    isUseerToEdit={isUseerToEdit}
    updateUser={updateUser}
    resetModalForm={resetModalForm}
    />

    <UserlList user={user} 
    deleteUser={deleteUser} 
    changeShowModal={changeShowModal} 
    setIsUseerToEdit={setIsUseerToEdit} />

    

  </main>

}

export default App