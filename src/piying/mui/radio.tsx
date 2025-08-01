import { valueChange, type ControlValueAccessor } from '@piying/view-core';
import { CVA, PI_VIEW_FIELD_TOKEN, useControlValueAccessor, useSignalToRef } from '@piying/view-react';
import { useContext, useImperativeHandle, useMemo } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { DefaultOptionConvert, transformOptions, type OptionConvert } from '../util/options';
interface PiInputOptions {
  [CVA]: React.RefObject<ControlValueAccessor>;
  options?: any[];
  optionConvert?: OptionConvert;
}
export function MuiRadio(props: PiInputOptions) {
  const { cva, cvaa } = useControlValueAccessor();
  useImperativeHandle(props[CVA], () => cva, [cva]);
  const field = useContext(PI_VIEW_FIELD_TOKEN)!;
  const attributes = useSignalToRef(field, () => field?.attributes());
  const resolvedOptions = useMemo(() => {
    return transformOptions(props.options ?? [], { ...DefaultOptionConvert, ...props.optionConvert });
  }, [props.optionConvert, props.options]);
  return (
    <>
      <RadioGroup
        {...attributes}
        value={cvaa.value??''}
        onChange={(event) => {
          cvaa.valueChange(event.target.value);
        }}
        onBlur={cvaa.touchedChange}
      >
        {resolvedOptions.map((item, index) => {
          return (
            <span key={index}>
              <FormControlLabel disabled={item.disabled || cvaa.disabled} value={item.value} control={<Radio />} label={item.label} />
            </span>
          );
        })}
      </RadioGroup>
    </>
  );
}
