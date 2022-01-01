import {Request, Response, Router } from 'express'

import { Habitaciones,tHabitaciones } from '../Schema/HabiSchema'
import {Empleado, tEmpleado} from '../Schema/EmpSchema'
import { Reservas, tReservas } from '../Schema/ResSchema';
import { Clientes, Iclientes } from '../Schema/CliSchema';
import { db } from '../database/database'
import { Cliente } from '../clases/Cliente';

class DatoRoutes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router(){
        return this._router
    }
    private index= async (req: Request, res: Response) => {
        res.send('Hotel')
    }
    private getHabitaciones = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Habitaciones.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }
    private getClientes = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Clientes.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }
    private getEmpleados = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Empleado.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }
    private getReservas = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Reservas.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }
    private postHabitacionb = async (req: Request, res: Response) => {
        const { tipoObjeto,idHab,camas,pnoche,estado,desayuno} = req.body
        await db.conectarBD()
        const dSchema={
            _tipoObjeto:tipoObjeto,
            _IdHab:idHab,
            _Camas:camas,
            _PNoche:pnoche,
            _estado:estado,
            _desayuno:desayuno
            
            
        }
        const oSchema = new Habitaciones(dSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }
    private postHabitacionf = async (req: Request, res: Response) => {
        const { tipoObjeto,idHab,camas,pnoche,estado,supletonia} = req.body
        await db.conectarBD()
        const dSchema={
            _tipoObjeto:tipoObjeto,
            _IdHab:idHab,
            _Camas:camas,
            _PNoche:pnoche,
            _estado:estado,
            _supletonia:supletonia,
        }
        const oSchema = new Habitaciones(dSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }
    private postHabitacionv = async (req: Request, res: Response) => {
        const { tipoObjeto,idHab,camas,pnoche,estado,spa } = req.body
        await db.conectarBD()
        const dSchema={
            _tipoObjeto:tipoObjeto,
            _IdHab:idHab,
            _Camas:camas,
            _PNoche:pnoche,
            _estado:estado,
            _spa:spa
        }
        const oSchema = new Habitaciones(dSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }
    private postEmpleador = async (req: Request, res: Response) => {
        const { tipoObjeto,dni,salarioBase,nocturnidad} = req.body
        await db.conectarBD()
        const dSchema={
            _tipoObjeto:tipoObjeto,
            _dni: dni,
            _salarioBase:salarioBase,
            _nocturnidad:nocturnidad
        }
        const oSchema = new Empleado(dSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }
    private postEmpleadol = async (req: Request, res: Response) => {
        const { tipoObjeto,dni,salarioBase,habitaciones} = req.body
        await db.conectarBD()
        const dSchema={
            _tipoObjeto:tipoObjeto,
            _dni: dni,
            _salarioBase:salarioBase,
            _habitationes:habitaciones
        }
        const oSchema = new Empleado(dSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }
    private postEmpleadoc = async (req: Request, res: Response) => {
        const { tipoObjeto,dni,salarioBase,NEstrellas,Titulacion} = req.body
        await db.conectarBD()
        const dSchema={
            _tipoObjeto:tipoObjeto,
            _dni: dni,
            _salarioBase:salarioBase,
            _NEstrellas:NEstrellas,
            _Titulacion:Titulacion
        }
        const oSchema = new Empleado(dSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }
    private postEmpleado = async (req: Request, res: Response) => {
        const {tipo,dni,salarioBase,titulacion,Nestrellas,habitaciones,nocturnidad} = req.body
        await db.conectarBD()
        const dSchema={
           _tipoObjeto:tipo,
           _dni:dni,
           _salarioBase:salarioBase,
           _Titulacion:titulacion,
           _NEstrella:Nestrellas,
           _habitationes:habitaciones,
           _Nocturnidad:nocturnidad,
        }
        const oSchema = new Empleado(dSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }
    private postCliente = async (req: Request, res: Response) => {
        const cliente = new Clientes(req.body)
        console.log(cliente)
        await db.conectarBD()
        .then( async (mensaje) => {
            let pSchema : any

            
            pSchema.save()
            pSchema = new Clientes({
                _dni:cliente._dni,
                _nombre:cliente._nombre,
                _nTarjeta:cliente._nTarjeta
                
                
            })

            console.log(mensaje)
            
            await cliente.save()
            .then ((doc:any) => res.send("documento salvado "+doc))
            .catch((err:any) => res.send(err))
        })

        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
        // const {dni,nombre,nTarjeta} = req.body
        // await db.conectarBD()
        // const dSchema={
        //     _dni: dni,
        //     _nombre: nombre,
        //     nTarjeta: nTarjeta
        // }
        // const oSchema = new Clientes(dSchema)
        // await oSchema.save()
        //     .then( (doc: any) => res.send(doc))
        //     .catch( (err: any) => res.send('Error: '+ err)) 
        // await db.desconectarBD()
    }
    private postReservas = async (req: Request, res: Response) => {
        const {clientes,nDias,habitacion,nPersonas,precio} = req.body
        await db.conectarBD()
        const dSchema={
            _clientes: clientes,
            _nDias: nDias,
            _habitacion:habitacion,
            _nPersonas: nPersonas,
            _precio: precio   
        }
        const oSchema = new Reservas(dSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }

    private getclienteDNI = async (req: Request, res: Response) => {
        const valor = req.params.valor
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Clientes.aggregate([
                {
                  $match:{"_dni" : valor}
      
                }])
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

    }
    private getreserva = async (req: Request, res: Response) => {
        const valor = req.params.valor
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Reservas.aggregate([
                {
                  $match:{"_dni" : valor}
      
                }])
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

    }

    
    private deleteCliente = async (req: Request, res: Response) => {
        const { dni } = req.params
        await db.conectarBD()
        await Clientes.findOneAndDelete(
                { _dni: dni}
            )
            .then( (doc: any) => {
                    if (doc == null) {
                        res.send(`No encontrado`)
                    }else {
                        res.send('Borrado correcto: '+ doc)
                    }
            })
            .catch( (err: any) => res.send('Error: '+ err)) 
        db.desconectarBD()
    }
    private deleteEmpleados = async (req: Request, res: Response) => {
        const { dni } = req.params
        await db.conectarBD()
        await Empleado.findOneAndDelete(
                { _dni: dni}
            )
            .then( (doc: any) => {
                    if (doc == null) {
                        res.send(`No encontrado`)
                    }else {
                        res.send('Borrado correcto: '+ doc)
                    }
            })
            .catch( (err: any) => res.send('Error: '+ err)) 
        db.desconectarBD()
    }
    private deleteHabitaciones = async (req: Request, res: Response) => {
        const { IdHab } = req.params
        await db.conectarBD()
        await Habitaciones.findOneAndDelete(
                { _IdHab: IdHab}
            )
            .then( (doc: any) => {
                    if (doc == null) {
                        res.send(`No encontrado`)
                    }else {
                        res.send('Borrado correcto: '+ doc)
                    }
            })
            .catch( (err: any) => res.send('Error: '+ err)) 
        db.desconectarBD()
    }
    private deleteReservas = async (req: Request, res: Response) => {
        const { dni } = req.params
        await db.conectarBD()
        await Reservas.findOneAndDelete(
                { _dni: dni}
            )
            .then( (doc: any) => {
                    if (doc == null) {
                        res.send(`No encontrado`)
                    }else {
                        res.send('Borrado correcto: '+ doc)
                    }
            })
            .catch( (err: any) => res.send('Error: '+ err)) 
        db.desconectarBD()
    }

    // private modificarAuto = async (req: Request, res: Response) => {
    //     //const valor = req.params.valor
    //     //console.log(valor)
    //     //const modificar = req.params.modificar
    //     const auto = new Autos(req.body)
    //     console.log(auto)
    //     console.log(auto)
    //     await db.conectarBD()
    //     .then( async (mensaje) => {
    //         console.log(mensaje)
    //         const query  = await Autos.findOneAndUpdate(
    //             {_matricula: auto._matricula},
    //             {
    //                 _tipoObjeto: auto._tipoObjeto,
    //                 _precioBase: auto._precioBase,
    //                 _potenciaMotor: auto._potenciaMotor,
    //                 _traccion: auto._traccion, 
    //             },
    //             {new: true}
    //         )
    //         res.json(query)
    //     })
    //     .catch((mensaje) => {
    //         res.send(mensaje)
    //     })

    //     db.desconectarBD()
    // }

    // private modificarAuto2 = async (req: Request, res: Response) => {

    //     await db.conectarBD()
    //     .then( async (mensaje) => {
    //         console.log(mensaje)
    //         const matriculaP = req.params.matriculaP
    //         const cambioP = req.params.cambioP
    //         const query  = await Autos.findOneAndUpdate(
    //             {_matricula: matriculaP},
    //             {
    //                 _potenciaMotor: cambioP
    //             },
    //             {new: true}
    //         )
    //         res.json(query)
    //     })
    //     .catch((mensaje) => {
    //         res.send(mensaje)
    //     })

    //     db.desconectarBD()
    // }
    // private deleteAutos = async (req: Request, res: Response) => {
    //     const matricula =req.params.matricula
    //     await db.conectarBD()

    //     await Autos.findOneAndDelete(
    //         {
    //             _matricula: matricula
    //         }
    //     )
    //     .then((doc:any)=>res.send("Ha ido bien"+doc))
    //     .catch((err:any)=> res.send("Error: "+err))
    //     await db.desconectarBD()
    //}
//     private updatePm = async (req: Request, res: Response) => {
//         await db.conectarBD() 
//             .then(async (mensaje) => {
//                 //let cambio: number = 0
//                 const {matriculax, cambio} = req.params
//                 console.log(mensaje)
//                 const query = await Autos.findOneAndUpdate(
//                     {_matricula: matriculax}, {_potenciaMotor: cambio}
//                 )
//         res.json(query)
//     })
//     .catch((mensaje) => {
//     res.send(mensaje)
//     })

//      db.desconectarBD()
//     }



    misRutas(){
        this._router.get('/',this.index)
        //GET

        this._router.get('/habitaciones', this.getHabitaciones)
        this._router.get('/clientes', this.getClientes)
        this._router.get('/empleados', this.getEmpleados)
        this._router.get('/reservas', this.getReservas)
        //POST
        this._router.post('/Chabitacionb', this.postHabitacionb)
        this._router.post('/Chabitacionf', this.postHabitacionf)
        this._router.post('/Chabitacionv', this.postHabitacionv)
        this._router.post('/Cempleador', this.postEmpleador)
        this._router.post('/Cempleadol', this.postEmpleadol)
        this._router.post('/Cempleadoc', this.postEmpleadoc)
        this._router.post('/Ccliente', this.postCliente)
        this._router.post('/Creserva', this.postReservas)
        //AÑADIR
        //this._router.post('/crearcliente', this.)
        //Consultar un cliente
        this._router.get('/clientes/:valor', this.getclienteDNI)
        this._router.get('/reserva/:valor', this.getreserva)
        //Crear
       
        // this._router.put('/modificar', this.modificarAuto)
        // this._router.put('/mod/:matriculaP/:cambioP', this.modificarAuto2)
        // this._router.delete('/auto/:matricula', this.deleteAutos)
        //this._router.put('/autos/:matriculax/:cambio', this.updatePm)
        //UPDATE
        
        //DELETE
        this._router.delete('/deleteCliente/:dni', this.deleteCliente)
        this._router.delete('/deleteEmpleado/:dni', this.deleteEmpleados)
        this._router.delete('/deleteHabitaciones/:IdHab', this.deleteHabitaciones)
        this._router.delete('/deleteReservas/:dni', this.deleteReservas)

        
    }

}

const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router
