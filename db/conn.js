const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('thoughts', 'postgres', 'larissa', {
    dialect: 'postgres', 
    host: 'localhost',
    port: 5432, 
});


try {
    sequelize.authenticate(); 
    console.log('Modelos sincronizados com o banco de dados.');
} catch (error) {
    console.error('Erro ao sincronizar modelos com o banco de dados:', error);
    return;
}


module.exports = sequelize;