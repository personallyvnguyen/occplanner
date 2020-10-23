import store from 'store';
import { useDispatch } from 'react-redux';
import { logIn } from 'shared/reducers/userSlice';

export const useHydrateApp = () => {
  const dispatch = useDispatch();
  const userObj = store.get('user');

  return () => {
    if (userObj) {
      try {
        const { loggedIn, name } = userObj;
        if (loggedIn && name) {
          dispatch(logIn(name));
        };
      } catch (e) {
        console.error(`Local storage 'user' object could not be parsed.\n`, e);
      }
    }
  }
}