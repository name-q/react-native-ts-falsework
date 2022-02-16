import { Dispatch } from '@/redux/types';

export function getActionProxy (action:any) {
  return ( (dispatch: Dispatch) => {
    return action(dispatch);
  } ) as any ;
}