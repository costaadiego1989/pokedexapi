import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./style.css";

export const Pagination = ({
  page,
  totalPages,
  onRightClick,
  onLeftClick,
  pokemon,
  notFound
}) => {
  return (
    <div className="pokePagination">
      <button onClick={onLeftClick}>
        <FaArrowLeft />
      </button>
      <div>
    Página {notFound ? 0 : page} de {pokemon ? 1 : totalPages}
      </div>
      <button onClick={onRightClick}>
        <FaArrowRight />
      </button>
    </div>
  );
};
