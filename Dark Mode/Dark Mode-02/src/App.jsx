import { useEffect, useState } from "react";
import "./App.css";
import img from './assets/images.png'

function App() {

if(sessionStorage.getItem('themes')==='dark'){
  document.documentElement.classList.toggle('dark')
}

  const changeThimeMode = () => { 
    if(sessionStorage.getItem('themes')==='dark'){
      sessionStorage.setItem('themes','light')
      document.documentElement.classList.remove('dark')   
    }
    else{
      document.documentElement.classList.add('dark')
      sessionStorage.setItem('themes','dark')
    }
  }


 
  return (
    <>
      <div className="grid grid-cols-4 gap-5 border-solid border-2  border-black max-w-[1300px] dark:bg-gray-600 ">
        <div className="border-solid border-2   border-black col-span-full ">
          <div className="w-full flex items-center justify-between px-5 py-2 ">
            <img
              className="w-[100px] h-[50px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTOYjphL2t4JfKOXumKTO-YXZLsPb3VlEbAHNcgBPPWOaFs0Su_rkClTJi40zHL5gVpRg&usqp=CAU"
              alt=""
            />
            <span className="inline-flex items-center justify-center " onClick={changeThimeMode}>
              dark mode
            </span>
            <ul className="flex space-x-5 text-[20px] font-bold cursor-pointer">
              <li>Home</li>
              <li>Contect</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div className="border-solid border-2  border-black col-span-2 pt-10 pl-10">
          <h1 className="font-serif text-blue-700 font-semibold text-[30px] pt-3">
            HI I AM ANURAG Roy
          </h1>
          <p className="font-serif text-black font-semibold text-[20px] pt-3 ">
            {" "}
            FRONTED DEVELOPER
          </p>
          <p className="font-serif text-[15px] pt-3 pb-5 text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            est labore id saepe non repellendus recusandae exercitationem
            corrupti placeat iusto sequi vel omnis perferendis soluta cupiditate
            laudantium, sapiente quam maxime!
          </p>
        </div>
        <div className="border-solid border-2  border-black col-span-2 flex justify-center dark:text-white">
          <img
            className="w-[350px] h-[330px]"
            src={img}
            alt=""
          />
        </div>
        <div className="border-solid border-2 p-5 border-black row-span-2  text-center text-[20px] text-blue-700 font-bold ">
          Box-4
        </div>
        <div className="border-solid border-2 p-5 border-black col-span-2 text-center text-[20px] text-blue-700 font-bold">
          box-5
        </div>
        <div className="border-solid border-2 p-5 border-black  text-center text-[20px] text-blue-700 font-bold ">
          Box6
        </div>
        <div className="border-solid border-2 p-5 border-black text-center text-[20px] text-blue-700 font-bold">
          Box7
        </div>
        <div className="border-solid border-2 p-5 border-black text-center text-[20px] text-blue-700 font-bold">
          Box8
        </div>
        <div className="border-solid border-2 p-5 border-black text-center text-[20px] text-blue-700 font-bold">
          Box9
        </div>
        <div className="  h-[50px] border-solid border-2  border-black col-span-full text-center text-[20px] text-blue-700 font-bold dark:text-white">
          anuraglpu@gmail.com
        </div>
      </div>
    </>
  );
}

export default App;
