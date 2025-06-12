import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, BaseEntity} from "typeorm";
import { Usuarios } from "./usuarios";
import { Productos } from "./productos";

@Entity('carrito')
export class Carrito extends BaseEntity{

    @PrimaryGeneratedColumn({name: 'id_carrito'})
    idCarrito: number;

    @ManyToOne(() =>Usuarios, (usuario) => usuario.idUsuario)
    @JoinColumn({name: 'id_usuario'})
    usuario: Usuarios;

    @ManyToOne(()=>Productos, (producto) => producto.idProducto)
    @JoinColumn({name: 'id_producto'})
    producto: Productos;

    @Column({name: 'cantidad'})
    cantidad: number;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;

    @Column({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date; 
 
}