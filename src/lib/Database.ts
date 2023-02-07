import {connect, disconnect} from "mongoose";
import process from "process";


export default class Database {

    static async connect(){

        await connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/test');
    }

    static async disconnect(){
        await disconnect()
    }

};