import Message from './Message';
import composeImg from '../images/compose.svg';

const Inbox = (props) => {
    return (
        <div className="Inbox">
            <div className='inbox--container'>
                <div className="inbox--left">
                    <div className='inbox--header'>
                        <h2>Username</h2>
                        <button><img src={composeImg} alt="new message"/></button>
                    </div>
                    <div className="message--container">
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                    </div>
                </div>
                <div className="inbox--right">
                    <h2>Your Messages</h2>
                    <p>Send private photos and messages to a friend or group.</p>
                    <button>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Inbox;