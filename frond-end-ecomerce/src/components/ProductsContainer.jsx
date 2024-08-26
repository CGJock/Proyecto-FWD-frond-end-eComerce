import { useState } from "react";
import CardProducts from '../components/HomeCards'
import PaginationComponent from '../components/pagination';

const ProductsContainer = ({ dataFiltrada }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // numero de items por pagina a mostrar

  // se calcula el rango del index de los elementos a mostrar
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataFiltrada.slice(indexOfFirstItem, indexOfLastItem);

  // se calculan el total de paginas
  const totalPages = Math.ceil(dataFiltrada.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={containerStyle}>
      <div style={{ overflowY: "auto", flex: 1 }}>
        <CardProducts dataFiltrada={currentItems} />
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

// stylo del contenedor
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  padding: "20px",
  boxSizing: "border-box",
};

export default ProductsContainer;


