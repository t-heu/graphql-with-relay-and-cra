import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int", { default: 0 })
  count: number;

  @Column("text")
  email: string;

  @Column("text")
  password: string;
}
