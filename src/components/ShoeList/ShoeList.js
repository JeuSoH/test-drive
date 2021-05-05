import { Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { shoesContext } from "../../contexts/shoesContext";
import ShoeCard from "../ShoeCard/ShoeCard";
import "./ShoeList.css";

const ShoeList = () => {
    const { getShoes, shoesData, paginationPages } = useContext(shoesContext);

    const history = useHistory();
    const [page, setPage] = useState(getPage());

    function getPage() {
        const search = new URLSearchParams(history.location.search);
        return search.get("_page");
    }

    const handlePage = (e, page) => {
        const search = new URLSearchParams(history.location.search);
        search.set("_page", page);
        history.push(`${history.location.pathname}?${search.toString()}`);
        setPage(page);
        getShoes(history);
    };

    useEffect(() => {
        getShoes(history);
        setPage(getPage(history))
    }, []);
    return (
        <>
            {shoesData.map((item) => (
                <ShoeCard key={item.id} item={item} />
            ))}
            <Grid container spacing={3}>
                <Pagination
                    page={+page}
                    onChange={handlePage}
                    count={paginationPages}
                    color="primary"
                />
            </Grid>
        </>
    );
};

export default ShoeList;
