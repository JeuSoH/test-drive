import React, { useContext, useEffect, useState } from 'react';
import './EditShoe.css';
import { CircularProgress } from '@material-ui/core';
import { useHistory, useParams } from 'react-router';
import { shoesContext } from '../../contexts/shoesContext';
import ShoeDetails from '../ShoeDetails/ShoeDetails';

const EditShoe = () => {

    const { getShoeDetails, saveShoe, shoeDetails } = useContext(shoesContext);
    const [editedShoe, setEditedShoe] = useState({});
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        getShoeDetails(id);
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

    return ShoeDetails ? (
        <div className="details_card">
            <div className="container"></div>
            <div className="edit-textareas">
                <textarea name="brand" onChange={handleValue}>
                    {shoeDetails.brand}
                </textarea>
                <textarea name="category" onChange={handleValue}>
                    {shoeDetails.category}
                </textarea>
                <textarea name="model" onChange={handleValue}>
                    {shoeDetails.model}
                </textarea>
                <textarea name="sex" onChange={handleValue}>
                    {shoeDetails.sex}
                </textarea>
                <textarea name="description" onChange={handleValue}>
                    {shoeDetails.description}
                </textarea>
                <textarea name="size" onChange={handleValue}>
                    {shoeDetails.size}
                </textarea>
                <textarea name="color" onChange={handleValue}>
                    {shoeDetails.color}
                </textarea>
                <textarea name="price" onChange={handleValue}>
                    {shoeDetails.price}
                </textarea>
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