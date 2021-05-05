import React, { useContext, useState } from "react";
import { Grid, makeStyles, Paper, Slider } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { shoesContext } from "../../contexts/shoesContext";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
}));

const Sidebar = ({ history }) => {
    const classes = useStyles();
    const { getShoes } = useContext(shoesContext);
    const [memory, setMemory] = useState(getMemory());

    function getMemory() {
        const search = new URLSearchParams(history.location.search);
        return search.get("category");
    }

    const handleChangeMemory = (e) => {
        if (e.target.value === "all") {
            history.push(`${history.location.pathname.replace("category")}`);
            getShoes(history);
            return;
        }

        const search = new URLSearchParams(history.location.search);
        search.set("category", e.target.value);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getShoes(history);
        setMemory(e.target.value);
    };

    return (
        <div className="filter-block">
            <RadioGroup
                value={memory}
                onChange={handleChangeMemory}
                aria-label="memory"
                name="memory1"
            >
                <FormControlLabel
                    value="Basketball"
                    control={<Radio />}
                    label="Basketball"
                />
                <FormControlLabel
                    value="Football"
                    control={<Radio />}
                    label="Football"
                />
                <FormControlLabel
                    value="Running"
                    control={<Radio />}
                    label="Running"
                />
            </RadioGroup>
        </div>
    );
};

export default Sidebar;
