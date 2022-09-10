import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { useController } from 'react-hook-form';
import { useIsClient } from 'usehooks-ts';

// import { DEFAULT_TASK_FORM } from '../../components/task-form-provider/constant';

import { FixPrice } from './fix-price';
import { PercentPrice } from './percent-price';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const fieldName = 'commissionType';

export function CommissionView() {
  const isClient = useIsClient();
  const [value, setValue] = React.useState(0);

  const { field } = useController<any, typeof fieldName>({
    name: fieldName,
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    field.onChange(newValue === 0 ? 'FIX' : 'PERCENTAGE');
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          aria-label="basic tabs example"
          value={value}
          onChange={handleChange}
        >
          <Tab
            label="ต่อหัว"
            sx={{ width: '50%', fontSize: '16px' }}
            {...a11yProps(0)}
          />
          <Tab
            label="% จากยอดขาย"
            sx={{ width: '50%', fontSize: '16px' }}
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      {isClient && (
        <>
          <TabPanel index={0} value={value}>
            <FixPrice />
          </TabPanel>
          <TabPanel index={1} value={value}>
            <PercentPrice />
          </TabPanel>
        </>
      )}
    </Box>
  );
}
