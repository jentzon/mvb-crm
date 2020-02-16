// Icons
// --- Apartment / Swimming/ School ---
import { FaBuilding, FaSwimmingPool, FaSchool } from 'react-icons/fa';
// --- Office ---
import { MdWork } from 'react-icons/md';
import { IconType } from 'react-icons/lib/cjs';

export const getIconType = (projectTypes: string[]): IconType => {
    if (projectTypes.includes('Simhall')) return FaSwimmingPool;
    if (projectTypes.includes('Skola')) return FaSchool;
    if (projectTypes.includes('Kontor')) return MdWork;
    return FaBuilding;
};

export default getIconType;
