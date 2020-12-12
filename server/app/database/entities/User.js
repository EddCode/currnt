import { encrypt } from '../../helpers/hashString';

const User = (sequilize, DataType) => 
  sequilize.define('User', {
	user_id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true 
	},
	first_name: {
	    type: DataType.STRING(50),
	    allowNull: false,
	},
	last_name: {
	    type: DataType.STRING(50),
	    allowNull: false,
	},
	birthday: {
	    type: DataType.DATE,
	    allowNull: false,
	},
	password: {
	  type: DataType.STRING,
	  allowNull: false,
	  validate: {
		len: {
		  args: 3,
		  msg: 'Password must be atleast 3 characters in length'
		}
	  }
	},
  },
  {
    hooks: {
		beforeCreate: async user => 
		user.password = await encrypt(user.password)
	}	  
  }
)

export default User