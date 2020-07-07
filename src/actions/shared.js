import { getInitialData } from '../utils/api';
import { receiveTweets } from '../actions/tweets';
import { receiveUsers } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';

const AUTHED_ID = 'tylermcginnis';

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({tweets, users}) => {
            dispatch(receiveTweets(tweets));
            dispatch(receiveUsers(users));
            dispatch(setAuthedUser(AUTHED_ID))
        });
    };
}
