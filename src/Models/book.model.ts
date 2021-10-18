import { Column, DataType, Table, Model } from "sequelize-typescript"

@Table
export class Book extends Model<Book>{
    @Column({
        type: DataType.STRING(60),
        allowNull: false,

    })
    Code : string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    Name : string

    @Column({
        type : DataType.DECIMAL(10,2),
        allowNull: false        
    })
    Price : number
}


