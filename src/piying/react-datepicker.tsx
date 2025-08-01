import type { ControlValueAccessor } from '@piying/view-core';
import { CVA, PI_VIEW_FIELD_TOKEN, useControlValueAccessor, useSignalToRef } from '@piying/view-react';
import { useContext, useImperativeHandle, useMemo } from 'react';
import TextField from '@mui/material/TextField';
import { errorString } from './util/error-string';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface PiInputOptions {
  [CVA]: React.RefObject<ControlValueAccessor>;
}
export function ReactDatePicker(props: PiInputOptions) {
  const { cva, cvaa } = useControlValueAccessor();
  useImperativeHandle(props[CVA], () => cva, [cva]);
  const field = useContext(PI_VIEW_FIELD_TOKEN)!;
  const attributes = useSignalToRef(field, () => field?.attributes());

  return (
    <>
      <div>
        <DatePicker
          selected={cvaa.value}
          onChange={(date) => cvaa.valueChange(date)}
          disabled={cvaa.disabled}
          onBlur={cvaa.touchedChange}
          {...attributes}
          className="input"
        />
      </div>
    </>
  );
}
