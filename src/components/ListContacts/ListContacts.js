import { useSelector } from "react-redux";
import { getContacts, getFilter } from 'redux/selectors';
import { Filter } from 'components/Filter';
import { Contact } from 'components/Contact';
import { BaseContacts, CollectionContacts } from './ListContacts.styled';

export const ListContacts = () => {
  const contacts = useSelector(getContacts)
  const filterValue = useSelector(getFilter)

  const showContacts = () => {
    const fullBaseContacts = contacts;
    const findName = filterValue.toLowerCase();

    return fullBaseContacts.filter(({ name }) =>
      name.toLowerCase().includes(findName)
        );
    };

    const visibleContacts = showContacts()
    return (
        <BaseContacts>
            <Filter/>

            {visibleContacts.length !== 0 && (
                <CollectionContacts>
                    {visibleContacts.map(item => (
                        <Contact
                            contact={item}
                            key={item.id}                           
                        />
                    ))}
                </CollectionContacts>
            )}
        </BaseContacts>
    );
};