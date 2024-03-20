import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize'
import ItensPedido from './ItensPedido'
import sequelize from '../db/db'

class Pedido extends Model<InferAttributes<Pedido>, InferCreationAttributes<Pedido>> {
    declare id: number;
    declare data_pedido: Date;
    declare status: string;
}

Pedido.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    data_pedido: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
  }, {
    sequelize
  })

Pedido.hasMany(
  ItensPedido,
  {
      foreignKey: {
          name: 'id_pedido',
          allowNull: false
      }
  }
)

export default Pedido