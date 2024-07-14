import {message} from 'antd'
export const errorResponse = (error) => {
    if (error.response.status === 500) {
        message.error('Internal Server Error');
    } else if (error.response.status === 404) {
        message.error('Appliance not found');
    } else {
        message.error('Something went wrong');
    }
}