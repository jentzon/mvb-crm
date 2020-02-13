// Icons
// --- Apartment / Swimming/ School ---
import { FaBuilding, FaSwimmingPool, FaSchool } from 'react-icons/fa';
// --- Office ---
import { MdWork } from 'react-icons/md';

export const getIconType = projectTypes => {
    if (projectTypes.includes('Simhall')) return FaSwimmingPool;
    if (projectTypes.includes('Skola')) return FaSchool;
    if (projectTypes.includes('Kontor')) return MdWork;
    return FaBuilding;
};

export default getIconType;
