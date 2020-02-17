import { BRANDS } from '../domain/constants';
import { mvbConfig } from '../domain/brandConfigurations/mvb';
import { defaultConfig } from '../domain/brandConfigurations/default';

export const getBrandConfig = (brand: string): BrandConfiguration => {
    switch (brand) {
        case BRANDS.MVB:
            return mvbConfig;
        default:
            return defaultConfig;
    }
};

export default getBrandConfig;
