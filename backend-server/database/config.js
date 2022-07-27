const mongoose = require('mongoose')

const dbConnection = async () => {

    try {
        mongoose.connect('mongodb+srv://mean_user:WJYCVP@cluster0.1dwle.mongodb.net/hospitaldb');
        console.log('DB Online')
    } catch (error) {
        console.error(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }


}

module.exports = {
    dbConnection
}