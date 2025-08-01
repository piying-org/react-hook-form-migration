import type { ControlValueAccessor } from '@piying/view-core';
import { CVA, useControlValueAccessor, useSelectModel } from '@piying/view-react';
import { useImperativeHandle, useMemo } from 'react';
import { DefaultOptionConvert, transformOptions, type OptionConvert } from './util/options';
import Select from 'react-select';

interface PiSelectOptions {
  [CVA]: React.RefObject<ControlValueAccessor>;
  options?: any[];
  optionConvert?: OptionConvert;
}
export function ReactSelect(props: PiSelectOptions) {
  const { cva, cvaa } = useControlValueAccessor();
  useImperativeHandle(props[CVA], () => cva, [cva]);
  const resolvedOptions = useMemo(() => {
    return transformOptions(props.options ?? [], { ...DefaultOptionConvert, ...props.optionConvert });
  }, [props.optionConvert, props.options]);
  return (
    <>
      <Select
        value={cvaa.value}
        onChange={(event) => {
          cvaa.valueChange(event.value);
        }}
        isDisabled={cvaa.disabled}
        options={resolvedOptions}
      />
    </>
  );
}
