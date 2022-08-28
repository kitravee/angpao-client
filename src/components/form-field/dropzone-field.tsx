import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useState } from 'react';
import { useController } from 'react-hook-form';

import { Dropzone } from '@/components/dropzone';

interface DropzoneFieldProps {
  someProps?: any;
}

export const DropzoneField: FC<DropzoneFieldProps> = () => {
  const fieldName = 'imageUrl';
  const [currentImage, setCurrentImage] = useState<File>();
  const { field } = useController<any, typeof fieldName>({
    name: fieldName,
  });

  return (
    <Box>
      <Dropzone
        // loading
        options={{
          onDrop: async (acceptedFiles) => {
            const formData = new FormData();
            formData.append('file', acceptedFiles[0]);
            field.onChange(formData);
            setCurrentImage(acceptedFiles?.[0]);
          },
          accept: {
            'image/jpeg': [],
            'image/png': [],
          },
        }}
      >
        {() => (
          <Box>
            <CloudUploadRoundedIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography sx={{ color: 'grey.500', fontSize: '13px' }}>
              {currentImage?.name || 'upload image'}
            </Typography>
          </Box>
        )}
      </Dropzone>
    </Box>
  );
};
