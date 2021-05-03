import React, { useContext, useState } from "react";
import { Grid, makeStyles, Paper, Slider } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
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
        return search.get("category");
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
        <Grid item md={3}>
            <Paper className={classes.paper}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                        value={memory}
                        onChange={handleChangeMemory}
                        aria-label="memory"
                        name="memory1"
                    >
                        <FormControlLabel
                            value=""
                            control={<Radio />}
                            label="Running"
                        />
                        <FormControlLabel
                            value="Football"
                            control={<Radio />}
                            label="Football"
                        />
                        <FormControlLabel
                            value="Basketball"
                            control={<Radio />}
                            label="Basketball"
                        />
                        <FormControlLabel
                            value="Jordan"
                            control={<Radio />}
                            label="Jordan"
                        />
                        <FormControlLabel
                            value="Air Max"
                            control={<Radio />}
                            label="Air Max"
                        />
                        <FormControlLabel
                            value="all"
                            control={<Radio />}
                            label="all"
                        />
                    </RadioGroup>
                </FormControl>
                <Grid>
                    <Slider
                        value={sliderValue}
                        min={500}
                        max={20000}
                        onChange={handleSliderValue}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                    />
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Sidebar;
