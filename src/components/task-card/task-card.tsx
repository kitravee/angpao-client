import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import * as React from 'react';
import NumberFormat from 'react-number-format';

import { RouterLink } from '../link-overlay';

export interface TaskCardProps {
  image: string;
  title: string;
  name: string;
  types: {
    name: string;
    price: number;
  }[];
}

export const TaskCard: React.FC<TaskCardProps> = (props) => {
  const { image, title, name, types } = props;
  return (
    <Card
      sx={{
        display: 'flex',
        position: 'relative',
        borderRadius: 3,
        boxShadow: 4,
        // '&:hover': { boxShadow: 4 },
      }}
    >
      <Box minWidth="150px" position="relative">
        {image && (
          <Image alt={name} layout="fill" objectFit="cover" src={image} />
        )}
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <CardContent sx={{ flex: '1 0 auto', pb: 1 }}>
          <RouterLink to="#" underline="none">
            <Typography
              gutterBottom
              className="line-clamp-2"
              color="text.primary"
              component="h5"
              variant="h6"
            >
              {title}
            </Typography>
          </RouterLink>
          <Box alignItems="center" display="flex">
            <LocationOnIcon fontSize="small" sx={{ color: 'text.disabled' }} />
            <Typography
              className="line-clamp-1"
              color="text.disabled"
              component="div"
              sx={{ display: 'flex', alignItems: 'center' }}
              variant="subtitle1"
            >
              {name}
            </Typography>
          </Box>
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'space-between',

            pl: 2,
            pb: 1,
          }}
        >
          {types.map((type) => (
            <Box key={type.name} width="50%">
              <Typography className="line-clamp-2" variant="body2">
                {type.name}
              </Typography>
              <Box display="flex">
                <Typography
                  className="line-clamp-2"
                  color="primary.main"
                  fontWeight="bold"
                  variant="body1"
                >
                  <NumberFormat
                    thousandSeparator
                    displayType="text"
                    value={type.price}
                  />
                </Typography>
                <Typography
                  className="line-clamp-2"
                  color="text.secondary"
                  sx={{ ml: 0.5 }}
                  variant="body1"
                >
                  บาท
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Card>
  );
};
