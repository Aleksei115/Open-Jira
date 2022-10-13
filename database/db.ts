//moongoose odm object data modeling
import mongoose from 'mongoose';

/*
    * 0 = disconnected
    * 1 = connected
    * 2 = connecting
    * 3 = diconnecting
*/

const mongooConection = {
    isConected: 0
}

export const connect =async () => {
    if(mongooConection.isConected == 1){
        console.log("Ya estabamos conectados");
        return;
    }

    if(mongoose.connections.length > 0){

        mongooConection.isConected = mongoose.connections[0].readyState

        if(mongooConection.isConected == 1){
            console.log("Usando conexión anterior");
        }

        await mongoose.disconnect()
    }

    try {
        await mongoose.connect( process.env.MONGO_URL || '')
    
        mongooConection.isConected = 1;

        console.log("Conectado a mongo", process.env.MONGO_URL);
        
    } catch (error) {
        await mongoose.disconnect()

        console.log(error);
    }

}

export const disconnect =async () => {

    if(process.env.NODE_ENV == 'development') return

    if( mongooConection.isConected == 0) return;

    await mongoose.disconnect();
    console.log("Desconectado de mongo");
}