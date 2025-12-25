import * as v from 'valibot';
import { setComponent, actions, NFCSchema } from '@piying/view-core';
import { fieldConfig } from '../piying/define';
import { CustomNgBuilder } from '../piying/custom.builder';
import { PiyingView } from '@piying/view-react';
const schema = v.pipe(
  v.object({
    firstName: v.pipe(v.string(), v.title('First Name'), actions.wrappers.set(['label', 'validator']), actions.props.patch({ titlePosition: 'top' })),
    lastName: v.pipe(
      v.optional(v.pipe(v.string())),
      v.title('Laste Name'),
      actions.wrappers.set(['label', 'validator']),
      actions.props.patch({ titlePosition: 'top' })
    ),
    age: v.pipe(
      v.number(),
      v.minValue(0),
      v.integer(),
      v.title('Age'),
      actions.wrappers.set(['label', 'validator']),
      actions.props.patch({ titlePosition: 'top' })
    ),
    website: v.pipe(v.string(), v.url(), v.title('Website'), actions.wrappers.set(['label', 'validator']), actions.props.patch({ titlePosition: 'top' })),

    __formHelper: v.pipe(NFCSchema, setComponent('formHelper')),
  }),
  v.title('form'),
  setComponent('fieldset')
);
const options = {
  fieldGlobalConfig: fieldConfig,
  builder: CustomNgBuilder,
};
export function SchemaValidation
() {
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
