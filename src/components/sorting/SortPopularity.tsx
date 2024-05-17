import Sort from "../UI/sort/Sort.tsx";
import {popularityOptions} from "./configs/popularity.ts";

interface SortPopularityProps {
    onChange: (value: string) => void;
}

const SortPopularity = ({ onChange }: SortPopularityProps) => {
    return ( 
        <Sort options= { popularityOptions }
               defaultValue="publishedAt"
               onChange={onChange}
               label='Sort By'
        />
        
    )
}

export default SortPopularity;