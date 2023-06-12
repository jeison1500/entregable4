const Header = ({changeShowModal}) => {

  const handleClickShowModal = () => {
    changeShowModal()
  }


  return (
    <section className="flex justify-between items-center p-4">
      <h1 className="font-bold text-2xl">Usuarios</h1>
        <button onClick={handleClickShowModal} className="bg-primary text-white p-2"><i className='bx bxs-user-plus'></i> Crear nuevo usuario</button>

    </section>
  )
}
export default Header