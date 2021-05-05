import React, { useContext, useEffect, useState } from 'react';
import './EditShoe.css';
import { CircularProgress } from '@material-ui/core';
import { useHistory, useParams } from 'react-router';
import { shoesContext } from '../../contexts/shoesContext';
import ShoeDetails from '../ShoeDetails/ShoeDetails';
import app from '../../base';

const EditShoe = () => {

    const { getShoeDetails, saveShoe, shoeDetails } = useContext(shoesContext);
    const [editedShoe, setEditedShoe] = useState({});
    const [pending, setPending] = useState(true);
    const history = useHistory();
    const { id } = useParams();

    const [test, setTest] = useState(shoeDetails)

    useEffect(() => {
        console.log('asd')
        getShoeDetails(id);
        app.auth().onAuthStateChanged((user) => {
            console.log('authstatechanged')
            if (!user) {
                history.push("/login");
            } else if (shoeDetails) {

                setPending(false);
                console.log(shoeDetails);
            }
        });
    }, []);

    const handleValue = (e) => {
        let newShoe = {
            ...editedShoe,
            [e.target.name]: e.target.value,
        };
        setEditedShoe(newShoe);
    };

    const handleSave = () => {
        saveShoe(id, editedShoe);
        setEditedShoe(false);
        history.push("/admin");
    };


    return !pending ? (
        <div className="details_card">
            <div className="container"></div>
            <div className="edit-textareas">
                <textarea value={shoeDetails.brand} name="brand" onChange={handleValue} />
                <textarea value={shoeDetails.category} name="category" onChange={handleValue} />
                <textarea value={shoeDetails.model} name="model" onChange={handleValue} />
                <textarea value={shoeDetails.sex} name="sex" onChange={handleValue} />
                <textarea value={shoeDetails.description} name="description" onChange={handleValue} />
                <textarea value={shoeDetails.size} name="size" onChange={handleValue} />
                <textarea value={shoeDetails.color} name="color" onChange={handleValue} />
                <textarea value={shoeDetails.price} name="price" onChange={handleValue} />
                <button className="edit__btn" onClick={handleSave}>Сохранить</button>
            </div>
        </div>
    )
        :
        (
            <div className="edit-textareas">
                <CircularProgress />
            </div>
        )
        ;
};

export default EditShoe;