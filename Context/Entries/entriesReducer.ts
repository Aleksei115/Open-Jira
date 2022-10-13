import { EntriesState } from './';
import { Entry, EntryStatus } from '../../interfaces';



type EntriesActionType = 
| { type: '[Entries] - Add-Entry', payload: Entry}
| { type: '[Entries] - Change-Entry', payload: Entry}
| { type: '[Entries] - Refresh-Data', payload: Entry[]}

export const entriesReducer = ( state: EntriesState, action: EntriesActionType ):EntriesState => {

    switch (action.type) {
        case '[Entries] - Add-Entry':
            return{
                ...state,
                entries: [...state.entries, action.payload]
            }
        case '[Entries] - Change-Entry':

            return{
                ...state,
                entries: state.entries.map((entry)=>{
                    if(entry._id === action.payload._id){
                        entry.status = action.payload.status
                    }
                    return entry     
                })
            }
        
        case '[Entries] - Refresh-Data':
            return{
               ...state,
               entries: [...action.payload ]
            }

        default:
            return state;
    }
}