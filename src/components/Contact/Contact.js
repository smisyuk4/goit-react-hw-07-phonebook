import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations"
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { RiUserUnfollowFill } from 'react-icons/ri';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ItemContact, ButtonRemoveContact } from './Contact.styled';

export const Contact = ({ contact }) => {
    const dispatch = useDispatch()

    const { id, name, number } = contact;

    const handleDeleteContact = ()=>{
        dispatch(deleteContact(id))

        Notify.success(
            'The contact has been delete from storage',
            { position: 'center-top' })
    }

    return (
        <ItemContact>
            {name}: {number}
            <ButtonRemoveContact
                type="button"
                onClick={handleDeleteContact}
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
        phone: PropTypes.string.isRequired,
    }).isRequired,
};
