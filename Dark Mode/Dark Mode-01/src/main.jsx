import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />
 
)



// import { useEffect, useState } from "react";
// import "./App.css";
// import img from './assets/images.png';

// function App() {
//   const [Theme, setTheme] = useState(null);

//   useEffect(() => {
//     const savedTheme = sessionStorage.getItem("theme");
//     if (savedTheme) {
//       console.log("upr")
//       setTheme(savedTheme);
//     } else {
//       console.log("niche")
//       const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
//       setTheme(preferredTheme);
//       sessionStorage.setItem("theme", preferredTheme);
//     }
//   }, []);

//   useEffect(() => {
//     if (Theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     sessionStorage.setItem("theme", Theme);
//   }, [Theme]);

//   const changeThemeMode = () => {
//     setTheme(Theme === "dark" ? "light" : "dark");
//   };
//   const removeThemeFromStorage = () => {
//     localStorage.removeItem("Theme");
//     console.log("logout")
//     setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); // reset to system preference
//   };

//   return (
//     <>
//       <div className="grid grid-cols-4 gap-5 border-solid border-2 border-black max-w-[1300px] dark:bg-gray-600">
//         <div className="border-solid border-2 border-black col-span-full">
//           <div className="w-full flex items-center justify-between px-5 py-2">
//             <img
//               className="w-[100px] h-[50px]"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTOYjphL2t4JfKOXumKTO-YXZLsPb3VlEbAHNcgBPPWOaFs0Su_rkClTJi40zHL5gVpRg&usqp=CAU"
//               alt=""
//             />
//             <span className="inline-flex items-center justify-center" onClick={changeThemeMode}>
//               dark mode
//             </span>
//             <span className="inline-flex items-center justify-center" onClick={removeThemeFromStorage}>
//               logout
//             </span>
//             <ul className="flex space-x-5 text-[20px] font-bold cursor-pointer">
//               <li>Home</li>
//               <li>Contact</li>
//               <li>Blog</li>
//             </ul>
//           </div>
//         </div>
//         <div className="border-solid border-2 border-black col-span-2 pt-10 pl-10">
//           <h1 className="font-serif text-blue-700 font-semibold text-[30px] pt-3">
//             HI I AM ANURAG Roy
//           </h1>
//           <p className="font-serif text-black font-semibold text-[20px] pt-3">
//             FRONTEND DEVELOPER
//           </p>
//           <p className="font-serif text-[15px] pt-3 pb-5 text-gray-600">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
//             est labore id saepe non repellendus recusandae exercitationem
//             corrupti placeat iusto sequi vel omnis perferendis soluta cupiditate
//             laudantium, sapiente quam maxime!
//           </p>
//         </div>
//         <div className="border-solid border-2 border-black col-span-2 flex justify-center dark:text-white">
//           <img
//             className="w-[350px] h-[330px]"
//             src={img}
//             alt=""
//           />
//         </div>
//         <div className="border-solid border-2 p-5 border-black row-span-2 text-center text-[20px] text-blue-700 font-bold">
//           Box-4
//         </div>
//         <div className="border-solid border-2 p-5 border-black col-span-2 text-center text-[20px] text-blue-700 font-bold">
//           Box-5
//         </div>
//         <div className="border-solid border-2 p-5 border-black text-center text-[20px] text-blue-700 font-bold">
//           Box-6
//         </div>
//         <div className="border-solid border-2 p-5 border-black text-center text-[20px] text-blue-700 font-bold">
//           Box-7
//         </div>
//         <div className="border-solid border-2 p-5 border-black text-center text-[20px] text-blue-700 font-bold">
//           Box-8
//         </div>
//         <div className="border-solid border-2 p-5 border-black text-center text-[20px] text-blue-700 font-bold">
//           Box-9
//         </div>
//         <div className="h-[50px] border-solid border-2 border-black col-span-full text-center text-[20px] text-blue-700 font-bold dark:text-white">
//           anuraglpu@gmail.com
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;


// if(localStorage.getItem('themes')==='dark'){
//     document.documentElement.classList.add('dark')
//   }
//   else{
//     document.documentElement.classList.remove('dark')
//   }
  
  
   
  
  
//     const changeThimeMode = () => {
//       // setThems(Theme === "dark"? "light" : "dark");
//       if(localStorage.getItem('themes')==='dark'){
//         localStorage.setItem('themes','light')
//         document.documentElement.classList.remove('dark')
        
//       }
//       else{
//         document.documentElement.classList.add('dark')
//         localStorage.setItem('themes','dark')
//       }
//     }