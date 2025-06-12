import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, BaseEntity} from "typeorm";
import { Categorias } from "./categorias";
import { Restaurantes } from "./restaurantes";

@Entity('productos')
export class Productos extends BaseEntity{

    @PrimaryGeneratedColumn({name: 'id_producto'})
    idProducto: number;

    @Column({name: 'nombre'})
    nombre: string;

    @Column({name: 'descripcion'})
    descripcion: string;

    @Column({name: 'precio'})
    precio: number;

    @ManyToOne(() =>Categorias,(categorias) => categorias.idCategoria)
    @JoinColumn({name: 'id_categoria'})
    categorias: Categorias;

    @ManyToOne(() => Restaurantes,(restaurante) =>restaurante.idRestaurante)
    @JoinColumn({name: 'id_restaurante'})
    restaurante: Restaurantes;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: string;

    @Column({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date; 
 
}
