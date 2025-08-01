import type { ControlValueAccessor } from '@piying/view-core';
import { CVA, PI_VIEW_FIELD_TOKEN, useControlValueAccessor, useSignalToRef } from '@piying/view-react';
import { useContext, useImperativeHandle } from 'react';
import { Input as AntdInput2 } from 'antd';
interface PiInputOptions {
  [CVA]: React.RefObject<ControlValueAccessor>;
}
export function AntdInput(props: PiInputOptions) {
  const { cva, cvaa } = useControlValueAccessor();
  useImperativeHandle(props[CVA], () => cva, [cva]);
  const field = useContext(PI_VIEW_FIELD_TOKEN)!;
  const attributes = useSignalToRef(field, () => field?.attributes());
  return (
    <>
      <AntdInput2
        {...attributes}
        disabled={cvaa.disabled}
        value={cvaa.value ?? ''}
        onBlur={cvaa.touchedChange}
        onChange={(event) => cvaa.valueChange(event.target.value)}
      ></AntdInput2>
    </>
  );
}
