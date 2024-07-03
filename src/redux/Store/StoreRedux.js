import { configureStore } from '@reduxjs/toolkit';
import ShowForm from '../Reducer/ShowForm';
import GetData from '../Reducer/GetData';

export default configureStore({
    // reducer là một bộ máy dùng đẻ phân tích và tính cập nhật lại state
    reducer: {
        form: ShowForm,
        data: GetData
        // more reducer..
    },
});