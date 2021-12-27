import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    chooseCategoryId,
    loadCategories,
    selectCategoriesList,
    selectCategoriesLoading,
    selectChosenCategoryId
} from "./categoriesSlice";
import {Form, Spinner} from "react-bootstrap";
import TriviaFilterSelect from "../../components/TriviaFilterSelect";

export default function CategoryList() {
    const dispatch = useDispatch();
    const loading = useSelector(selectCategoriesLoading);
    const list = useSelector(selectCategoriesList);
    const chosenId = useSelector(selectChosenCategoryId);

    useEffect(() => {
        if (!list && !loading) {
            dispatch(loadCategories());
        }
    }, [dispatch, loading, list]);

    const onSelect = useCallback((event) => {
        const id = parseInt(event.target.value);
        dispatch(chooseCategoryId(id));
    }, [dispatch]);

    return (
        <TriviaFilterSelect controlId={"triviaCategory"} label={"Category:"}>
            {loading ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                :
                null
            }
            <Form.Select aria-label="Trivia Category"
                value={chosenId}
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
        </TriviaFilterSelect>
    );
}
