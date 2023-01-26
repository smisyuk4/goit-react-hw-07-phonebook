import { useDispatch } from "react-redux";
import { addFilter } from "../../redux/filterSlice";
import { IconContext } from 'react-icons';
import { RiTeamFill } from 'react-icons/ri';
import { LabelFilter, InputFilter } from './Filter.styled';

export const Filter = () => {
    const dispatch = useDispatch()

    const handleChangeFilter = ({currentTarget})=>{
        dispatch(addFilter(currentTarget.value))
    }

    return (
        <LabelFilter>
            <IconContext.Provider value={{ className: 'global-icon' }}>
                <RiTeamFill />
            </IconContext.Provider>
            Find contacts by name
            <InputFilter
                onChange={handleChangeFilter}
                type="text"
                name="find"
                autoComplete="off"
            />
        </LabelFilter>
    );
};