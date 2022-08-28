import { Box, CircularProgress, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';

type CallbackData = {
  isDragReject: boolean;
  isDragAccept: boolean;
  isError: boolean;
};

type Props = {
  className?: string;
  error?: boolean;
  loading?: boolean;
  children: (data: CallbackData) => ReactNode;
  options: DropzoneOptions;
};

export const Dropzone: FC<Props> = (props) => {
  const { loading, error, options, children, className } = props;

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone(options);

  const isError = isDragReject || error;

  const renderContent = () => {
    if (loading) {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
          <Typography sx={{ mt: 1 }}>Uploading</Typography>
        </Box>
      );
    }

    return children({
      isDragReject,
      isDragAccept,
      isError: isError || false,
    });
  };

  return (
    <Box
      className={className}
      {...getRootProps()}
      sx={{
        height: '100%',
        border: '2px dashed',
        borderColor: 'grey.400',
        borderRadius: '10px',
        textAlign: 'center',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',

        '&:hover': {
          borderColor: 'primary.main',
        },
        ...(isError && {
          borderColor: 'error.main',

          '& p': {
            color: 'error.main',
          },
          '&:hover': {
            borderColor: 'error.main',
          },
        }),

        ...(isDragReject && {
          borderColor: 'error.main',
        }),

        ...(isDragAccept && {
          borderColor: 'success.light',
          '&:hover': {
            borderColor: 'success.light',
          },
        }),
      }}
    >
      <input {...getInputProps()} />
      {renderContent()}
    </Box>
  );
};
