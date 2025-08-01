import * as v from 'valibot';
import { patchWrappers, setComponent, patchInputs, setWrappers, patchProps, NFCSchema } from '@piying/view-core';
import { fieldConfig } from '../piying/define';
import { CustomNgBuilder } from '../piying/custom.builder';
import { PiyingView } from '@piying/view-react';
const schema = v.pipe(
  v.object({
    example: v.pipe(v.optional(v.string()), v.title('Example'), setWrappers(['label', 'validator']), patchProps({ titlePosition: 'top' })),
    exampleRequired: v.pipe(
      v.string(),
      v.title('ExampleRequired'),
      setWrappers(['label', 'validator']),
      patchProps({ titlePosition: 'top' }),
      v.maxLength(10),
      v.minLength(1)
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
export function Example() {
  function modelChange(event: any) {
    console.log(event);
  }
  let initValue = { example: '', exampleRequired: '' };
  return (
    <>
      <PiyingView schema={schema} options={options} modelChange={modelChange} model={initValue}></PiyingView>
    </>
  );
}
