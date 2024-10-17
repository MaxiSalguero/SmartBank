import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({
  name: "appointments",
})
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  date: string;

  @Column({ length: 100 })
  time: string;

  @Column({ default: "active" })
  status: string;

  @Column({ length: 100 })
  description: string;

  @ManyToOne(() => User, (user) => user.appointments)
  user: User;
}
