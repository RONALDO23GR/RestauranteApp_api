import {Column, Entity, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity('categorias')
export class Categorias extends BaseEntity{

    @PrimaryGeneratedColumn({name: 'id_categoria'})
    idCategoria: number;

    @Column({name: 'nombre'})
    nombre: string;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;

    @Column({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date; 
 
}