import mongoose from "mongoose";
mongoose.set('strictQuery', false)
const URI = 'mongodb+srv://czh1983:coder123@cluster0.rn8x13y.mongodb.net/?retryWrites=true&w=majority';

try {
    await mongoose.connect(URI)
   console.log('conectado a la base de datos con exito -ecommerce-')  
 } catch (error) {
   console.log(error)
 }