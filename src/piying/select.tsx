import type { ControlValueAccessor } from '@piying/view-core';
import { CVA, useControlValueAccessor, useSelectModel } from '@piying/view-react';
import { useImperativeHandle, useMemo } from 'react';
import { DefaultOptionConvert, transformOptions, type OptionConvert } from './util/options';

interface PiSelectOptions {
  [CVA]: React.RefObject<ControlValueAccessor>;
  options?: any[];
  optionConvert?: OptionConvert;
}
export function PiSelect(props: PiSelectOptions) {
  const { cva, cvaa } = useControlValueAccessor();
  useImperativeHandle(props[CVA], () => cva, [cva]);
  const selectModel = useSelectModel(cvaa, false);
  const resolvedOptions = useMemo(() => {
    return transformOptions(props.options ?? [], { ...DefaultOptionConvert, ...props.optionConvert });
  }, [props.optionConvert, props.options]);
  return (
    <>
      <select
        className="select"
        {...selectModel}
        onChange={(event) => {
          cvaa.valueChange(resolvedOptions[event.target.options.selectedIndex - 1].value);
        }}
      >
        <option value="">------</option>
        {resolvedOptions.map((item, index) => {
          return (
            <option key={index} value={item.value} disabled={item.disabled}>
              {item.label}
            </option>
          );
        })}
      </select>
    </>
  );
}
