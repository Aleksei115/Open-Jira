import { FC, useReducer } from 'react';
import { uiReducer,UIContext } from './';

export interface UIState {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
}

export interface ProviderProps {
    children: React.ReactNode;
}

const UI_InitialState: UIState = {
    sideMenuOpen: false,
    isAddingEntry: false,
    isDragging: false
}


export const UIProvider:FC<ProviderProps> = ({ children }) => {

    const [state,dispatch] = useReducer(uiReducer, UI_InitialState)

    const openSideMenu = () => {
        dispatch({type:'[UI] - Open Sidebar'})
    }

    const closeSideMenu = () => {
        dispatch({type:'[UI] - Close Sidebar'})
    }

    const setIsAddingEntry = (value: boolean) => {
        dispatch({ type: '[UI] - Set isAddingEntry', payload: value})
    }

    const setIsDragging = (value: boolean) => {
        dispatch({ type: '[UI] - Toggle dragging', payload: value })
    }


  return (
    <UIContext.Provider 
        value={{
            ...state,
            openSideMenu,
            closeSideMenu,
            setIsAddingEntry,
            setIsDragging
        }}
    >
        { children }
    </UIContext.Provider>
  )
}