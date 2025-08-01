import type { ControlValueAccessor } from '@piying/view-core';
import { CVA, PI_VIEW_FIELD_TOKEN, useControlValueAccessor, useSignalToRef } from '@piying/view-react';
import { useContext, useImperativeHandle } from 'react';
import Slider from '@mui/material/Slider';

interface PiInputOptions {
  [CVA]: React.RefObject<ControlValueAccessor>;
  max?: number;
  step?: number;
  defaultValue?: any;
}
export function MuiSlider(props: PiInputOptions) {
  const { cva, cvaa } = useControlValueAccessor();
  useImperativeHandle(props[CVA], () => cva, [cva]);
  const field = useContext(PI_VIEW_FIELD_TOKEN)!;
  const attributes = useSignalToRef(field, () => field?.attributes());
  return (
    <>
      <Slider
        {...attributes}
        aria-label="Default"
        valueLabelDisplay="auto"
        onBlur={cvaa.touchedChange}
        disabled={cvaa.disabled}
        value={cvaa.value ?? props.defaultValue}
        onChange={(_, value) => cvaa.valueChange(value)}
        max={props.max}
        step={props.step}
      />
    </>
  );
}
