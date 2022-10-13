import type { NextPage } from 'next'
import { Grid, Typography, Card,CardHeader,CardContent} from '@mui/material'
import { Layout } from '../components/layouts'
import { EntryList, NewEntry } from '../components/UI'


const HomePage: NextPage = () => {

  return (
    <Layout title='Home - Open Jira'>
      <Grid container spacing={ 2 }>
        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height:'calc(100vh - 100px)'}}>
            <CardHeader title="Pendientes"/>
              {/* Agregar nueva entrada */}
              <NewEntry />
              <EntryList status='pending'/>
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height:'calc(100vh - 100px)'}}>
            <CardHeader title="Progreso"/>
            <EntryList status='in-progress'/>
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height:'calc(100vh - 100px)'}}>
            <CardHeader title="Completadas"/>
            <EntryList status='finished'/>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage
