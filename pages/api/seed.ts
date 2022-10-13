import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedData } from '../../database'
import { EntryModel } from '../../models'

//! seed es solo para desarrollo 

// Funcion para purgar la BD

type Data = {
    message: string
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    
    if( process.env.NODE_ENV === 'production'){
        return res.status(401).json({ message: 'Access Denied!'})
    }

    await db.connect()

    await EntryModel.deleteMany();      //Borrará todo lo que hay en la colección de Entries

    await EntryModel.insertMany(seedData.entries)

    await db.disconnect()
    
    res.status(200).json({ message: 'Successful process' })
}