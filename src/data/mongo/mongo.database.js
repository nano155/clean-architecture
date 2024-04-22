import mongoose from "mongoose";


export class MongoDatabase {

    static async connect(options){
        const {mongoUrl} =options;

        try {
            await mongoose.connect(mongoUrl) 
                   console.log('Conectado con exito!!!');

            return true
            
        } catch (error) {
            console.log('Mongo connection error');
            throw error
            
        }
    }

    static async disconnect(){
        await mongoose.disconnect()
    }
}