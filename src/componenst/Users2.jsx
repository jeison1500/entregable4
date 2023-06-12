const Users2 = ({usuario, deleteUser, changeShowModal, setIsUseerToEdit}) => {
  
  const handleClickDelete = () => {
    deleteUser(usuario.id)
  }

  const handleClickEdit = () => {
    changeShowModal()
    setIsUseerToEdit(usuario)
  }


  return (
    <section className="border-gray-200 border-2 p-3">
      
          
      <h4 className="text-xl ">{usuario.first_name} {usuario.last_name}</h4>
      <div className="border-gray-200 border-t-2 mt-4">
        <h5 className="mt-6 text-gray-200">CORREO</h5>
        <span>{usuario.email}</span>
      </div>
      <div>
        <h5 className="mt-6 text-gray-200">CUMPLEAÑOS</h5>
        <span><i className='bx bxs-gift'></i>  {usuario.birthday || "Fecha no Suministrada"}</span>
      </div>
      <div className="border-gray-200 border-t-2 mt-4">
        <h5 className="mt-6">FOTO <i className='bx bxs-camera'></i></h5>
        <img src={usuario.image_url} alt="Imagen no Proporcionada" />
      </div>

        
        <button className="bg-secondary  text-white text-xl rounded p-2 ml-36 " onClick={handleClickDelete}><i className='bx bx-trash' ></i></button>
        <button className="text-xl rounded p-2 bg-slate-300 m-4  " onClick={handleClickEdit}><i className='bx bx-pencil'></i></button>
        

    </section>
  )
}
export default Users2