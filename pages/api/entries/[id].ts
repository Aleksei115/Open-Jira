import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';
import { db } from '../../../database';
import { EntryModel, IEntry } from '../../../models';


type Data = 
| { message: string }
| IEntry

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id } = req.query
    
    //Para todas las validaciones
    if( !mongoose.isValidObjectId(id) ) return res.status(400).json({ message: 'ID incorrect!' })
    
    switch(req.method){

        case 'PUT':
            return updateEntry(req,res)
        case 'GET':
            return getEntryById(req,res)

        default:
            return res.status(400).json({ message: 'Bad Request!' })
    }

}

const getEntryById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { id } = req.query

    try {

        await db.connect()

        const entry = await EntryModel.findById<IEntry>(id)

        await db.disconnect()

        if( !entry )
            return res.status(400).json({ message: "Entry doesn't exists" })

        return res.status(200).json( entry! )

    } catch (error) {

        await db.disconnect()
        
        return res.status(400).json({ message: "Entry doesn't exists" })
    }

}


const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { id } = req.query

    try {
        await db.connect()
    
        const entryToUpdate = await EntryModel.findById(id)!
    
        if(entryToUpdate === null || entryToUpdate === undefined) {
            await db.disconnect()

            return res.status(400).json({ message: "Bad Request!, ID doesn't exists" })
        }

        const { 
            description = entryToUpdate!.description, 
            status = entryToUpdate!.status
        } = req.body 

        //runValidators: true, revisa que lo nuevo que mandamos obdezca al modelo previo creado
        //new: true Regresa la data actualizada 
        
        try {
            const updatedEntry = await EntryModel.findByIdAndUpdate(id, { description, status }, { runValidators: true, new: true })
            
            await db.disconnect()
            
            return res.status(200).json(updatedEntry!)
            
        } catch (error: any) {

            await db.disconnect()

            return res.status(400).json({ message: error.errors.status.message })
        }

        
        
    } catch (error) {
        await db.disconnect()

        console.log(error);         //Ya que esta en el backend

        return res.status(500).json({ message: 'Check the server!' })
    }


}