import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize'
import sequelize from '../db/db'

class ItensPedido extends Model<InferAttributes<ItensPedido>, InferCreationAttributes<ItensPedido>> {
    declare id: number;
    declare quantidade: number;
    declare preco_unitario: number;
}

ItensPedido.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    preco_unitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    }
  }, {
    sequelize
  })

export default ItensPedido