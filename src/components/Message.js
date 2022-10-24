import profileImg from "../images/navbar/profile.svg";

const Message = (props) => {
    return (
        <div className="Message">
            <img src={profileImg} alt="user profile"/>
            <div className="message--info">
                <p>Username</p>
                <p>Sent a post</p>
            </div>
        </div>
    )
}

export default Message;