import mongoose from 'mongoose';

try {
    mongoose.connect('mongodb+srv://czh1983:coder123@cluster0.rn8x13y.mongodb.net/ecommerce?retryWrites=true&w=majority');
    console.log('Data Base Ready');
} catch (error) {
    console.log(error);
}