'use client';
import { Actions, TOurValueState } from '@/@types/app.types';
import { ourValueState } from '@/data';
import React, {
  createContext,
  ReactNode,
  useMemo,
  useContext,
  useReducer,
} from 'react';

type Context = {
  state: TOurValueState;
  handleStateChange: ({ type, payload }: Actions) => void;
};

const reducer = (state: TOurValueState, action: Actions): TOurValueState => {
  const key = action.type as keyof TOurValueState;
  return { ...state, [key]: action.payload };
};

const animateContext = createContext<Context>({} as Context);

export const OurValuesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, ourValueState);

  const value = useMemo(() => {
    const handleStateChange = ({
      type,
      payload,
    }: {
      type: string;
      payload?: any;
    }) => {
      dispatch({ type, payload });
    };

    return {
      state,
      handleStateChange,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <animateContext.Provider value={value}>{children}</animateContext.Provider>
  );
};

export const useAnimateContextContext = () => useContext(animateContext);
