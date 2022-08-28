import { FC } from 'react';

interface CounterFieldProps {
  someProps?: any;
}

export const CounterField: FC<CounterFieldProps> = ({ someProps }) => {
  return <>{someProps}</>;
};
