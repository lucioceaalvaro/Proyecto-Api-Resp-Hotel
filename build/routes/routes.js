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
const eCocina_1 = require("../src/clases/subclases/eCocina");
const eRecepcion_1 = require("../clases/subclases/eRecepcion");
const eLimpieza_1 = require("../src/clases/subclases/eLimpieza");
class DatoRoutes {
    constructor() {
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send('<h1>Plataforma Hotel</h1><br><hr><a href="https://proyecto-segunda-evaluacion.herokuapp.com/clientes" > Ver Clientes </a><br><a href="https://proyecto-segunda-evaluacion.herokuapp.com/empleados" > Ver Empleados </a><br><a href="https://proyecto-segunda-evaluacion.herokuapp.com/habitaciones" > Ver Habitaciones </a><br><a href="https://proyecto-segunda-evaluacion.herokuapp.com/reservas" > Ver Reservas </a>');
        });
        //Mostrar
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
        //Crear
        //Habitaciones 
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
        //Empleados
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
            const { tipoObjeto, dni, salarioBase, Titulacion, NEstrellas } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _tipoObjeto: tipoObjeto,
                _dni: dni,
                _salarioBase: salarioBase,
                _Titulacion: Titulacion,
                _NEstrella: NEstrellas
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
        //Cliente
        this.postCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni, nombre, nTarjeta } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _dni: dni,
                _nombre: nombre,
                _nTarjeta: nTarjeta
            };
            const oSchema = new CliSchema_1.Clientes(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
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
        //Reservas
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
        //Buscar por DNI
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
        this.getreservaDNI = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.valor;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield ResSchema_1.Reservas.aggregate([
                    {
                        $match: { "_cliente": valor }
                    }
                ]);
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
        });
        this.getempleadoDNI = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const valor = req.params.valor;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield EmpSchema_1.Empleado.aggregate([
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
        //DELETE
        //Cliente
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
        //Empleados
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
        //Habitaciones
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
        //Reservas
        this.deleteReservas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { dni } = req.params;
            yield database_1.db.conectarBD();
            yield ResSchema_1.Reservas.findOneAndDelete({ _cliente: dni })
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
        //UPDATE
        //UPDATE Cliente
        this.modificarCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //const valor = req.params.valor
            //console.log(valor)
            //const modificar = req.params.modificar
            const clientes = new CliSchema_1.Clientes(req.body);
            console.log(clientes);
            console.log(clientes);
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield CliSchema_1.Clientes.findOneAndUpdate({ _matricula: clientes._matricula }, {
                    _tipoObjeto: clientes._tipoObjeto,
                    _precioBase: clientes._precioBase,
                    _potenciaMotor: clientes._potenciaMotor,
                    _traccion: clientes._traccion,
                }, { new: true });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        //UPDATE Habitacion
        this.modificarHabitacionb = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const habitaciones = new HabiSchema_1.Habitaciones(req.body);
            console.log(habitaciones);
            //console.log(habitaciones)
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield HabiSchema_1.Habitaciones.findOneAndUpdate({ _IdHab: habitaciones._IdHab }, {
                    _tipoObjeto: habitaciones._tipoObjeto,
                    _IdHab: habitaciones._IdHab,
                    _Camas: habitaciones._Camas,
                    _PNoche: habitaciones._PNoche,
                    _estado: habitaciones._estado,
                    _desayuno: habitaciones._desayuno
                }, { new: true });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.modificarHabitacionf = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const habitaciones = new HabiSchema_1.Habitaciones(req.body);
            console.log(habitaciones);
            //console.log(habitaciones)
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield HabiSchema_1.Habitaciones.findOneAndUpdate({ _IdHab: habitaciones._IdHab }, {
                    _tipoObjeto: habitaciones._tipoObjeto,
                    _IdHab: habitaciones._IdHab,
                    _Camas: habitaciones._Camas,
                    _PNoche: habitaciones._PNoche,
                    _estado: habitaciones._estado,
                    _supletoria: habitaciones._supletoria
                }, { new: true });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.modificarHabitacionv = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const habitaciones = new HabiSchema_1.Habitaciones(req.body);
            console.log(habitaciones);
            //console.log(habitaciones)
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield HabiSchema_1.Habitaciones.findOneAndUpdate({ _IdHab: habitaciones._IdHab }, {
                    _tipoObjeto: habitaciones._tipoObjeto,
                    _IdHab: habitaciones._IdHab,
                    _Camas: habitaciones._Camas,
                    _PNoche: habitaciones._PNoche,
                    _estado: habitaciones._estado,
                    _spa: habitaciones._spa
                }, { new: true });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        //UPDATE Empleado
        this.modificarEmpleadol = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const empleado = new EmpSchema_1.Empleado(req.body);
            console.log(empleado);
            //console.log(habitaciones)
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield EmpSchema_1.Empleado.findOneAndUpdate({ _dni: empleado._dni }, {
                    _dni: empleado._dni,
                    _salariosBase: empleado._salariosBase,
                    _tipoObjeto: empleado._tipoObjeto,
                    _habitaciones: empleado._habitaciones,
                }, { new: true });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.modificarEmpleadoc = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const empleado = new EmpSchema_1.Empleado(req.body);
            console.log(empleado);
            //console.log(habitaciones)
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield EmpSchema_1.Empleado.findOneAndUpdate({ _dni: empleado._dni }, {
                    _dni: empleado._dni,
                    _salariosBase: empleado._salariosBase,
                    _tipoObjeto: empleado._tipoObjeto,
                    _Titulacion: empleado._Titulacion,
                    _NEstrella: empleado._NEstrella,
                }, { new: true });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.modificarEmpleador = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const empleado = new EmpSchema_1.Empleado(req.body);
            console.log(empleado);
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield EmpSchema_1.Empleado.findOneAndUpdate({ _dni: empleado._dni }, {
                    _dni: empleado._dni,
                    _salariosBase: empleado._salariosBase,
                    _tipoObjeto: empleado._tipoObjeto,
                    _Nocturnidad: empleado._Nocturnidad
                }, { new: true });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        //UPDATE Reservas
        this.modificarReserva = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const reserva = new ResSchema_1.Reservas(req.body);
            console.log(reserva);
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield ResSchema_1.Reservas.findOneAndUpdate({ _cliente: reserva._dni }, {
                    _cliente: reserva._cliente,
                    _nDias: reserva._nDias,
                    _habitacion: reserva._habitacion,
                    _nPersonas: reserva._nPersonas,
                    _Precio: reserva._Precio,
                }, { new: true });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        //UPDATE Reservas
        this.modificarClienteURL = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const dni = req.params.dni;
                const cambioP = req.params.cambioP;
                const query = yield CliSchema_1.Clientes.findOneAndUpdate({ _dni: dni }, {
                    _nTarjera: cambioP
                }, { new: true });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.modificarEstadoHabitacionURL = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const IdHab = req.params.IdHab;
                const cambioP = req.params.cambioP;
                const query = yield HabiSchema_1.Habitaciones.findOneAndUpdate({ _IdHab: IdHab }, {
                    _estado: cambioP
                }, { new: true });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.modificarSalarioEmpledoURL = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const dni = req.params.dni;
                const cambioP = req.params.cambioP;
                const query = yield EmpSchema_1.Empleado.findOneAndUpdate({ _dni: dni }, {
                    _salarioBase: cambioP
                }, { new: true });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.modificarNDiasReservaURL = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const cliente = req.params.cliente;
                const cambioP = req.params.cambioP;
                const query = yield ResSchema_1.Reservas.findOneAndUpdate({ _cliente: cliente }, {
                    _nDias: cambioP
                }, { new: true });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.calcularSalario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const id = req.params.valor;
            let tmpEmpleado;
            let prueba;
            const query = yield EmpSchema_1.Empleado.findOne({ _dni: id });
            if (query._tipoObjeto == "Ec") {
                tmpEmpleado = new eCocina_1.ECocina(query._dni, query._salarioBase, query._Titulacion, query._NEstrella);
                let salario = tmpEmpleado.calcularSueldo().toString();
                res.send(salario);
            }
            else if (query._tipoObjeto == "Er") {
                prueba = new eRecepcion_1.ERecepcion(query._dni, query._salarioBase, query._Nocturnidad);
                let salario = prueba.calcularSueldo().toString();
                res.send(salario);
            }
            if (query._tipoObjeto == "El") {
                tmpEmpleado = new eLimpieza_1.ELimpieza(query._dni, query._salarioBase, query._habitaciones);
                let salario = tmpEmpleado.calcularSueldo().toString();
                res.send(salario);
            }
            yield database_1.db.desconectarBD();
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
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
        //Consultar un cliente
        this._router.get('/clientes/:valor', this.getclienteDNI);
        this._router.get('/empleado/:valor', this.getempleadoDNI);
        this._router.get('/reserva/:valor', this.getreservaDNI);
        this._router.get('/salarios/:valor', this.calcularSalario);
        //Modificar
        this._router.put('/modificarCliente', this.modificarCliente);
        this._router.put('/modificarHabitacionb', this.modificarHabitacionb);
        this._router.put('/modificarHabitacionf', this.modificarHabitacionf);
        this._router.put('/modificarHabitacionv', this.modificarHabitacionv);
        this._router.put('/modificarEmpleadoc', this.modificarEmpleadoc);
        this._router.put('/modificarEmpleadol', this.modificarEmpleadol);
        this._router.put('/modificarEmpleador', this.modificarEmpleador);
        this._router.put('/modificarReserva', this.modificarReserva);
        this._router.put('/modificarClienteURL/:dni/:cambioP', this.modificarClienteURL);
        this._router.put('/modificarEstadoHabitacionURL/:IdHab/:cambioP', this.modificarEstadoHabitacionURL);
        this._router.put('/modificarEstadoHabitacionURL/:dni/:cambioP', this.modificarSalarioEmpledoURL);
        this._router.put('/modificarNDiasReservaURL/:cliente/:cambioP', this.modificarNDiasReservaURL);
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
