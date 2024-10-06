import { forwardRef } from 'react';
import { InputLabel, Box, MenuItem, Stack } from '@mui/material';
import selector from './selector';

const Input = forwardRef((props, ref) => {
  const { label, component, options, children, containerProps, ...rest } =
    props;
  const comp = component || options ? 'select' : 'text';
  const Component = selector({ component: comp });

  const id = rest.id || rest.name || new Date().getTime();

  return (
    <Stack
      spacing={1}
      alignItems={containerProps.direction === 'row' ? 'center' : undefined}
      {...containerProps}
    >
      <InputLabel htmlFor={id}>
        {label}
        {!label && <>&nbsp;</>}
      </InputLabel>
      <Component {...rest} id={id} ref={ref}>
        {comp === 'select' && options && (
          <MenuItem value="" disabled>
            {rest.placeholder || 'Select'}
          </MenuItem>
        )}
        {comp === 'select' &&
          options?.map((v, i) => (
            <MenuItem value={v.value} key={i}>
              {v.label}
            </MenuItem>
          ))}
        {children}
      </Component>
    </Stack>
  );
});

Input.defaultProps = {
  size: 'small',
  variant: 'outlined',
  fullWidth: true,
  containerProps: {},
};

export default Input;
