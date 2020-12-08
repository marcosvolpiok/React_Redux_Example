import {connect} from 'react-redux';
import { selectActiveWord } from '../../store/palabra/reducer';

const PalabraAlmacenada = ({ palabra }) => (
	<output>{palabra}</output>
);

/*
* Cada vez que se ejecuta una acción, se ejecutará también una llamada a todas las funciones mapStateToProps de mi aplicación
* Por tanto, usaremos esta función para recuperar la parte del esta que nos interesa.
* */
function mapStateToProps(state) {
    return {
        palabra: selectActiveWord(state)
    }
}

/*La función connect, vincula el componente PalabraAlmacenada con la store.
Para ello, utilizamos la función mapStateToProps cuyo parámetro state representa la store. 
En este caso no usamos acciones (el segundo parámetro).*/

export default connect(mapStateToProps)(PalabraAlmacenada);