import React from 'react';
import { FiMoreHorizontal, FiMessageCircle, FiSend, FiHeart } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";

import comment from '../../../../assets/comment.png'
import post from '../../../../assets/post.jpg';

const Post = (props) => (
    <div className="post">
        <div className="post__header aux-padding">
            <div className="post__header--profile">
                <div className="post__header--box-img">
                    <img src={props.img} alt=""/>
                </div>
                <div className="post__header--name">
                    <p>{props.name}</p>
                </div>
            </div>
            <div className="post__header-more">
                <FiMoreHorizontal size={18} />
            </div>
        </div>

        <div className="post__img">
            <img src={post} alt="" style={{width:'630px'}} />
        </div>

        <div className="post__records aux-padding">

            <div className="post__records--actions aux-padding">
                <div>
                    <FiHeart className="post__records--actions--icon" size={26} />
                    <FiMessageCircle size={26} className="post__records--actions--icon" />
                    <FiSend size={26} />
                </div>
                <div>
                    <BsBookmark size={26}/>
                </div>
            </div>

            <div className="post__records--interactions aux-padding">
                <div className="post__records--interactions--like">
                    <img src={comment} alt="Comment profile"/>
                    <p>Curtido por <strong>heysydneypark</strong> e <strong>outras 189.904 pessoas</strong></p>
                </div>
                <div className="post__records--interactions--comments">
                    <p><a href="/">Ver todos os 15 comentários</a></p>
                        <div className="post__records--interactions--comments--comment">
                            <div className="post__records--interactions--comments--comment--text">
                                <p className="name">mariafulana</p>
                                <p>Lorem ipsum sit dormet</p>
                            </div>
                            <FiHeart size={12} />
                        </div>
                        <div className="post__records--interactions--comments--comment">
                            <div className="post__records--interactions--comments--comment--text">
                                <p className="name">pedrociclano</p>
                                <p>Lorem ipsum sit!</p>
                            </div>
                            <FiHeart size={12} />
                        </div>
                <p className="time">Há 21 horas</p>
                </div>
            </div>

            <div className="post__comment aux-padding">
                <input type="text" placeholder="Adicione um comentário..." className="input-comment"/>
                <a href="/">Publicar</a>
            </div>
        </div>
    </div>
)

export default Post;