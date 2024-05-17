import Sort from '../../components/UI/sort/Sort';
import { countryOptions } from './configs/countires';

interface SortCountriesProps {
    onChange: (selectedCountry: string) => void;
}

const SortCountries = ({ onChange }: SortCountriesProps) => {

    return (
        <Sort
            options={countryOptions}
            defaultValue="us"
            onChange={onChange}
            label="Select country"
        />
    );
};

export default SortCountries;
