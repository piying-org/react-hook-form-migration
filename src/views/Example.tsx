import * as v from 'valibot';
import { setComponent, actions, NFCSchema } from '@piying/view-core';
import { fieldConfig } from '../piying/define';
import { CustomNgBuilder } from '../piying/custom.builder';
import { PiyingView } from '@piying/view-react';
const schema = v.pipe(
  v.object({
    example: v.pipe(
      v.optional(v.string()),
      v.title('Example'),
      actions.wrappers.set(['label', 'validator']),
      actions.props.patch({ titlePosition: 'top' })
    ),
    exampleRequired: v.pipe(
      v.string(),
      v.title('ExampleRequired'),
      actions.wrappers.set(['label', 'validator']),
      actions.props.patch({ titlePosition: 'top' }),
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
  const initValue = { example: '', exampleRequired: '' };
  return (
    <>
      <PiyingView schema={schema} options={options} modelChange={modelChange} model={initValue}></PiyingView>
    </>
  );
}
