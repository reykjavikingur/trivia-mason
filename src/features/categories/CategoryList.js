import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    chooseCategoryId,
    loadCategories,
    selectCategoriesList,
    selectCategoriesLoading,
    selectChosenCategoryId
} from "./categoriesSlice";
import {Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";

export default function CategoryList() {
    const dispatch = useDispatch();
    const loading = useSelector < Boolean > (selectCategoriesLoading);
    const list = useSelector(selectCategoriesList);
    const chosenId = useSelector < Number > (selectChosenCategoryId);

    useEffect(() => {
        if (!list && !loading) {
            dispatch(loadCategories());
        }
    }, [loading, list]);

    const onSelect = useCallback((event) => {
        const id = parseInt(event.target.value);
        console.log('choosing category id', id);
        dispatch(chooseCategoryId(id));
    }, [dispatch]);

    return (
        <Form.Group controlId={"triviaCategory"}>
            <Form.Label>
                Category:
                {loading ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :
                    null
                }
            </Form.Label>
            <Form.Select aria-label="Trivia Category"
                defaultValue={chosenId}
                onChange={onSelect}
            >
                {list ?
                    <>
                        <option value={-1}>(any)</option>
                        {
                            list.map((category) => (
                                <option key={category.id}
                                    value={category.id}>{category.name}</option>
                            ))
                        }
                    </>
                    :
                    null
                }
            </Form.Select>
        </Form.Group>
    );
}
