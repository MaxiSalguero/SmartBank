import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({
    name: "credentials"
})
export class Credential {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length:30 })
    username: string 

    @Column({ length:30 })
    password: string 

}