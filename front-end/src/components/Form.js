import React, {useState, useEffect} from 'react';
import Button from './Button';
import {useDispatch, useSelector} from 'react-redux';
import {createPost, updatePost} from '../actions/postsActions';
import {listCategorys} from '../actions/categoryActions';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import './Form.css';
import Title from './Title';

const Form = ({closeModalHandler, post}) => {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [content, setContent] = useState('');
    const [formError, setFormError] = useState(false);

    const dispatch = useDispatch();
    
    const categoryList = useSelector(state => state.categoryList);
    const {categorys, loadingCategorys, errorCategorys } = categoryList;


    useEffect(() => {
        dispatch(listCategorys());
        if(post){
            setTitle(post.title);
            setImage(post.image);
            setCategoryId(post.categoryId);
            setContent(post.content);
        }
    }, [post, dispatch])
    

    
    const validateImageUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
    
    const isFormValid = (image) => {
        
        if(!validateImageUrl.test(image)){
            return false;
        }
        return true;
    }

    
    const submitHandler = (e) => {
        e.preventDefault();
        setFormError(false);
        const postForm = {
            title,
            image,
            categoryId,
            content
    }
        if(isFormValid(image)){


        if(post){

        dispatch(updatePost({id:post.id, ...postForm}))
        }else{

        dispatch(createPost(postForm))
        }

        closeModalHandler();
        }else{
            setFormError(true);
        }

        
    }
    return (<>
            {loadingCategorys && <LoadingBox></LoadingBox>}
            {errorCategorys && <MessageBox>{errorCategorys}</MessageBox>}
            {categorys && <>
                 <div className="center">
                 <Title className='small black'>Agregar Post</Title>
             </div>
               <form className='form-section' onSubmit={submitHandler}>
                     <div className="input-group">
                                 
                             <label >Titulo</label>
                             {formError && <MessageBox>{'La Url de la imagen es invalida'}</MessageBox>}
                             <input 
                                 name='title'
                                 value={title}
                                 type="text" 
                                 placeholder="Titulo" 
                                 onChange={(e)=>setTitle(e.target.value)}
                                 required
                                 
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
                         required
                         
                         />
 
                  </div>
 
                  <div className="select-group">
 
                     <label >Categoria</label>
                     <select 
                         name='category' 
                         value={categoryId}
                         id=""
                         onChange={(e)=>setCategoryId(e.target.value)}
                         required
                         
                         >
                             <option value="">Elije una opcion</option>
                             {categorys.map(category => (
                                 <option 
                                    key={category.id}
                                    value={category.id}
                                    >{category.name}</option>
                         ))}
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
                     onChange={(e)=>setContent(e.target.value)}
                     required
                     
                     ></textarea>
 
                  </div>
 
                  <div className="input-group">
 
                     <Button className="btn-view block"><i className="far fa-plus-square"></i>{post? 'Editar Post ': 'Crear Post'}</Button>
 
                  </div>
 
                 </form></>
            }
           
        </>
    )
}

export default Form;
