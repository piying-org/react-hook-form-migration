import * as v from 'valibot';
import { setComponent, setWrappers, patchProps, NFCSchema, patchAttributes } from '@piying/view-core';
import { fieldConfig } from '../piying/define';
import { CustomNgBuilder } from '../piying/custom.builder';
import { PiyingView } from '@piying/view-react';
const schema = v.pipe(
  v.object({
    firstName: v.pipe(
      v.string(),
      v.title('First Name'),
      setWrappers(['label', 'validator']),
      patchProps({ titlePosition: 'top' }),
      patchAttributes({
        placeholder: 'Kotaro',
      })
    ),
    lastName: v.pipe(
      v.optional(v.string()),
      v.title('Laste Name'),
      setWrappers(['label', 'validator']),
      patchProps({ titlePosition: 'top' }),
      patchAttributes({
        placeholder: 'Sugawara',
      })
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
export function Resolver() {
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
