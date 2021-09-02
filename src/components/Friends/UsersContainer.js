import {connect} from 'react-redux';
import Users from './Users';
import {followAC, unfollowAC, setUsersAC} from '../../redux/users-reducer';

let usersData;
let mapStateToProps = (state)=>{
	usersData = state.usersPage.usersData;
	let users = state.usersPage.newFriends[0];
	return{
		users: users,
		usersData: usersData
	}
}

let mapDispatchToProps = (dispatch)=>{
	return {
		followAc: id => dispatch(followAC(id)),
		unfollowAc: id => dispatch(unfollowAC(id)),
		setUsersAc: users => dispatch(setUsersAC(users))
	}
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default FriendsContainer;