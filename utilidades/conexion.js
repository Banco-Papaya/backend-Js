const mongoose = require('mongoose')

module.exports = () => {
    try {
        mongoose.connect(process.env.DATABASE_URL, 
            { 
                useNewUrlParser: true, 
                useUnifiedTopology: true, 
                useCreateIndex: true,
                useFindAndModify: false
            });
            console.log('Conexión exitosa a la base de datos');
        mongoose.connection.on('error', () => {
            console.error(`unable to connect to database`);
        });       
    } catch (e) {
        console.error(e)
    }
}