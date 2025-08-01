import { PI_VIEW_FIELD_TOKEN, useSignalToRef } from '@piying/view-react';
import { useContext } from 'react';
import { controlStatusList, fieldControlStatusClass } from '@piying/view-core';
import { errorString } from '../util/error-string';

export function ControlStatusWrapper(props: { children: any }) {
  const field = useContext(PI_VIEW_FIELD_TOKEN);
  const statusClass = useSignalToRef(field, (field) => fieldControlStatusClass(field?.form.control));

  const status = useSignalToRef(field, (field) => controlStatusList(field?.form.control));

  return (
    <>
      <div className={statusClass}>
        {props.children}
        {status.join('\n')}
      </div>
    </>
  );
}
