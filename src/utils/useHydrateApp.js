import {useDispatch} from 'react-redux';
import store from 'store';
import {logIn} from 'shared/reducers/userSlice';

export default function useHydrateApp() {
  const dispatch = useDispatch();
  const userObj = store.get('user');
  return () => {
    if (userObj) {
      try {
        const {loggedIn, displayName} = userObj;
        if (loggedIn && displayName) {
          dispatch(logIn(displayName));
        };
      } catch (e) {
        console.error(`Local storage 'user' object could not be parsed.\n`, e);
      }
    }
  }
};