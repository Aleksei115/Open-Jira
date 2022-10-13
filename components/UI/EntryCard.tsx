import { FC, DragEvent, useContext } from 'react';
import { Card, CardContent, CardActionArea, Typography,CardActions } from '@mui/material';
import { Entry } from '../../interfaces';
import { UIContext } from '../../Context/UI';

interface Props {
    entry: Entry
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const { setIsDragging } = useContext(UIContext)

    const onDragStart = (e: DragEvent) => {
        
        e.dataTransfer.setData('text', entry._id);
        setIsDragging(true)
        //todo modificar la UI con el drag mediante el context
    }

    const onDragEnd = () =>{
        //todo: aqui se cierra el drag
        setIsDragging(false)
    }

    const dateCard = new Date(entry.createdAt).getMilliseconds()
    

    // const timeCreated = new Date(Math.abs(dateCard - Date.now())).getMinutes();  
    const timeCreated = new Date(entry.createdAt).getMinutes()
  return (
    <Card
        sx={{
            marginBottom: 1
        }}
        //Eventos Drag
        draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{ whiteSpace: 'pre-line'}}>{entry.description}</Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'flex-end', padding:'10px'}}>
                <Typography variant='body2'>hace {timeCreated} min</Typography>
            </CardActions>

        </CardActionArea>
    </Card>
  )
}
