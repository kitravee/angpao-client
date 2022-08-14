import { FormHelperText, InputLabel } from '@mui/material';
import { Box } from '@mui/system';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import { useController, useFormState } from 'react-hook-form';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

interface RichTextAreaFieldProps {
  fieldName: string;
  inputLabelName?: string;
  id?: string;
  placeholder?: string;
}

export const RichTextAreaField: FC<RichTextAreaFieldProps> = ({
  fieldName = 'rich-text-area',
  inputLabelName = 'text-area',
  id = 'rich-text-area-input',
  placeholder = 'text-area-placeholder',
}) => {
  const mainFieldName = fieldName.split('.')[0];
  const { errors } = useFormState();
  const { field } = useController<any, typeof fieldName>({
    name: fieldName,
  });

  return (
    <Box>
      <InputLabel shrink htmlFor={id}>
        {inputLabelName}
      </InputLabel>
      <QuillNoSSRWrapper
        id={id}
        modules={
          {
            // toolbar: {
            //   container: '#toolbar', // Selector for toolbar container
            //   handlers: {},
            // },
          }
        }
        placeholder={placeholder}
        tabIndex={0}
        theme="snow"
        {...field}
      />
      {!!errors?.[mainFieldName]?.th?.message && (
        <FormHelperText error sx={{ mx: '14px' }}>
          <>{errors?.[`${mainFieldName}`]?.th?.message}</>
        </FormHelperText>
      )}
    </Box>
  );
};
