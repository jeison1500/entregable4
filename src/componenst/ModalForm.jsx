
import { useEffect } from "react"
import { useForm } from "react-hook-form"




const ModalForm = ({
  isShowModal, 
  createUser, 
  isUseerToEdit, 
  updateUser,
  resetModalForm
}) => {

  const {register, handleSubmit, reset} = useForm()

  const submit = (data) => {
    if(!data.birthday)  data.birthday = null
    if(!data.image_url)  data.image_url = null
    if(isUseerToEdit) {
      updateUser(data, reset)
        } else{
      createUser(data, reset)
    }                            
        

  }
  
  const handleCloseShowModal = () => {
    resetModalForm(reset)
  }

  useEffect(() => {
   if(isUseerToEdit) {
    reset(isUseerToEdit)
    }
  }, [isUseerToEdit])

  return (
    <section className={`fixed top-0 left-0 right-0 h-screen bg-black/40 grid place-content-center ${isShowModal ? "opacity-100 visible" : "invisible opacity-0"} transition-opacity`}>
  
    <form onSubmit={handleSubmit(submit)} className="bg-white w-[280] p-4 grid gap-6 relative">
    <h3 className="font-bold text-3xl">{isUseerToEdit ? "Editar usuario" : "Nuevo Usuario"}</h3>

    {/* nombre  */}
    <div className="grid gap-2">
      <label className="font-bold text-sm" htmlFor="">Nombre</label>
      <input placeholder="Ingresa tu nombre...." className="bg-gray-100 outline-none p-2" type="text" {...register("first_name")} />
    </div>

    {/* Apellido */}
    <div className="grid gap-2">
      <label className="font-bold text-sm" htmlFor="">Apellido</label>
      <input placeholder="Ingresa tu Apellido...." className="bg-gray-100 outline-none p-2" type="text" {...register("last_name")} />
    </div>

    {/* Email */}
    <div className="grid gap-2">
      <label className="font-bold text-sm" htmlFor="">Correo</label>
      <input placeholder="Ingresa tu Correo...." className="bg-gray-100 outline-none p-2" type="email" {...register("email")} />
    </div>

    {/* contraceña */}
    <div className="grid gap-2">
      <label className="font-bold text-sm" htmlFor="">Contraceña</label>
      <input placeholder="Ingresa tu Contraceña...." className="bg-gray-100 outline-none p-2" type="password" {...register("password")} />
    </div>

    {/* Cumpleaños  */}
    <div className="grid gap-2">
      <label className="font-bold text-sm" htmlFor="">Cumpleaños</label>
      <input placeholder="Ingresa tu Cumpleaños...." className="bg-gray-100 outline-none p-2" type="date" {...register("birthday")} />
    </div>

    {/* imagen  */}
    <div className="grid gap-2">
      <label className="font-bold text-sm" htmlFor="">Fotografia</label>
      <input placeholder="Ingresa tu Foto...." className="bg-gray-100 outline-none p-2" type="url" {...register("image_url")} />
    </div>

      <button onClick={handleCloseShowModal} type="button" className="absolute top-0 right-0 text-2xl hover:text-secondary"><i className='bx bxs-tag-x'></i></button>

    <button className="bg-primary text-white p-2">{isUseerToEdit ? "Guardar Cambios" : " Agregar Nuevo Usuario"}</button>
    </form>
    
    
    
    </section>
  )
}
export default ModalForm