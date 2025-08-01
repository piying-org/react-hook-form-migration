import { PiyingGroup, type PiViewConfig } from '@piying/view-react';
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
import { MuiRadio } from './mui/radio';
import { MuiSelect } from './mui/select';
import { MuiSwitch } from './mui/switch';
import { MuiSlider } from './mui/slider';
import { MuiAutoComplete } from './mui/auto-complete';
import { ReactDatePicker } from './react-datepicker';
import { NumberFormat } from './number-format';
import { Downshift } from './downshift';
import { PiyingGroup2 } from './group/group';

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
    'mui-radio': { type: MuiRadio },
    'mui-select': { type: MuiSelect },
    'mui-switch': { type: MuiSwitch },
    'mui-slider': { type: MuiSlider },
    'mui-autocomplete': { type: MuiAutoComplete },
    'antd-input': { type: AntdInput },
    'react-datepicker': { type: ReactDatePicker },
    'number-format': { type: NumberFormat },
    'downshift': { type: Downshift },
    object: { type: PiyingGroup2 },
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
