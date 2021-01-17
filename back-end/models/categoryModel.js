import Sequelize from 'sequelize';
import sequelize from '../database/db.js';

const Category = sequelize.define('category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'category',
    classMethods: {}
});

export default Category;