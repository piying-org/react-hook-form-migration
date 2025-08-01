import type { ControlValueAccessor } from '@piying/view-core';
import { CVA, PI_VIEW_FIELD_TOKEN, useControlValueAccessor, useSignalToRef } from '@piying/view-react';
import { useContext, useImperativeHandle } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import { NumericFormat as NumericFormat2 } from 'react-number-format';

interface PiInputOptions {
  [CVA]: React.RefObject<ControlValueAccessor>;
}
export function NumberFormat(props: PiInputOptions) {
  const { cva, cvaa } = useControlValueAccessor();
  useImperativeHandle(props[CVA], () => cva, [cva]);
  const field = useContext(PI_VIEW_FIELD_TOKEN)!;
  const attributes = useSignalToRef(field, () => field?.attributes());

  return (
    <>
      <NumericFormat2
        {...attributes}
        thousandSeparator
        className="input"
        value={cvaa.value}
        onValueChange={(event) => {          
          cvaa.valueChange(event.floatValue);
        }}
      />
    </>
  );
}
