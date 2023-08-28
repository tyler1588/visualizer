import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
	resetLeft,
	resetRight,
	resetSwapCount,
	resetMin
} from '../features/counter/counterSlice';
import { generateRandArray } from '../features/randArray/randArraySlice';
import { setFalse, } from '../features/runState/runStateSlice';
import { resetSpeed } from '../features/runState/runStateSlice';

const useReset = () => {
    const dispatch = useDispatch();
    const location = useLocation()

    useEffect(() => {
        dispatch(setFalse());
        dispatch(resetLeft());
        dispatch(resetRight());
        dispatch(generateRandArray());
        dispatch(resetSpeed());
        dispatch(resetSwapCount());
        dispatch(resetMin());
    }, [location.key, dispatch])

}

export default useReset