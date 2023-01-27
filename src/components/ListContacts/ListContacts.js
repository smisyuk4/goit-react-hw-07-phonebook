import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectVisibleContacts, selectIsLoading, selectError } from 'redux/selectors';
import { Filter } from 'components/Filter';
import { Contact } from 'components/Contact';
import { BaseContacts, CollectionContacts } from './ListContacts.styled';
import { fetchContacts } from "../../redux/operations"
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const ListContacts = () => {
    const visibleContacts = useSelector(selectVisibleContacts)
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

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