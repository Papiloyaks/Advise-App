import { createContext, useEffect, useState } from "react"
import Advice from "./component/Advice"



export const AppContext = createContext("")
function App() {
  const [font, setFont] = useState("Serif")
  const [theme, setTheme] = useState("light")



  useEffect(() => {
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }
    
  }, [theme])
  
  return (
    <>
    <AppContext.Provider value={{font, setFont, theme, setTheme}}>
      <div className={`${font === "Serif" ? "font-[Serif]" : font === "Montserrat" ? "font-[Montserrat]" : font === "Poppins" ? "font-[Poppins]" : font === "Noto Serif" ? "font-[Noto Serif]" : font === "Caprasimo" ? "font-[Caprasimo]" : font=== "Calligraffitti" ? "font-[Calligraffitti]" : "font-[Calistoga]"}`}>

      <Advice/>
      </div>
    </AppContext.Provider>
    </>
  )
}

export default App
