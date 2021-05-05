import React, { useContext, useState } from "react";
import { Grid, makeStyles, Paper, Slider } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { shoesContext } from "../../contexts/shoesContext";
import "./Sidebar.css";

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
    const [sliderValue, setSliderValue] = useState(getSliderMemory());
    const [memory, setMemory] = useState(getMemory());

    function getMemory() {
        const search = new URLSearchParams(history.location.search);
        return search.get("sex");
    }

    function getSliderMemory() {
        const search = new URLSearchParams(history.location.search);
        return search.get("price_lte");
    }

    function handleSliderValue(e, value) {
        const search = new URLSearchParams(history.location.search);
        search.set("price_lte", value);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getShoes(history);
        setSliderValue(value);
    }

    const handleChangeMemory = (e) => {
        if (e.target.value === "all") {
            history.push(`${history.location.pathname.replace("sex")}`);
            getShoes(history);
            return;
        }

        const search = new URLSearchParams(history.location.search);
        search.set("sex", e.target.value);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getShoes(history);
        setMemory(e.target.value);
    };

    return (
        <div className="filter-block">
            {/* <Grid item md={3}> */}
            {/* <Paper className={classes.paper}> */}
            {/* <FormControl component="fieldset"> */}
            {/* <FormLabel component="legend">Gender</FormLabel> */}
            <RadioGroup
                value={memory}
                onChange={handleChangeMemory}
                aria-label="memory"
                name="memory1"
            >
                <FormControlLabel value="Men" control={<Radio />} label="Men" />
                <FormControlLabel
                    value="Women"
                    control={<Radio />}
                    label="Women"
                />

                <FormControlLabel value="all" control={<Radio />} label="all" />
            </RadioGroup>
            {/* </FormControl> */}
            {/* <Grid>
                    <Slider
                        value={sliderValue}
                        min={500}
                        max={20000}
                        onChange={handleSliderValue}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                    />
                </Grid> */}
            {/* </Paper> */}
            {/* </Grid> */}
        </div>
    );
};

export default Sidebar;
