import { ContactForm } from 'components/ContactForm';
import { ListContacts } from 'components/ListContacts';
import { Title } from 'components/Title';
import { Phonebook, MainTitle } from "./App.styled"

export const App =()=>{
  return (
    <Phonebook>
      <MainTitle>My favorite</MainTitle>
      <Title
        title="Phonebook"
        children={
          <ContactForm/>
        }
      />
      <Title
        title="Contacts"
        children={
          <ListContacts/>
        }
      />
    </Phonebook>
  );
}