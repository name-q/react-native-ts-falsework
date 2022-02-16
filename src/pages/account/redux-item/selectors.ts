import { IAllReducerProps } from './types';

export function store2Props({ accountMain }: any): IAllReducerProps {
  return {
    main: accountMain
  };
}