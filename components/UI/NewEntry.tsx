import { useState, ChangeEvent,useContext } from 'react'
import { Button, Box, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/AddCircleOutline';
import { EntriesContext } from '../../Context/Entries';
import { UIContext } from '../../Context/UI';
import entriesApi from '../../apis/entriesApi';

export const NewEntry = () => {

    const { addNewEntry } = useContext(EntriesContext)
    const { isAddingEntry, setIsAddingEntry } = useContext(UIContext)

    const [formData, setFormData] = useState('')
    const [touched, setTouched] = useState(false)

    const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(e.target.value)
    }

    const onSave = () =>{
        if( formData.length === 0) return
        addNewEntry(formData)
        setFormData('')
        setTouched(false)
        setIsAddingEntry(false)

    }

  return (
    <Box sx={{ marginBottom: '15px', paddingX: '15px' }}>
        {
            isAddingEntry ?
                    <>
                        <TextField
                            fullWidth
                            sx={{ marginTop: 2, marginBottom: 1}}
                            autoFocus
                            multiline
                            label="New Entry"
                            helperText={formData.length <= 0 && touched && 'Ingrese un valor'}
                            error={ formData.length <= 0 && touched}
                            value={formData}
                            onChange={handleChangeForm}
                            onBlur={ () => { setTouched(true) } }
                        >

                        </TextField>

                        <Box display='flex' justifyContent="space-between">
                            <Button
                                variant="text"
                                onClick={()=>{ setIsAddingEntry(false); setTouched(false); setFormData('')}}
                            >
                                Cancelar
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                endIcon={ <SaveIcon />}
                                onClick={onSave}
                            >
                                Guardar
                            </Button>
                        </Box>  
                    </>
                    :
                    <Button
                        startIcon={ <AddIcon />}
                        fullWidth
                        variant='outlined'
                        onClick={()=> setIsAddingEntry(true)}
                    >
                        Agregar Tarea
                    </Button>
        }
    </Box>
  )
}
