import React,{createContext,useContext,useState} from 'react'

const StateContext = createContext()

const initialState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setscreenSize] = useState(undefined)
    const [themeSettings, setThemeSettings] = useState(false)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')

    // setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}

    const setMode = (e)=>{
setCurrentMode(e.target.value)

localStorage.setItem('themeMode', e.target.value)
setThemeSettings(false)
    }

    const setColor = (color)=>{
        setCurrentColor(color)

        localStorage.setItem('colorMode', color)
        setThemeSettings(false)
            }

    const handleClick = (title,yes) => {
     setIsClicked({...initialState,[title]:yes})
    }

    return (
       <StateContext.Provider value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setscreenSize,
        themeSettings, 
        setThemeSettings,
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        setMode,
        setColor,
        initialState
       }}>
        {children}
       </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)