import React from 'react';

import PostItem from './PostItem';

const PostList = ({postList}) => {

    return (<>
       
        <div className='row center'>
            {postList.map(post => 
                <PostItem key={post.id} post={post}/>
            )}
            
        </div>
        </>
    )
}

export default PostList;
