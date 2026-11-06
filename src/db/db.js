import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb+srv://mintu1coc_db_user:Zgpuky6Aa1pNIzvT@learn.ylqddn6.mongodb.net/learn');

        console.log('Connected to DB')
    } catch (error) {
        console.error('Error connecting to DB:', error);
    }
}

export default connectDB;