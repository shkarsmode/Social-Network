const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

let initialState = {
	messegesData: [
		{ name: 'Vitalya Rudkin', mess: 'Привет, тут еще кто-то обитает?', url: 'https://picsum.photos/200' },
		{ name: 'Daniil Shkarupa', mess: 'Вот такая вот жизнь', url: 'https://picsum.photos/230' }],
	newMessageText: '',
	dialogsData: [
		{ id: 2, name: 'Vitalya Grudkin', url: 'https://picsum.photos/200' },
		{ id: 3, name: 'Maks Barishov', url: 'https://picsum.photos/250' },
		{ id: 4, name: 'Olexandr Serdyuk', url: 'https://picsum.photos/270' }],
	onloadOnresize(content) {
		debugger;
		if (content.current && window.innerHeight > 300)
			content.current.style.height = window.innerHeight - 225 + 'px';
	}
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return {
				...state,
				messegesData: [...state.messegesData, { name: 'Daniil Shkarupa', mess: action.mess, url: 'https://picsum.photos/230' }],
				newMessageText: ''
			}
		case UPDATE_MESSAGE: return { ...state, newMessageText: action.text }
		default: return state;
	}
}

export let addMessage = mess => ({ type: ADD_MESSAGE, mess });
export let updateMessage = text => ({ type: UPDATE_MESSAGE, text });
export default dialogsReducer;

