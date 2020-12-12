const Gender = (sequilize, DataType) => 
  sequilize.define('Gender', {
	gender_id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true 
	},
	name: {
	  type: DataType.STRING,
	  allowNull: false,
	}
})

export default Gender