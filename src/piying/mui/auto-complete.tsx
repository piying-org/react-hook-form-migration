import type { ControlValueAccessor } from '@piying/view-core';
import { CVA, PI_VIEW_FIELD_TOKEN, useControlValueAccessor, useSignalToRef } from '@piying/view-react';
import { useContext, useImperativeHandle, useMemo } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { DefaultOptionConvert, transformOptions, type OptionConvert } from '../util/options';
interface PiInputOptions {
  [CVA]: React.RefObject<ControlValueAccessor>;
  options?: any[];
  optionConvert?: OptionConvert;
}
export function MuiAutoComplete(props: PiInputOptions) {
  const resolvedOptions = useMemo(() => {
    return transformOptions(props.options ?? [], { ...DefaultOptionConvert, ...props.optionConvert });
  }, [props.optionConvert, props.options]);
  const { cva, cvaa } = useControlValueAccessor();
  useImperativeHandle(props[CVA], () => cva, [cva]);
  const field = useContext(PI_VIEW_FIELD_TOKEN)!;
  const attributes = useSignalToRef(field, () => field?.attributes());
  const props2 = useSignalToRef(field, () => field?.props());

  return (
    <>
      <Autocomplete
        disablePortal
        options={resolvedOptions}
        renderInput={(params) => <TextField {...params} label={props2['title']} />}
        onBlur={cvaa.touchedChange}
        disabled={cvaa.disabled}
        value={cvaa.value ?? ''}
        onChange={(_, value) => cvaa.valueChange(value)}
        {...attributes}
      />
    </>
  );
}
