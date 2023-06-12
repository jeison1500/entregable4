import Users2 from "./Users2"


const UserlList = ({user, deleteUser, changeShowModal, setIsUseerToEdit}) => {
  return (
    <section className="grid gap-6 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1024px] mx-auto">
    
    {
        user.map((usuario) => <Users2
        key={usuario.id} 
        usuario={usuario} 
        deleteUser={deleteUser} 
        changeShowModal={changeShowModal} 
        setIsUseerToEdit={setIsUseerToEdit} />)
      }

    </section>
  )
}
export default UserlList