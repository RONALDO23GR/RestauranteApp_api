import {Column, Entity, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity('usuarios')
export class Usuarios extends BaseEntity{

    @PrimaryGeneratedColumn({name: 'id_usuario'})
    idUsuario: number;

    @Column({name: 'nombre_completo'})
    nombreCompleto: string;

    @Column({name: 'apellido_paterno'})
    apellidoPaterno: string;

    @Column({name: 'apellido_materno'})
    apellidoMaterno: string;

    @Column({name: 'telefono'})
    telefono: number;

    @Column({name: 'correo_electronico'})
    correoElectronico: string;

    @Column({name: 'contrasena'})
    contrasena: string;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;

    @Column({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date; 
 
}