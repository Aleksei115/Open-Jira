import { FC, useEffect, useReducer } from 'react';
import { Entry, EntryStatus } from '../../interfaces';
import { entriesReducer,EntriesContext } from './';
import { v4 as uuidv4 } from 'uuid'
import { entriesApi } from '../../apis';


export interface EntriesState {
    entries: Entry[];
}

export interface ProviderProps {
    children: React.ReactNode;
}

const Entries_InitialState: EntriesState = {
    entries: []
}


export const EntriesProvider:FC<ProviderProps> = ({ children }) => {

    const [state,dispatch] = useReducer(entriesReducer, Entries_InitialState)

    const addNewEntry = async ( description: string ) => {

        try {

            const { data } = await entriesApi.post<Entry>("/entries", { description })
            
            dispatch({ type: "[Entries] - Add-Entry", payload: data})

        } catch (error) {
            
        }

    }

    const updatedEntry = async ({ _id, status, description }: Entry) => {
        try {

            const { data } = await entriesApi.put(`/entries/${_id}`, { status, description })
             
            dispatch({ type: "[Entries] - Change-Entry", payload: data})

        } catch (error) {
            
        }
        // const { data } = await entriesApi.put<Entry>("/entries/", { description })

    }

    const refreshEntries = async () => {
        const { data } = await entriesApi.get<Entry[]>('/entries')

        dispatch({ type: "[Entries] - Refresh-Data", payload: data})
    }

    useEffect(() => {
        refreshEntries()
    }, [])
    

  return (
    <EntriesContext.Provider 
        value={{
            ...state,
            addNewEntry,
            updatedEntry
        }}
    >
        { children }
    </EntriesContext.Provider>
  )
}   