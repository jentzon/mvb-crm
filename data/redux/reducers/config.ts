import { getBrandConfig } from '../../../helpers/config';

const config = getBrandConfig(process.env.REACT_APP_BRAND_ENV);

const initialState = {
    ...config,
};

export default function(state = initialState) {
    return state;
}
