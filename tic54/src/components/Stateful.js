import React, {Component} from 'react';

/** Creamos nuestro componente que es un clase stateful esctiende de componentes
 * ciclo de vida de nuestra aplicacion asi como la logica 
  */
class Stateful extends Component {
    /*Nuestro componente tiene acceso a un constructor que resive props se inicializan con super
    *asignamos el estado this.state = a un objeto y digo que hello es igual a hola mundo
    */
    constructor (props){
        super(props);
        this.state = {
            hello: 'Hola Mundo'
        }
    }
    /*dentro del render va el html que a empujar nuestra aplicacion*/
    render () {
        return (
            /*Aqui hago el llamado al metodo this state que tiene 'hola mundo' */
        <h1>{this.state.hello}</h1>
        )
    }
};
/** Exporta el componente con export default y el nombre del componente stateful */
export default Stateful;