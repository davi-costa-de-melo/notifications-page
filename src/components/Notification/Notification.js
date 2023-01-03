import './Notification.css';

export default function Notification(props) {
    function toDashCase(stringInCamelCase) {
        return stringInCamelCase.split('').map(letter => letter.toUpperCase() === letter ? `-${letter.toLowerCase()}` : letter).join('')
    };

    return (
        <section className={`notification ${toDashCase(props.type)}${props.isNew ? ' new' : ''}`}>
            <img className='user-image' src={props.userImage} alt={`${props.userName}'s profile picture`} />

            <div className='informations'>
                <p className='description'>
                    <strong className='user-name'>{props.userName}</strong> {{
                        postReaction: <>reacted to your recent post <strong className='post-name'>{props.postName}</strong></>,
                        newFollower: <>followed you</>,
                        groupJoin: <>has joined your group <strong className='group-name'>{props.groupName}</strong></>,
                        privateMessage: <>sent you a private message</>,
                        pictureComment: <>commented on your picture</>,
                        groupLeaving: <>left the group <strong className='group-name'>{props.groupName}</strong></>
                    }[props.type]}{props.isNew ? <span className='new-notification-marker'> ●</span> : ''}
                </p>

                <p className='time'>
                    {props.time} ago
                </p>

                {props.type === 'privateMessage' ? <p className='private-message'>{props.message}</p> : <></>}
            </div>
                    
            {props.type === 'pictureComment' ? <img className='picture' src={props.picture} alt='your picture' /> : <></>}
        </section>
    );
}