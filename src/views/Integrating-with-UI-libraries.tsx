import * as v from 'valibot';
import { patchWrappers, setComponent, patchInputs, setWrappers, patchProps, NFCSchema } from '@piying/view-core';
import { fieldConfig } from '../piying/define';
import { CustomNgBuilder } from '../piying/custom.builder';
import { PiyingView } from '@piying/view-react';
const List = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
] as const;
const schema = v.pipe(
  v.object({
    firstName: v.pipe(v.optional(v.string()), v.title('First Name'), setComponent('mui-input')),
    lastName: v.pipe(
      v.optional(v.string()),
      v.title('Laste Name'),
      setWrappers(['label', 'validator']),
      patchProps({ titlePosition: 'top' }),
      setComponent('antd-input')
    ),
    iceCreamType: v.pipe(
      v.optional(v.picklist(List.map((item) => item.value))),
      v.title('Ice Cream Preference'),
      setWrappers(['label', 'validator']),
      patchProps({
        titlePosition: 'top',
      }),
      patchInputs({
        optiosn: List,
      }),
      setComponent('react-select')
    ),
    Checkbox: v.pipe(
      v.optional(v.boolean()),
      v.title('Checkbox'),
      setWrappers(['label']),
      patchProps({ titlePosition: 'right' }),
      setComponent('mui-checkbox')
    ),

    __formHelper: v.pipe(NFCSchema, setComponent('formHelper')),
  }),
  v.title('form'),
  setComponent('fieldset')
);
const options = {
  fieldGlobalConfig: fieldConfig,
  builder: CustomNgBuilder,
};
export function IntegratingwithUIlibraries() {
  function modelChange(event: any) {
    console.log(event);
  }
  let initValue = {};
  return (
    <>
      <PiyingView schema={schema} options={options} modelChange={modelChange} model={initValue}></PiyingView>
    </>
  );
}
