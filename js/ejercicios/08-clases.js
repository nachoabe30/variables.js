//Notacion Literal (1 o 2 objetos)
/*
Atributos del objeto persona
nombre
apellido
fechaNamcimiento
dni 
email
dir
tel

Metodos:
calcularEdad
cambiarContraseña
mostrarDatos

*/

//Abstraccion: es la capacidad de presentar solo lo necesario y ocultar lo que no es relevante
//Herencia: es la capacidad de compartir atributos y metodos entre objetos
//Polimorfismo: es la capacidad de compartir atributos y metodos entre objetos
//Encapsulamiento: es la capacidad de ocultar los atributos y metodos de un objeto

//molde para personas -->  (class). 1era letra mayuscula- singular
class Persona {


    //Como ponemos un atributo en privado
    //Colocar el # tambien en el constructor
    #email;
    #direccion;


    

    //constructor (encargado de crear las propiedades)
    constructor(nombre,apellido,fechaNacimiento,dni,email,direccion,telefono,contrasenia){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
        this.#email = email;
        this.#direccion = direccion;
        this.telefono = telefono;
        this.contrasenia = contrasenia;
        //se pueden agregar atributos sin que esten en el contructor
        this.estado = true;
    }

    //Propiedades computadas (getters y setters)
    //Get=leer un dato
    //set=escribir un dato
    //No tiene que ser identico al nombre con el #

    get getEmail(){
        return this.#email;
    }
    get getDireccion(){
        return this.#direccion
    }
    //Debemos poner el parametro nuevo entre los ()
    set setEmail(nuevoEmail){
        this.#email = nuevoEmail;
    }
    set setDireccion(nuevaDireccion){
        this.#direccion = nuevaDireccion;
    }


    //metodos (Si o si con parentesis (puede haber parametros))
    //Agregar en los metodos el privado
    mostrarDatos(){
        //Todo lo que quiero que haga el metodo
        document.writeln(`<ul>
            <li>Nombre y Apellido: ${this.apellido}</li>
            <li>Email: ${this.#email}</li>
            <li>Telefono: ${this.telefono}</li>
            <li>Direccion: ${this.#direccion}</li>
            </ul>`)
    }

    calcularEdad(){
        
    }

    cambiarContrasenia(contraseniaActual, contraseniaNueva){
        //this es el objeto que se esta ejecutando 
        if(contraseniaActual === this.contraseniaActual){
            this.contraseniaNueva = contraseniaNueva;
            console.log("Cambiaste la contraseña");
        }
    }

}

//Clase hija (extends de persona)
class alumno extends Persona{
    #notas
    #curso
    constructor(nombre,apellido,fechaNacimiento,dni,email,direccion,telefono,contrasenia,comision,insignia,rollingCoins,asistencia,notas){
        //Invocamos al constructor de persona (super)
        super(nombre,apellido,fechaNacimiento,dni,email,direccion,telefono,contrasenia,comision)
            this.comision = comision;
            this.insignia = [];
            this.rollingCoins = 0;
            this.asistencia = 0;
            this.#notas = [];
            this.comision = comision;
            this.#curso = curso;
    }
        
    }
//Logica de mi programa (Usar esa clase que hemos creado (persona))

//New (Instanciamos una clase en especifico)
const Maxi = new Persona("Mximiliano", "Gomez", "10/04/200", "Tucuman", "47353590","mx@gmail.com", "3815136085", "MaxiGomez30", "null");
//Mostramos los datos al programador
console.log(Maxi);

const agus = new Persona(
    'Agustina',
    'Bulacio',
    '10/04/2004',
    'Tucumán',
    '47665777',
    'agus@bulacio.com',
    null,
    '38133456456',
    '*1234AbC$'
);

//Quiero ver los datos en pantalla
Maxi.mostrarDatos();
agus.mostrarDatos();

//Mostrar el email antes de modificarlo (se pone normal el .email ya que hay getters y setters)
document.writeln(`<h2>Consultar Email: ${Maxi.nuevoEmail}</h2>`);
Maxi.setEmail = "Maxi@Gmail.com";

//Encapsulamiento: No puedo manipular mis objetos facilmente
//(Modificamos la propiedad del objeto)
Maxi.mostrarDatos();


//herencia: es la capacidad de compartir atributos y metodos entre objetos




