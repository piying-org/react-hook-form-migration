import type { PiViewConfig } from '@piying/view-react';
import { FieldsetGroup } from './group/fieldset';
import { InputCheckbox } from './input-checkbox';
import { InputNumber } from './input-number';
import { InputRadio } from './input-radio';
import { InputText } from './input-text';
import { LabelWrapper } from './wrapper/label-wrapper';
import { ValidatorWrapper } from './wrapper/validator-wrapper';
import { ArrayRwGroup } from './group/array-rw';
import { MultiCheckbox } from './multi-checkbox';
import { FormHelp } from './form-help';
import { PiSelect } from './select';
import { ReactSelect } from './react-select';
import { MuiTextField } from './mui/input-text';
import { MuiCheckbox } from './mui/checkbox';
import { AntdInput } from './antd/input-text';

export const fieldConfig = {
  types: {
    string: { type: InputText, wrappers: ['label'] },
    number: { type: InputNumber, wrappers: ['label'] },
    radio: { type: InputRadio },
    boolean: { type: InputCheckbox, wrappers: ['label'] },
    fieldset: { type: FieldsetGroup },
    'multi-checkbox': { type: MultiCheckbox },
    'array-rw': { type: ArrayRwGroup },
    formHelper: { type: FormHelp },
    select: { type: PiSelect },
    'react-select': { type: ReactSelect },
    'mui-input': { type: MuiTextField },
    'mui-checkbox': { type: MuiCheckbox },
    'antd-input': { type: AntdInput },
  },
  wrappers: {
    label: {
      type: LabelWrapper,
    },
    validator: {
      type: ValidatorWrapper,
    },
  },
} as PiViewConfig;
