import * as v from 'valibot';
import { setComponent, actions, NFCSchema, formConfig } from '@piying/view-core';
import { fieldConfig } from '../piying/define';
import { CustomNgBuilder } from '../piying/custom.builder';
import { PiyingView } from '@piying/view-react';
const schema = v.pipe(
  v.object({
    firstName: v.pipe(
      v.string(),
      v.title('First Name'),
      actions.wrappers.set(['label', 'validator']),
      actions.props.patch({ titlePosition: 'top' }),
      actions.attributes.patch({
        placeholder: 'Kotaro',
      })
    ),
    lastName: v.pipe(
      v.optional(v.string()),
      v.title('Laste Name'),
      actions.wrappers.set(['label', 'validator']),
      actions.props.patch({ titlePosition: 'top' }),
      actions.attributes.patch({
        placeholder: 'Sugawara',
      })
    ),
    isDeveloper: v.pipe(
      v.string(),
      setComponent('boolean'),
      v.title('Is an developer?'),
      actions.wrappers.set(['label']),
      actions.props.patch({ titlePosition: 'top' }),
      actions.attributes.patch({
        placeholder: 'luo',
      }),
      formConfig({
        transfomer: {
          toModel(value,) {
            return value ? 'yes' : 'no';
          },
        },
      })
    ),
    email: v.pipe(
      v.string(),
      actions.wrappers.set(['label']),
      actions.props.patch({ titlePosition: 'top' }),
      actions.attributes.patch({
        placeholder: 'bluebill1049@hotmail.com',
        type: 'email',
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
export function SubmitHandler() {
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
