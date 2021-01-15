import Sequelize from 'sequelize';

import sequelize from '../database/db.js';

/* Creamos nuestro modelo de posts con el tipo de 
datos requerido y su llave primaria para poder identificar
cada operación univocamente */

const Post = sequelize.define('post', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    content: Sequelize.TEXT('long'),
    image: Sequelize.STRING,
    category: Sequelize.STRING,
    date: Sequelize.DATEONLY,

},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'post',
    classMethods: {}
});

export default Post;