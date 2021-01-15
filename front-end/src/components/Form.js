import React, {useState, useEffect} from 'react';
import Button from './Button';
import {useDispatch} from 'react-redux';
import {createPost, updatePost} from '../actions/postsActions';

import './Form.css';
import Title from './Title';

const Form = ({closeModalHandler, post}) => {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();


    useEffect(() => {
        if(post){
            setTitle(post.title);
            setImage(post.image);
            setCategory(post.category);
            setContent(post.content);
        }
    }, [post])
    
    const submitHandler = (e) => {
        e.preventDefault();

        const postForm = {
                title,
                image,
                category,
                content
        }

        if(post){

        dispatch(updatePost({id:post.id, ...postForm}))
        }else{

        dispatch(createPost(postForm))
        }

        closeModalHandler();
        
    }
    return (<>
            <div className="center">
                <Title className='small black'>Agregar Post</Title>
            </div>
              <form className='form-section' onSubmit={submitHandler}>
                    <div className="input-group">

                            <label >Titulo</label>
                            <input 
                                name='title'
                                value={title}
                                type="text" 
                                placeholder="Titulo" 
                                onChange={(e)=>setTitle(e.target.value)}
                                />

                    </div>


                <div className="input-group">

                    <label >Imagen</label>
                    <input 
                        name='image'
                        value={image}
                        type="text" 
                        placeholder="URL de la imagen" 
                        onChange={(e) => setImage(e.target.value)}
                        />

                 </div>

                 <div className="select-group">

                    <label >Categoria</label>
                    <select 
                        name='category' 
                        value={category}
                        id=""
                        onChange={(e)=>setCategory(e.target.value)}
                        >
                        <option value="">Elije una opcion</option>
                        <option >Aire Libre</option>
                        <option >Deportes</option>
                        <option >Entretenimiento</option>
                        <option >Economia</option>
                        <option >Prensa</option>
                        <option >Periodismo</option>
                        <option >Tecnologia</option>
                        <option >Viajes</option>
                    </select>
                   

                 </div>

                 <div className="text-area-group">

                    <label >Contenido</label>
                    <textarea 
                    name='content' 
                    value={content}
                    id="" 
                    cols="30" 
                    rows="5"
                    onChange={(e)=>setContent(e.target.value)}></textarea>

                 </div>

                 <div className="input-group">

                    <Button className="btn-view block"><i className="far fa-plus-square"></i>{post? 'Editar Post ': 'Crear Post'}</Button>

                 </div>

                </form>
        </>
    )
}

export default Form;
