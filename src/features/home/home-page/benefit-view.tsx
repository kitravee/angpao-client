import { FC } from 'react';

interface BenefitViewProps {
  someProps?: any;
}

export const BenefitView: FC<BenefitViewProps> = ({ someProps }) => {
  return <>{someProps}</>;
};
