import React, { useEffect, useState } from 'react';
import { Container } from 'components/Container/Container';
import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';
import { Modal } from 'components/Modal/Modal';
// import { Layout } from './Layout/Layout';
import { AppBar } from './AppBar/AppBar';
import { useDispatch } from 'react-redux';
// import { Message } from './Message/Message';
// import {
//   selectContactValue,
//   selectError,
//   selectIsLoading,
// } from 'redux/contacts/selectors';

import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'page/HomePage';
import { RegisterPage } from 'page/RegisterPage';
import { LoginPage } from 'page/LoginPage';
import { ContactsPage } from 'page/ContactsPage';
import { Layout } from './Layout/Layout';
import { refreshUser } from 'redux/auth/operations';

export const App = () => {
  // const [showModal, setShowModal] = useState(false);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // const items = useSelector(selectContactValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };

  return (
    <>
      {/* <AppBar onClose={toggleModal} />
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )} */}
      {/* <Container> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
      {/* </Container> */}
    </>

    // <>
    //   <Layout>
    //     <AppBar onClose={toggleModal} />
    //     {showModal && (
    //       <Modal onClose={toggleModal}>
    //         <ContactForm onClose={toggleModal} />
    //       </Modal>
    //     )}
    //     {items.length===0 ?<Message/> :
    //    ( <>
    //      <Filter />
    //      {isLoading && !error && <b>Request in progress...</b> }
    //     <ContactList />
    //     </>)
    //     }

    //   </Layout>
    // </>
  );
};
