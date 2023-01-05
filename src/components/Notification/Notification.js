import './Notification.css';

export default function Notification(props) {
    function toDashCase(stringInCamelCase) {
        return stringInCamelCase.split('').map(letter => letter.toUpperCase() === letter ? `-${letter.toLowerCase()}` : letter).join('')
    };

    return (
        <section className={`notification ${toDashCase(props.type)}${props.isNew ? ' new' : ''}`} onClick={props.onClickMarkAsRead}>
            <img className='user-image' src={props.userImage} alt={`${props.userName}'s profile picture`} />

            <div className='informations'>
                <p className='description'>
                    <a className='user-name'>{props.userName}</a> {{
                        postReaction: <>reacted to your recent post <a className='post-name'>{props.postName}</a></>,
                        newFollower: <>followed you</>,
                        groupJoin: <>has joined your group <a className='group-name'>{props.groupName}</a></>,
                        privateMessage: <>sent you a private message</>,
                        pictureComment: <>commented on your picture</>,
                        groupLeaving: <>left the group <a className='group-name'>{props.groupName}</a></>
                    }[props.type]}{props.isNew ? <span className='new-notification-marker'> ●</span> : ''}
                </p>

                <p className='time'>
                    {props.time} ago
                </p>

                {props.type === 'privateMessage' ? <a className='private-message'>{props.message}</a> : <></>}
            </div>
                    
            {props.type === 'pictureComment' ? <img className='picture' src={props.picture} alt='your picture' /> : <></>}
        </section>
    );
}