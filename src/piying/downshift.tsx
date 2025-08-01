import type { ControlValueAccessor } from '@piying/view-core';
import { CVA, PI_VIEW_FIELD_TOKEN, useControlValueAccessor, useSignalToRef } from '@piying/view-react';
import { useContext, useImperativeHandle, useMemo } from 'react';
import TextField from '@mui/material/TextField';
import { errorString } from './util/error-string';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import { NumericFormat as NumericFormat2 } from 'react-number-format';
import Downshift2 from 'downshift';
import type { DownshiftProps } from 'downshift';
import { DefaultOptionConvert, transformOptions, type OptionConvert } from './util/options';

interface PiInputOptions {
  [CVA]: React.RefObject<ControlValueAccessor>;
  options: any[];
}
export function Downshift(props: PiInputOptions) {
  const { cva, cvaa } = useControlValueAccessor();
  useImperativeHandle(props[CVA], () => cva, [cva]);
  const field = useContext(PI_VIEW_FIELD_TOKEN)!;
  const attributes = useSignalToRef(field, () => field?.attributes());

  return (
    <>
      <Downshift2
        selectedItem={cvaa.value ?? ''}
        onChange={(event) => {
          console.log(event);
          cvaa.valueChange(event);
        }}
      >
        {({ getInputProps, getItemProps, getLabelProps, getMenuProps, isOpen, inputValue }) => (
          <div>
            <input {...getInputProps()} className="input" {...attributes} />
            <ul {...getMenuProps()}>
              {isOpen
                ? props.options
                    .filter((item) => !inputValue || item.includes(inputValue))
                    .map((item, index) => (
                      <li
                        {...getItemProps({
                          key: item,
                          index,
                          item,
                        })}
                        key={index}
                      >
                        {item}
                      </li>
                    ))
                : null}
            </ul>
          </div>
        )}
      </Downshift2>
    </>
  );
}
