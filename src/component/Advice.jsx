import React, { useContext, useState } from 'react'
import {PiSpeakerHighFill} from 'react-icons/pi'
import {BsMoon} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'
import {BsFillDice1Fill} from 'react-icons/bs' 
import axios from 'axios'
import { AppContext } from '../App'



const Advice = () => {
    const [detail, setDetail] = useState("")
    

    
    
    const { setFont, theme, setTheme} = useContext(AppContext)
    console.log(theme);
    // console.log(font);
    let endpoint = 'https://api.adviceslip.com/advice'
    
    const get =()=>{
        axios.get(endpoint)
        .then((response)=>{
            console.log(response.data.slip);
            setDetail(response.data.slip)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
   <>
    <section  className='bg-green-100 h-screen dark:bg-black'>
        <div className='flex'>
            <div id='icon' className='text-white dark: text-light-100 mt-5'>
                <PiSpeakerHighFill/>
            </div>
            <div id='myD'>
                <select id='sect' className='dark:text-red-100' onChange={(e)=>setFont(e.target.value)}>
                    <option value="Serif">Serif</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Poppins">Poppins</option>
                    <option value="Noto Serif">Noto Serif</option>
                    <option value="Caprasimo">Caprasimo</option>
                    <option value="Calligraffitti">Calligraffitti</option>
                    <option value="Calistoga">Calistoga</option>
                </select>
            </div>
            <div className='img'>
                {
                    theme === "dark" ? <FiSun onClick={() => setTheme("light")}/> : <BsMoon onClick={() => setTheme("dark") }/>
                }
                
                
            </div>

        </div>

        <div className='bg-white shadow p-4 w-96 mx-auto mt-40 rounded-lg'>
        <h2 id='h2' className='text-center'>ADVICE #{detail?.id}</h2><br></br>
            <h2 className='text-center'>"{detail?.advice}"</h2><br></br>
            <div className='text-center'>
           <hr /><button onClick={get} className='hover:bg-blue-600 bg-violet-200 font-semibold py-2 px-4 rounded text-black mx-auto'>
                <BsFillDice1Fill/>
            </button><hr />
            </div>
        </div>

    </section>
   </>
  )
}

export default Advice