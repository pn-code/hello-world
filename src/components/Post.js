import likeIcon from '../images/navbar/heart.svg';
import commentIcon from '../images/navbar/comment.svg';
import sendIcon from '../images/navbar/inbox.svg';
import profileIcon from '../images/navbar/profile.svg';
import emojiIcon from '../images/navbar/emoji.svg';
import placeholderImg from '../images/login.png';
import moreImg from '../images/dots.svg';

const Post = (props) => {
    return (
        <div className="Post">
            <div className='top--section'>
                <div className="poster--info">
                    <img src={profileIcon} alt="profile"/>
                    <p>username</p>
                </div>
                <button className='more-btn'><img src={moreImg} alt="more options"/></button>
            </div>

            <div className="img--container">
                <img src={placeholderImg} alt="post"/>
            </div>
            <div className="action-bar">
                <button className="like-btn">
                    <img src={likeIcon} alt="like this post"/>
                </button>
                <button className="comment-btn">
                    <img src={commentIcon} alt="comment on this post"/>
                </button>
                <button className="send-btn">
                    <img src={sendIcon} alt="send or share with friends"/>
                </button>
            </div>
            <div className='likes-counter'>1,340 likes</div>
            <div className='post-description'>This post is awesome!</div>
            <button className='comments-section'>View all comments</button>
            <div className='user-comment--section'>
                <button>
                    <img src={emojiIcon} alt='emoji'/>
                </button>
                <input placeholder='Add a comment...'/>
                <button className='post-comment-btn'>Post</button>
            </div>
        </div>
    )
}

export default Post;