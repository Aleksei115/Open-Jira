import { createContext } from 'react';
import { Entry,EntryStatus } from '../../interfaces';


interface ContextProps {
    entries: Entry[]; // TODO: Falta el tipo de dato del arreglo

    // Methods
    addNewEntry: (description: string) => void,
    updatedEntry: (entry: Entry) => void
}

export const EntriesContext = createContext({} as ContextProps)