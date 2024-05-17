import Sort from '../../components/UI/sort/Sort';
import { sortOptions } from './configs/catergories';

interface SortCategoriesProps {
    onChange: (value: string) => void;
}

const SortCategories = ({ onChange }: SortCategoriesProps) => {
    return (
        <Sort
            options={sortOptions}
            defaultValue="business"
            onChange={onChange}
            label="Select category"
        />
    );
};

export default SortCategories;
