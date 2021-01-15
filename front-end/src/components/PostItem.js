import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Form from './Form';
import Button from './Button';
import Card from './Card';
import {useDispatch} from 'react-redux';
import './PostItem.css';
import { deletePost } from '../actions/postsActions';
import Title from './Title';


const PostItem = ({post}) => {
    
    const [showModal, setShowModal] = useState(false); 

    const dispatch = useDispatch();
    
    const openModalHandler = () => setShowModal(true);
    const closeModalHandler = () => setShowModal(false);
    
    const deleteHandler = (id) => {
        
            dispatch(deletePost(id));
        
        
    }
    return (
        <>
            <Modal show={showModal} 
            onCancel={closeModalHandler}
            header='Formulario' 
            exit={<Button 
                    className='btn-exit'
                    onClick={closeModalHandler}>
                        <i className="fas fa-times"></i>
                    </Button>}
        >
                
                <Form closeModalHandler={closeModalHandler}
                      post={post}
                />
               
            
        </Modal>

        <Card >
                    <Link to={`/post/${post.id}`}>
                        <img className="medium" src={post.image} alt={post.title} />
                    </Link>

                    <div className="card-body">

                        <Link to={`/post/${post.id}`}>
                            <Title className='small'>{post.title}</Title>
                        </Link>

                    </div>

                    <div className="card-footer">
                        
                            <Button className='btn-view'>
                            <Link className='btn-view link' to={`/post/${post.id}`}>
                                <i className="far fa-eye"></i>Detalles
                                </Link>
                            </Button>
                           
                       
                        <Button 
                        className='btn-edit'
                        onClick={openModalHandler}
                        ><i className="far fa-edit"></i>Editar</Button>
                        
                        <Button 
                        className='btn-delete'
                        onClick={()=>deleteHandler(post.id)}
                        ><i className="far fa-trash-alt"></i>Borrar</Button>
                    </div>
        </Card>
        </>
                
    )
}

export default PostItem;
