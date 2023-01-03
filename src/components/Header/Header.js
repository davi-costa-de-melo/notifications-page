import './Header.css';

export default function Header(props) {
    return (
        <header className='header'>
            <div className='informations'>
                <h1 className='title'>Notifications</h1>

                <p className='new-notifications-number'>{props.newNotificationsNumber}</p>
            </div>

            <button className='mark-all-as-read-button' onClick={props.onClickMarkAllAsRead}>
                Mark all as read
            </button>
        </header>
    );
}