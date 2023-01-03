import avatarAngelaGray from '../../images/avatar-angela-gray.webp';
import avatarAnnaKim from '../../images/avatar-anna-kim.webp';
import avatarJacobThompson from '../../images/avatar-jacob-thompson.webp';
import avatarKimberlySmith from '../../images/avatar-kimberly-smith.webp';
import avatarMarkWebber from '../../images/avatar-mark-webber.webp';
import avatarNathanPeterson from '../../images/avatar-nathan-peterson.webp';
import avatarRizkyHasanuddin from '../../images/avatar-rizky-hasanuddin.webp';
import imageChess from '../../images/image-chess.webp';

export default [
    {
        id: 0,
        type: 'postReaction',
        isNew: true,
        userImage: avatarMarkWebber,
        userName: 'Mark Webber',
        postName: 'My first tournament today!',
        time: '1m'
    },
    {
        id: 1,
        type: 'newFollower',
        isNew: true,
        userImage: avatarAngelaGray,
        userName: 'Angela Gray',
        time: '5m'
    },
    {
        id: 2,
        type: 'groupJoin',
        isNew: true,
        userImage: avatarJacobThompson,
        userName: 'Jacob Thompson',
        groupName: 'Chess Club',
        time: '1 day',
    },
    {
        id: 3,
        type: 'privateMessage',
        isNew: false,
        userImage: avatarRizkyHasanuddin,
        userName: 'Rizky Hasaniddin',
        time: '5 days',
        message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
    },
    {
        id: 4,
        type: 'pictureComment',
        isNew: false,
        userImage: avatarKimberlySmith,
        userName: 'Kimberly Smith',
        picture: imageChess,
        time: '1 week'
    },
    {
        id: 5,
        type: 'postReaction',
        isNew: false,
        userImage: avatarNathanPeterson,
        userName: 'Nathan Peterson',
        postName: '5 end-game strategies to increase your win rate',
        time: '2 weeks'
    },
    {
        id: 6,
        type: 'groupLeaving',
        isNew: false,
        userImage: avatarAnnaKim,
        userName: 'Anna Kim',
        groupName: 'Chess Club',
        time: '2 weeks'
    }
]