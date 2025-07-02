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

    //constructor (encargado de crear las propiedades)
    constructor(nombre,apellido,fechaNacimiento,dni,email,direccion,telefono,contrasenia){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
        this.email = email;
        this.direccion = direccion;
        this.telefono = telefono;
        this.contrasenia = contrasenia;
        //se pueden agregar atributos sin que esten en el contructor
        this.edatdo = true;
    }

    //metodos (Si o si con parentesis (puede haber parametros))
    mostrarDatos(){
        //Todo lo que quiero que haga el metodo
        document.writeln(`<ul>
            <li>Nombre y Apellido: ${this.apellido}</li>
            <li>Email: ${this.email}</li>
            <li>Telefono: ${this.telefono}</li>
            <li>Direccion: ${this.direccion}</li>
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


//Encapsulamiento: No puedo manipular mis objetos facilmente
//(Modificamos la propiedad del objeto)
Maxi.email = "maxi@gmail.com";
Maxi.mostrarDatos();