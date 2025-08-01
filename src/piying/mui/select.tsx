import { valueChange, type ControlValueAccessor } from '@piying/view-core';
import { CVA, PI_VIEW_FIELD_TOKEN, useControlValueAccessor, useSignalToRef } from '@piying/view-react';
import { useContext, useImperativeHandle, useMemo } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { DefaultOptionConvert, transformOptions, type OptionConvert } from '../util/options';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
interface PiInputOptions {
  [CVA]: React.RefObject<ControlValueAccessor>;
  options?: any[];
  optionConvert?: OptionConvert;
}
export function MuiSelect(props: PiInputOptions) {
  const { cva, cvaa } = useControlValueAccessor();
  useImperativeHandle(props[CVA], () => cva, [cva]);
  const field = useContext(PI_VIEW_FIELD_TOKEN)!;
  const attributes = useSignalToRef(field, () => field?.attributes());
  const resolvedOptions = useMemo(() => {
    return transformOptions(props.options ?? [], { ...DefaultOptionConvert, ...props.optionConvert });
  }, [props.optionConvert, props.options]);
  const props2 = useSignalToRef(field, (field) => {
    return field.props();
  });
  return (
    <>
      <Select {...attributes} value={cvaa.value??''}  onChange={(event) => cvaa.valueChange(event.target.value)}>
        {resolvedOptions.map((item, index) => {
          return (
            <MenuItem key={index} disabled={item.disabled || cvaa.disabled} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
}
