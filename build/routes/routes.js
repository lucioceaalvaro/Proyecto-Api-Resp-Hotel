"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const HabiSchema_1 = require("../Schema/HabiSchema");
const EmpSchema_1 = require("../Schema/EmpSchema");
const ResSchema_1 = require("../Schema/ResSchema");
const CliSchema_1 = require("../Schema/CliSchema");
const database_1 = require("../database/database");
class DatoRoutes {
    constructor() {
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send('Hotel');
        });
        this.getHabitaciones = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield HabiSchema_1.Habitaciones.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.getClientes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield CliSchema_1.Clientes.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.getEmpleados = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield EmpSchema_1.Empleado.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.getReservas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield ResSchema_1.Reservas.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.postHabitacionb = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { tipoObjeto, idHab, camas, pnoche, estado, desayuno } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: tipoObjeto,
                _IdHab: idHab,
                _Camas: camas,
                _PNoche: pnoche,
                _estado: estado,
                _desayuno: desayuno
            };
            const oSchema = new HabiSchema_1.Habitaciones(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.postHabitacionf = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { tipoObjeto, idHab, camas, pnoche, estado, supletonia } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: tipoObjeto,
                _IdHab: idHab,
                _Camas: camas,
                _PNoche: pnoche,
                _estado: estado,
                _supletonia: supletonia,
            };
            const oSchema = new HabiSchema_1.Habitaciones(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.postHabitacionv = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { tipoObjeto, idHab, camas, pnoche, estado, spa } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: tipoObjeto,
                _IdHab: idHab,
                _Camas: camas,
                _PNoche: pnoche,
                _estado: estado,
                _spa: spa
            };
            const oSchema = new HabiSchema_1.Habitaciones(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.postEmpleador = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { tipoObjeto, dni, salarioBase, nocturnidad } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: tipoObjeto,
                _dni: dni,
                _salarioBase: salarioBase,
                _nocturnidad: nocturnidad
            };
            const oSchema = new EmpSchema_1.Empleado(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.postEmpleadol = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { tipoObjeto, dni, salarioBase, habitaciones } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: tipoObjeto,
                _dni: dni,
                _salarioBase: salarioBase,
                _habitationes: habitaciones
            };
            const oSchema = new EmpSchema_1.Empleado(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.postEmpleadoc = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { tipoObjeto, dni, salarioBase, NEstrellas, Titulacion } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: tipoObjeto,
                _dni: dni,
                _salarioBase: salarioBase,
                _NEstrellas: NEstrellas,
                _Titulacion: Titulacion
            };
            const oSchema = new EmpSchema_1.Empleado(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.postEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { tipo, dni, salarioBase, titulacion, Nestrellas, habitaciones, nocturnidad } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: tipo,
                _dni: dni,
                _salarioBase: salarioBase,
                _Titulacion: titulacion,
                _NEstrella: Nestrellas,
                _habitationes: habitaciones,
                _Nocturnidad: nocturnidad,
            };
            const oSchema = new EmpSchema_1.Empleado(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.postCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const cliente = new CliSchema_1.Clientes(req.body);
            console.log(cliente);
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                let pSchema;
                pSchema.save();
                pSchema = new CliSchema_1.Clientes({
                    _dni: cliente._dni,
                    _nombre: cliente._nombre,
                    _nTarjeta: cliente._nTarjeta
                });
                console.log(mensaje);
                yield cliente.save()
                    .then((doc) => res.send("documento salvado " + doc))
                    .catch((err) => res.send(err));
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
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
        });
        this.postReservas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { clientes, nDias, habitacion, nPersonas, precio } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _clientes: clientes,
                _nDias: nDias,
                _habitacion: habitacion,
                _nPersonas: nPersonas,
                _precio: precio
            };
            const oSchema = new ResSchema_1.Reservas(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.getclienteDNI = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.valor;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield CliSchema_1.Clientes.aggregate([
                    {
                        $match: { "_dni": valor }
                    }
                ]);
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.getreserva = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.valor;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield ResSchema_1.Reservas.aggregate([
                    {
                        $match: { "_dni": valor }
                    }
                ]);
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.deleteCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni } = req.params;
            yield database_1.db.conectarBD();
            yield CliSchema_1.Clientes.findOneAndDelete({ _dni: dni })
                .then((doc) => {
                if (doc == null) {
                    res.send(`No encontrado`);
                }
                else {
                    res.send('Borrado correcto: ' + doc);
                }
            })
                .catch((err) => res.send('Error: ' + err));
            database_1.db.desconectarBD();
        });
        this.deleteEmpleados = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni } = req.params;
            yield database_1.db.conectarBD();
            yield EmpSchema_1.Empleado.findOneAndDelete({ _dni: dni })
                .then((doc) => {
                if (doc == null) {
                    res.send(`No encontrado`);
                }
                else {
                    res.send('Borrado correcto: ' + doc);
                }
            })
                .catch((err) => res.send('Error: ' + err));
            database_1.db.desconectarBD();
        });
        this.deleteHabitaciones = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { IdHab } = req.params;
            yield database_1.db.conectarBD();
            yield HabiSchema_1.Habitaciones.findOneAndDelete({ _IdHab: IdHab })
                .then((doc) => {
                if (doc == null) {
                    res.send(`No encontrado`);
                }
                else {
                    res.send('Borrado correcto: ' + doc);
                }
            })
                .catch((err) => res.send('Error: ' + err));
            database_1.db.desconectarBD();
        });
        this.deleteReservas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni } = req.params;
            yield database_1.db.conectarBD();
            yield ResSchema_1.Reservas.findOneAndDelete({ _dni: dni })
                .then((doc) => {
                if (doc == null) {
                    res.send(`No encontrado`);
                }
                else {
                    res.send('Borrado correcto: ' + doc);
                }
            })
                .catch((err) => res.send('Error: ' + err));
            database_1.db.desconectarBD();
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
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
    misRutas() {
        this._router.get('/', this.index);
        //GET
        this._router.get('/habitaciones', this.getHabitaciones);
        this._router.get('/clientes', this.getClientes);
        this._router.get('/empleados', this.getEmpleados);
        this._router.get('/reservas', this.getReservas);
        //POST
        this._router.post('/Chabitacionb', this.postHabitacionb);
        this._router.post('/Chabitacionf', this.postHabitacionf);
        this._router.post('/Chabitacionv', this.postHabitacionv);
        this._router.post('/Cempleador', this.postEmpleador);
        this._router.post('/Cempleadol', this.postEmpleadol);
        this._router.post('/Cempleadoc', this.postEmpleadoc);
        this._router.post('/Ccliente', this.postCliente);
        this._router.post('/Creserva', this.postReservas);
        //AÑADIR
        //this._router.post('/crearcliente', this.)
        //Consultar un cliente
        this._router.get('/clientes/:valor', this.getclienteDNI);
        this._router.get('/reserva/:valor', this.getreserva);
        //Crear
        // this._router.put('/modificar', this.modificarAuto)
        // this._router.put('/mod/:matriculaP/:cambioP', this.modificarAuto2)
        // this._router.delete('/auto/:matricula', this.deleteAutos)
        //this._router.put('/autos/:matriculax/:cambio', this.updatePm)
        //UPDATE
        //DELETE
        this._router.delete('/deleteCliente/:dni', this.deleteCliente);
        this._router.delete('/deleteEmpleado/:dni', this.deleteEmpleados);
        this._router.delete('/deleteHabitaciones/:IdHab', this.deleteHabitaciones);
        this._router.delete('/deleteReservas/:dni', this.deleteReservas);
    }
}
const obj = new DatoRoutes();
obj.misRutas();
exports.routes = obj.router;
