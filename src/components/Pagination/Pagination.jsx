import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./style.css";

export const Pagination = ({ page, totalPages, onRightClick, onLeftClick }) => {
    return (<div className="pokePagination">
        <button onClick={onLeftClick}><FaArrowLeft /></button>
        <div>Página {page} de {totalPages}</div>
        <button onClick={onRightClick}><FaArrowRight /></button>
    </div>)
}