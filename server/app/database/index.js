import Sequelize from 'sequelize'
import UserModel from './entities/User'
import GenderModel from './entities/Gender'

import {db} from '../config'

const models = {}

const options = {
  host: db.host,
  dialect: db.dialect,
  define: {
	underscored: true
  }
}

const sequelize = new Sequelize(db.name, db.user, db.pwd, options)

// Get model entities
const User = UserModel(sequelize, Sequelize.DataTypes)
const Gender = GenderModel(sequelize, Sequelize.DataTypes)

Gender.hasMany(User, {foreignKey: {
    name: 'gender_id',
    as: 'gender',
    allowNull: false
  }
})

models.sequelize = sequelize


export default models

export {
  User,
  Gender
}