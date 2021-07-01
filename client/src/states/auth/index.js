import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {loginAsync,login} from "./reducer";
// tạo những hooks để làm việc với state này
// lấy state hiện tại
export const useStudentState = () => {
    return useSelector(state => {
        console.log(state);
        return state;
    })
}
//sử lý các events
export const useStudentHandler = () => {
    const dispatch = useDispatch()
    const loginAction =  useCallback(async () => {
        await dispatch(loginAsync())
    }, [dispatch])
    return {loginAction}
}