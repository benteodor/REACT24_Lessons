import { useeEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeCountries } from "../services/countriesServices";

const Countries = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeCountries());
    }, [dispatch]);
    return <div>Countries will be here</div>
};

export default Countries; 

