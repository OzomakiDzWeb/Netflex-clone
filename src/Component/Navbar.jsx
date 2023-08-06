

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 z-[100] w-full absolute">
     <h1 className="text-red-600 text-4xl font-bold cursor-pointer">NETFLEX</h1>
     <div className="text-white">
          <button className="pr-4">Sgin In</button>
          <button className=" bg-red-600 px-6 py-2 cursor-pointer rounded">Sgin Up</button>
     </div>
    </div>
  )
}

export default Navbar