import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import 'bootstrap/dist/css/bootstrap.min.css'

function SplitVariantExample() {
  return (
    <>
    <div className='contenedorDropDown'>
      {['Herramientas', 'Electrodomesticos', 'Muebles', 'vestimenta','Linea blanca', 'Celulares','Juguetes','libros' ].map(
        (variant) => (
          <SplitButton className='botones'
            key={variant}
            id={`dropdown-split-variants-${variant}`}
            variant={variant}
            title={variant.toUpperCase()}
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          
          </SplitButton>
          
        ),
      )}
      </div>
    </>
  );
}

export default SplitVariantExample;