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
        res.send('<h1>Plataforma Hotel</h1><br><hr><a href="https://proyecto-segunda-evaluacion.herokuapp.com/clientes" > Ver Clientes </a><br><a href="https://proyecto-segunda-evaluacion.herokuapp.com/empleados" > Ver Empleados </a><br><a href="https://proyecto-segunda-evaluacion.herokuapp.com/habitaciones" > Ver Habitaciones </a><br><a href="https://proyecto-segunda-evaluacion.herokuapp.com/reservas" > Ver Reservas </a>')
    }
    //Mostrar
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

    //Crear
    //Habitaciones 
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
    //Empleados
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
    //Cliente
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
            const oSchema = new Clientes(pSchema)
            await oSchema.save()
            
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
    //Reservas
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
    //Buscar por DNI
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
    private getreservaDNI = async (req: Request, res: Response) => {
        const valor = req.params.valor
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Reservas.aggregate([
                {
                  $match:{"_cliente" : valor}
      
                }])
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

    }
    private getempleadoDNI = async (req: Request, res: Response) => {
        const valor = req.params.valor
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Empleado.aggregate([
                {
                  $match:{"_dni" : valor}
      
                }])
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

    }
    
    //DELETE
    //Cliente
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
    //Empleados
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
    //Habitaciones
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
    //Reservas
    private deleteReservas = async (req: Request, res: Response) => {
        const { dni } = req.params
        await db.conectarBD()
        await Reservas.findOneAndDelete(
                { _cliente: dni}
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

    //UPDATE
    //UPDATE Cliente
    private modificarCliente = async (req: Request, res: Response) => {
        //const valor = req.params.valor
        //console.log(valor)
        //const modificar = req.params.modificar
        const clientes = new Clientes(req.body)
        console.log(clientes)
        console.log(clientes)
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Clientes.findOneAndUpdate(
                {_matricula: clientes._matricula},
                {
                    _tipoObjeto: clientes._tipoObjeto,
                    _precioBase: clientes._precioBase,
                    _potenciaMotor: clientes._potenciaMotor,
                    _traccion: clientes._traccion, 
                },
                {new: true}
            )
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }
    //UPDATE Habitacion
    private modificarHabitacionb = async (req: Request, res: Response) => {
        
        const habitaciones = new Habitaciones(req.body)
        console.log(habitaciones)
        //console.log(habitaciones)
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Habitaciones.findOneAndUpdate(
                {_IdHab: habitaciones._IdHab},
                {
                    
                    _tipoObjeto: habitaciones._tipoObjeto,
                    _IdHab:habitaciones._IdHab,
                    _Camas:habitaciones._Camas,
                    _PNoche:habitaciones._PNoche,
                    _estado:habitaciones._estado,
                    _desayuno:habitaciones._desayuno
                },
                {new: true}
            )
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }
    private modificarHabitacionf = async (req: Request, res: Response) => {
        
        const habitaciones = new Habitaciones(req.body)
        console.log(habitaciones)
        //console.log(habitaciones)
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Habitaciones.findOneAndUpdate(
                {_IdHab: habitaciones._IdHab},
                {
                    
                    _tipoObjeto: habitaciones._tipoObjeto,
                    _IdHab:habitaciones._IdHab,
                    _Camas:habitaciones._Camas,
                    _PNoche:habitaciones._PNoche,
                    _estado:habitaciones._estado,
                    _supletoria:habitaciones._supletoria
                },
                {new: true}
            )
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }
    private modificarHabitacionv = async (req: Request, res: Response) => {
        
        const habitaciones = new Habitaciones(req.body)
        console.log(habitaciones)
        //console.log(habitaciones)
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Habitaciones.findOneAndUpdate(
                {_IdHab: habitaciones._IdHab},
                {
                    
                    _tipoObjeto: habitaciones._tipoObjeto,
                    _IdHab:habitaciones._IdHab,
                    _Camas:habitaciones._Camas,
                    _PNoche:habitaciones._PNoche,
                    _estado:habitaciones._estado,
                    _spa:habitaciones._spa
                },
                {new: true}
            )
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }
    //UPDATE Empleado
    private modificarEmpleadol = async (req: Request, res: Response) => {
        
        const empleado = new Empleado(req.body)
        console.log(empleado)
        //console.log(habitaciones)
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Empleado.findOneAndUpdate(
                {_dni: empleado._dni},
                {
                    
                    _dni: empleado._dni,
                    _salariosBase: empleado._salariosBase,
                    _tipoObjeto: empleado._tipoObjeto,
                    _habitaciones: empleado._habitaciones,
                },
                {new: true}
            )
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }
    private modificarEmpleadoc = async (req: Request, res: Response) => {
        
        const empleado = new Empleado(req.body)
        console.log(empleado)
        //console.log(habitaciones)
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Empleado.findOneAndUpdate(
                {_dni: empleado._dni},
                {
                    
                    _dni: empleado._dni,
                    _salariosBase: empleado._salariosBase,
                    _tipoObjeto: empleado._tipoObjeto,
                    _Titulacion:empleado._Titulacion,
                    _NEstrella: empleado._NEstrella,
                },
                {new: true}
            )
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }
    private modificarEmpleador = async (req: Request, res: Response) => {
        
        const empleado = new Empleado(req.body)
        console.log(empleado)
        
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Empleado.findOneAndUpdate(
                {_dni: empleado._dni},
                {
                    
                    _dni: empleado._dni,
                    _salariosBase: empleado._salariosBase,
                    _tipoObjeto: empleado._tipoObjeto,
                    _Nocturnidad:empleado._Nocturnidad
                },
                {new: true}
            )
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }
    //UPDATE Reservas
    private modificarReserva = async (req: Request, res: Response) => {
        
        const reserva = new Reservas(req.body)
        console.log(reserva)
        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const query  = await Reservas.findOneAndUpdate(
                {_cliente: reserva._dni},
                {
                    
                    _cliente:reserva._cliente,
                    _nDias:reserva._nDias,
                    _habitacion:reserva._habitacion,
                    _nPersonas:reserva._nPersonas,
                    _Precio:reserva._Precio,
                },
                {new: true}
            )
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }
    //UPDATE Reservas
    private modificarClienteURL = async (req: Request, res: Response) => {

        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const dni = req.params.dni
            const cambioP = req.params.cambioP
            const query  = await Clientes.findOneAndUpdate(
                {_dni: dni},
                {
                    _nTarjera: cambioP
                },
                {new: true}
            )
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }
    private modificarEstadoHabitacionURL = async (req: Request, res: Response) => {

        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const IdHab = req.params.IdHab
            const cambioP = req.params.cambioP
            const query  = await Habitaciones.findOneAndUpdate(
                {_IdHab: IdHab},
                {
                    _estado: cambioP
                },
                {new: true}
            )
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }
    private modificarSalarioEmpledoURL = async (req: Request, res: Response) => {

        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const dni = req.params.dni
            const cambioP = req.params.cambioP
            const query  = await Empleado.findOneAndUpdate(
                {_dni: dni},
                {
                    _salarioBase: cambioP
                },
                {new: true}
            )
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }
    private modificarNDiasReservaURL = async (req: Request, res: Response) => {

        await db.conectarBD()
        .then( async (mensaje) => {
            console.log(mensaje)
            const cliente = req.params.cliente
            const cambioP = req.params.cambioP
            const query  = await Reservas.findOneAndUpdate(
                {_cliente: cliente},
                {
                    _nDias: cambioP
                },
                {new: true}
            )
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })

        db.desconectarBD()
    }
    
    
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
        
        //Consultar un cliente
        this._router.get('/clientes/:valor', this.getclienteDNI)
        this._router.get('/empleado/:valor', this.getempleadoDNI)
        this._router.get('/reserva/:valor', this.getreservaDNI)
        //Modificar
       
        this._router.put('/modificarCliente', this.modificarCliente)
        this._router.put('/modificarHabitacionb', this.modificarHabitacionb)
        this._router.put('/modificarHabitacionf', this.modificarHabitacionf)
        this._router.put('/modificarHabitacionv', this.modificarHabitacionv)

        this._router.put('/modificarEmpleadoc', this.modificarEmpleadoc)
        this._router.put('/modificarEmpleadol', this.modificarEmpleadol)
        this._router.put('/modificarEmpleador', this.modificarEmpleador)
        
        this._router.put('/modificarReserva', this.modificarReserva)

        this._router.put('/modificarClienteURL/:dni/:cambioP', this.modificarClienteURL)
        this._router.put('/modificarEstadoHabitacionURL/:IdHab/:cambioP', this.modificarEstadoHabitacionURL)
        this._router.put('/modificarEstadoHabitacionURL/:dni/:cambioP', this.modificarSalarioEmpledoURL)
        this._router.put('/modificarNDiasReservaURL/:cliente/:cambioP', this.modificarNDiasReservaURL)

                
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
