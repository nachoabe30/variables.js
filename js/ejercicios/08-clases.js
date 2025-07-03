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
    
    
    constructor(nombre,apellido,fechaNacimiento,provinicia,dni,email,direccion,telefono,contrasenia){
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.provincia = provinicia;
    this.dni = dni;
    this.#email = email; // Aquí se asigna el email
    this.#direccion = direccion; // Aquí se asigna la dirección
    this.telefono = telefono;
    this.contrasenia = contrasenia;
    //Valor por defectos
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
    mostrarDatos(){ //Este metodo aplica polimorfismo
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
    if(contraseniaActual === this.contraseniaActual){ 
        this.contraseniaNueva = contraseniaNueva;
        console.log("Cambiaste la contraseña");
    }
}

}



//Clase hija (extends de persona)
class Alumno extends Persona{
    #notas
    #curso
    //Constructo nuevo de la clase aulumno
    constructor(nombre,apellido,fechaNacimiento,provinicia,dni,email,direccion,telefono,contrasenia,comision,curso){
        //Invocamos al constructor de persona (super)
        super(nombre,apellido,fechaNacimiento,provinicia,dni,email,direccion,telefono,contrasenia)
        //Todas las propiedades nuevas de la clase hija
            this.comision = comision;
            this.insignia = [];
            this.rollingCoins = 0;
            this.asistencia = 0;
            this.#notas = [];
            this.#curso = curso;
    }

    //Getters y setters 
    get curso(){
        return this.#curso;
    }
    set curso(curso){
        this.#curso = curso;
    }

    //Agregar metodos (Si lo definimos al mismo metodo en la clase hija, se anula el mismo metodo del padre)
    mostrarDatos(){
        document.writeln(`<ol>
            <li>Nombre y Apellido: ${this.apellido}</li>
            <li>Email: ${this.getEmail}</li>
            <li>Telefono: ${this.telefono}</li>
            <li>Telefono: ${this.getDireccion}</li>
            <li>Direccion: ${this.comision}</li>
            <li>Notas: ${this.#notas}</li>
            </ol>`)

    }

    caclularPromedio(){
        let suma=0;
        for(let i=0; i<this.#notas.length; i++){
            suma += suma + this.#notas[i];
        }
        return suma / this.notas.length;
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
    '38133456456',
    '*1234AbC$',
    '10',
    '8',
);

//Quiero ver los datos en pantalla
Maxi.mostrarDatos();
agus.mostrarDatos();

//Mostrar el email antes de modificarlo (se pone normal el .email ya que hay getters y setters)
Maxi.setEmail = "Maxi@Gmail.com";
document.writeln(`<h2>Consultar Email: ${Maxi.getEmail}</h2>`);


//Encapsulamiento: No puedo manipular mis objetos facilmente
//(Modificamos la propiedad del objeto)
Maxi.mostrarDatos();

//Objeto alumno
const pau = new Alumno(
  "Paula",
  "Gramajo",
  "10/05/2004",
  "Tucuman",
  "4766780",
  "paula@gmail.com",
  "38133456456",
  "1234",
  "Comision 13",
  "Fulstack"
);

console.log(pau);
pau.mostrarDatos();

pau.setDireccion = "San miguel de Tucuman";
document.writeln(`<h2>Direccion: ${pau.getDireccion}</h2>`);

pau.setNotas = 10;
pau.setNotas = 8;
pau.setNotas = 9;

pau.mostrarDatos();
pau.mostrarDatos();
document.writeln(`<p>Promedio: ${pau.calcularPromedio()}</p>`);









