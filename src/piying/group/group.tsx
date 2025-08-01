import type { PiResolvedViewFieldConfig } from '@piying/view-react';
import { PI_VIEW_FIELD_TOKEN, PiyingFieldTemplate, useSignalToRef } from '@piying/view-react';
import { useContext } from 'react';

export interface PiyingGroupProps {
  fields: PiResolvedViewFieldConfig[];
}
export function PiyingGroup2(props: PiyingGroupProps) {
    const field = useContext(PI_VIEW_FIELD_TOKEN)!;
    const attributes = useSignalToRef(field, (field) => field?.attributes());
  return (
    <>
      <div {...attributes}>
        {props.fields.map((field, index) => {
          return <PiyingFieldTemplate field={field} key={index}></PiyingFieldTemplate>;
        })}
      </div>
    </>
  );
}
