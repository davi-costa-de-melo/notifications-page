import './Header.css';

export default function Header(props) {
    return (
        <header className='header'>
            <div className='informations'>
                <h1 className='title'>Notifications</h1>

                {props.newNotificationsNumber ? <span className='new-notifications-number'>{props.newNotificationsNumber}</span> : <></>}
            </div>

            <button className='mark-all-as-read-button' onClick={props.onClickMarkAllAsRead}>
                Mark all as read
            </button>
        </header>
    );
}