import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getIsLoading, getError, getFilter } from 'redux/selectors';
import { Filter } from 'components/Filter';
import { Contact } from 'components/Contact';
import { BaseContacts, CollectionContacts } from './ListContacts.styled';
import { fetchContacts } from "../../redux/operations"
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const ListContacts = () => {
  const contacts = useSelector(getContacts)
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getError)
  const filterValue = useSelector(getFilter)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  const showContacts = () => {
    const fullBaseContacts = contacts;
    const findName = filterValue.toLowerCase();

    return fullBaseContacts.filter(({ name }) =>
      name.toLowerCase().includes(findName)
        );
    };

    const visibleContacts = showContacts()

    if(isLoading && !error){
        return (
            <b>Request in progress...</b>
        )
    }

    if (error){
        Notify.failure(error, { position: 'center-top' })

        return (            
            <b>Error</b>            
        )
    }
    
    return (
        <BaseContacts>     
                <Filter/>

                {visibleContacts.length !== 0 && 
                    <CollectionContacts>
                        {visibleContacts.map(item => (
                            <Contact
                                contact={item}
                                key={item.id}                           
                            />
                        ))}
                    </CollectionContacts>
                }           
        </BaseContacts>
    )
}