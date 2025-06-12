import {Column, Entity, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity('restaurantes')
export class Restaurantes extends BaseEntity{

    @PrimaryGeneratedColumn({name: 'id_restaurante'})
    idRestaurante: number;

    @Column({name: 'nombre'})
    nombre: string;

    @Column({name: 'descripcion'})
    descripcion: string;

    @Column({name: 'direccion'})
    direccion: string;

    @Column({name: 'telefono'})
    telefono: number;

    @Column({name: 'horario_atencion'})
    horarioAtencion: string;

    @Column({name: 'correo_contacto'})
    correoContacto: string;

    @Column({name: 'estado_restaurante'})
    estadoRestaurante: string;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;

    @Column({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;

 
}