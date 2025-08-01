import * as v from 'valibot';
import { setComponent, setWrappers, patchProps, NFCSchema } from '@piying/view-core';
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
      v.maxLength(20),
      v.regex(/^[A-Za-z]+$/i, 'Alphabetical characters only')
    ),
    lastName: v.pipe(
      v.optional(v.pipe(v.string(), v.regex(/^[A-Za-z]+$/i, 'Alphabetical characters only'))),
      v.title('Laste Name'),
      setWrappers(['label', 'validator']),
      patchProps({ titlePosition: 'top' })
    ),
    age: v.pipe(
      v.optional(v.pipe(v.number(), v.minValue(18), v.maxValue(99))),
      v.title('Age'),
      setWrappers(['label', 'validator']),
      patchProps({ titlePosition: 'top' })
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
export function Applyvalidation() {
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
