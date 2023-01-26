import { useDispatch } from "react-redux";
import { removeContact } from "../../redux/contactsSlice"
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { RiUserUnfollowFill } from 'react-icons/ri';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ItemContact, ButtonRemoveContact } from './Contact.styled';

export const Contact = ({ contact }) => {
    const dispatch = useDispatch()

    const { id, name, number } = contact;

    const handleRemoveContact = ()=>{
        dispatch(removeContact(id))

        Notify.success(
            'The contact has been remove from storage',
            { position: 'center-top' })
    }

    return (
        <ItemContact>
            {name}: {number}
            <ButtonRemoveContact
                type="button"
                onClick={handleRemoveContact}
            >
                <IconContext.Provider value={{ className: 'global-icon' }}>
                    <RiUserUnfollowFill />
                </IconContext.Provider>
                Remove
            </ButtonRemoveContact>
        </ItemContact>
    );
};

Contact.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
};
