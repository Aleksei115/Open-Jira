import { FC, useContext} from 'react';
import { Drawer,Box,List,ListItem, ListItemIcon,ListItemText, Divider} from '@mui/material'
import Typography from '@mui/material/Typography';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { UIContext } from '../../Context/UI/';

const menuItems: string[] = ['Inbox','Starred','Send Email', 'Drafts'] 

export const Sidebar: FC = () => {

    const { sideMenuOpen, closeSideMenu } = useContext(UIContext)

  return (
    <Drawer
        anchor='left'
        open={sideMenuOpen}
        onClose={closeSideMenu}
    >
        <Box sx={{width: 250}}>
            <Box sx={{padding:'5px 10px'}}>
                <Typography variant='h4'>Menu</Typography>
            </Box>
            
            <Divider /> 

            <List>
                {
                    menuItems.map((item,i)=>{
                        return(
                            <ListItem button key={item}>
                                <ListItemIcon>
                                    { i % 2 ? <MoveToInboxIcon/> : <EmailOutlinedIcon/>}
                                </ListItemIcon>
                                <ListItemText primary={ item }/>
                            </ListItem>
                        )
                    })
                }
            </List>
        </Box>
    </Drawer>
  )
}
