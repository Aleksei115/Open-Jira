import { FC, useContext, useMemo, DragEvent } from 'react';
import { Paper,List } from '@mui/material'
import { EntryCard } from './EntryCard'
import { EntryStatus } from '../../interfaces/entry';
import { EntriesContext } from '../../Context/Entries';
import { UIContext } from '../../Context/UI';
import styles from './EntryList.module.css'

interface Props {
  status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {

  const { entries, updatedEntry } = useContext(EntriesContext)

  const { isDragging, setIsDragging } = useContext(UIContext)

  //? Memoriza las entradas
  const entriesByStatus = useMemo(()=>( entries.filter( entry => entry.status === status) ),[entries,status]);

  const allowDrop = (event: DragEvent) => {
    event.preventDefault();
  }

  const onDropEntry = (e: DragEvent) => {
    const id = e.dataTransfer.getData('text')
    //Signo de admiracion al final le dice a TS que nunca tendra un null
    const entry = entries.find(entry => entry._id === id)!;
    
    entry.status = status
    
    updatedEntry(entry)

    setIsDragging(false)
  }

  return (
    <div
      onDrop={ onDropEntry }
      onDragOver={ allowDrop }
      className={ isDragging ? styles.dragging : "" }
    >
      <Paper sx={{ height: 'calc(100vh - 100px)',backgroundColor: 'transparent', padding: "8px"}} elevation={1}>
        {/* TODO: cambiara cuando se haga DRAG */}
        <List sx={{opacity: isDragging ? 0.3 : 1, transition: 'all .3s'}}>

          {
            entriesByStatus.map((entry)=> (<EntryCard key={entry._id} entry={entry} />))
          }


        </List>
      </Paper>
    </div>
  )
}
