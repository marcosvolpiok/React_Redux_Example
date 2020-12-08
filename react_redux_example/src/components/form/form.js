import { modificaPalabra } from '../../store/palabra/actions';
import {connect} from "react-redux";

const Form = ({ modificaPalabra }) => {
	const palabraRef = useRef(null);
	return (
        <div>
            <input ref={palabraRef} type="text" placeholder="La palabra"/>
            <button onClick={ () => {modificaPalabra(palabraRef.current.value);}} >Add</button>
        </div>
	)
};

/* - El método connect conecta un componente (en este caso Form) con la Store.
   - El primer parámetro (que en este caso vale null porque no lo necesitamos) es la función de este componente que recibiŕía el state de la store para pintarlo por pantalla.
   - El segundo parámetro es un objeto que contiene las acciones de redux que vamos a utilizar en el componente.
Tanto el state al que nos hemos suscrito con el primer parámetro, como las acciones del segundo le llegarán al componente como props.*/

export default connect(null, { modificaPalabra })(Form)

//Si fuesen varios métodos a los que nos quisieramos conectar, lo haríamos de esta forma:
//export default connect(null, { modificaPalabra, modificaOtraCosa })(Form)