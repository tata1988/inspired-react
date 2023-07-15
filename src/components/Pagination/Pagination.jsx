import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import s from './Pagination.module.scss';
import cn from "classnames";
import { setPage } from "../../features/goodsSlice";
import { useEffect, useState } from "react";

const Pagination = () => {
    const [pagePagination, setPagePagination] = useState('');
    const pathname = useLocation().pathname;
    const { page, pages } = useSelector(state => state.goods);

    const dispatch = useDispatch();

    useEffect(() => {
        setPagePagination(page);
    }, [page])

    const handlePageChange = (newPage) => {
        setPagePagination(newPage);
    }
    const handlePrevPage = () => {
        if (pagePagination > 1) {
            handlePageChange(pagePagination - 1);
        }
    }

    const handleNextPage = () => {
        if (pagePagination < pages) {
            handlePageChange(pagePagination + 1);
        }
    }

    const renderPaginationItems = () => {

        const paginationItems = [];
        let startPage = (pagePagination === pages) && (pages >= 3)
            ? pagePagination - 2
            : Math.max(1, pagePagination - 1);
        let endPage = Math.min(startPage + 2, pages);

        for (let i = startPage; i <= endPage; i++) {
            paginationItems.push(
                <li key={i} className={s.item}>
                    <NavLink
                        className={cn(s.link, i === pagePagination ?? s.linkActive)}
                        to={`${pathname}?page=${i}`}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </NavLink>
                </li>
            )
        }

        return paginationItems;
    }

    return (
        (pages > 1) &&
        <div className={s.pagination}>
            <button
                className={s.arrow}
                onClick={handlePrevPage}
                disabled={pagePagination <= 2}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 15.06L10.9096 12L14 8.94L13.0486 8L9 12L13.0486 16L14 15.06Z" fill="#8A8A8A" />
                </svg>
            </button>

            <ul className={s.list}>{renderPaginationItems()}</ul>

            <button className={s.arrow}
                onClick={handleNextPage}
                disabled={pagePagination >= pages - 1 || pages <= 3}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 15.06L13.0904 12L10 8.94L10.9514 8L15 12L10.9514 16L10 15.06Z" fill="black" />
                </svg>
            </button>
        </div>
    )
}

export default Pagination;