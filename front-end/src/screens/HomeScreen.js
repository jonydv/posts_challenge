import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {listPosts} from '../actions/postsActions';
import PostList from '../components/PostList'
import Button from '../components/Button';
import './HomeScreen.css';
import Modal from '../components/Modal';
import Form from '../components/Form';
import Title from '../components/Title';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const HomeScreen = () => {

    const [showModal, setShowModal] = useState(false); 

    const dispatch = useDispatch();

    const postsList = useSelector(state => state.postsList);
    const {posts, error, loading } = postsList;
    
    
    const openModalHandler = () => setShowModal(true);
    const closeModalHandler = () => setShowModal(false);

    useEffect(() => {
        dispatch(listPosts());
    }, [dispatch])

    
    return (
        <>
            
            
             <Title className='transparent'>Lista de posteos</Title>
      
       
        <Button 
            className='btn-add home'
            onClick={openModalHandler}
            >
                <span className='hide'>Crear Post</span>{' '}
                <i className="far fa-plus-square"></i>
        </Button>
        {loading && <LoadingBox/>}
        <Modal show={showModal} 
            onCancel={closeModalHandler}
            header='Formulario' 
            exit={<Button 
                    className='btn-exit'
                    onClick={closeModalHandler}>
                        <i className="fas fa-times"></i>
                    </Button>}
        >
                
                <Form closeModalHandler={closeModalHandler}/>
               
            
        </Modal>
        
        {error && <MessageBox>{error}</MessageBox>}
        {posts && <PostList postList={posts}/>}
       
        </>
    )
}

export default HomeScreen
