import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, BaseEntity} from "typeorm";
import { Usuarios } from "./usuarios";
import { Restaurantes } from "./restaurantes";

@Entity('reservas')
export class Reservas extends BaseEntity{

    @PrimaryGeneratedColumn({name: 'id_reserva'})
    idReserva: number;

    @ManyToOne(() => Usuarios, (usuario) => usuario.idUsuario)
    @JoinColumn({name: 'id_usuario'})
    usuario: Usuarios;

    @ManyToOne(() => Restaurantes, (restaurante) => restaurante.idRestaurante) 
    @JoinColumn({name: 'id_restaurante'})
    restaurante: Restaurantes;

    @Column({name: 'fecha_reserva'})
    fechaReserva: Date;

    @Column({name: 'hora_reserva'})
    horaReserva: string;
    
    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;

    @Column({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;
 
}