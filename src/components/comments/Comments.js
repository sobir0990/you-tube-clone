import React, {useEffect, useState} from 'react';
import './_comments.scss';
import Comment from "../comment/Comment";
import {useDispatch, useSelector} from "react-redux";
import {addComment, getCommentsOfVideoById} from "../../redux/actions/comment.action";

const Comments = ({videoId, totalComments}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCommentsOfVideoById(videoId))
    }, [videoId, dispatch]);

    const commentList = useSelector(state => state.commentList);

    /*const _comments = comments?.map(comment => comment.snippet.topLevelComment.snippet);*/


    const [text, setText] = useState('');

    const handleComment = e => {
        e.preventDefault();
        if (text.length === 0) return;
        dispatch(addComment(videoId, text));
        setText('');
    };

    return (
        <div className='comments'>
            <p>{totalComments} Comments</p>
            <div className='my-2 comments__form d-flex w-100'>
                <img
                    src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                    alt=""
                    className='rounded-circle mr-3'
                />
                <form onSubmit={handleComment} className="d-flex flex-grow-1">
                    <input
                        type="text"
                        className="flex-grow-1"
                        placeholder='Write a comment'
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <button className='border-0 p-2'>Comment</button>
                </form>
            </div>
            <div className="comments__list">
                {
                    commentList?.comments.length
                        ? commentList.comments.map((comment, i) => <Comment
                            comment={comment?.snippet?.topLevelComment?.snippet} key={i}/>)
                        : null
                }
            </div>
        </div>
    )
};

export default Comments;