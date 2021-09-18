const mongoose = require('mongoose');

const dbConection = async() => {
    try {
        //El modificador await  junto el async hace que esta parte tenga prioridad, y que aunque tarde se le esperará
        await mongoose.connect(process.env.DBCONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            /*useCreateIndex: true
            useFindAndModify: false*/
        });

        console.log('Base de datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la base de datos');
    }
}

module.exports = { dbConection };