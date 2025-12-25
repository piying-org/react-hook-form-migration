import * as v from 'valibot';
import { setComponent, actions, NFCSchema } from '@piying/view-core';
import { fieldConfig } from '../piying/define';
import { CustomNgBuilder } from '../piying/custom.builder';
import { PiyingView } from '@piying/view-react';
const schema = v.pipe(
  v.object({
    firstName: v.pipe(v.string(), v.title('First Name'), actions.wrappers.set(['label', 'validator']), actions.props.patch({ titlePosition: 'top' })),
    age: v.pipe(
      v.optional(v.picklist([20, 30])),
      v.title('Age'),
      actions.wrappers.set(['label', 'validator']),
      actions.props.patch({ titlePosition: 'top' }),
      setComponent('select')
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
export function Integratinganexistingform() {
  function modelChange(event: any) {
    console.log(event);
  }
  const initValue = {};
  return (
    <>
      <PiyingView schema={schema} options={options} modelChange={modelChange} model={initValue}></PiyingView>
    </>
  );
}
