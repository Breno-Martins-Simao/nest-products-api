import { IsNotEmpty, IsString } from "class-validator"

export class IBook {
    @IsNotEmpty({message:"The Code field cannot be empty or null"})
    @IsString({message:"Code must be a String"})
    Code:string

    @IsNotEmpty({message:"The Name field cannot be empty or null"})
    @IsString({message:"Code must be a String"})
    Name:string

    @IsNotEmpty({message:"The Price field cannot be empty or null"})
    Price:number
}