import profileIcon from '../images/navbar/profile.svg';

const Profile = (props) => {
    return (
        <div className="Profile">
            <div className='profile--container'>
                <div className='img--container'>
                    <img src={profileIcon} alt="profile"/>
                </div>
                <div className='profile--info'>
                    <p className='username'>Username</p>
                    <div className='profile--stats'>
                        <div className='posts-counter'>0 posts</div>
                        <div className='followers-counter'>0 followers</div>
                        <div className='following-counter'>0 following</div>
                    </div>
                    <h4 className='profile--description'>User's Description</h4>
                </div>
            </div>
            <div className='profile--navbar'>
                <button>Posts</button>
                <button>Liked</button>
                <button>Tagged</button>
            </div>
            <div className='profile--content'>
                <div>Here be where Posts Lie</div>
            </div>
        </div>
    )
}

export default Profile;