import mongoose from 'mongoose';

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTURANT"
    }).then(() => {
        console.log("Connected to db succesfully");
    }).catch(err => {
        console.log(`Some error occured while connecting to db ${err}`)
    })
}

