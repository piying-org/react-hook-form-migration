import { PI_VIEW_FIELD_TOKEN, PiyingFieldTemplate, useSignalToRef } from '@piying/view-react';
import { useContext } from 'react';

export interface PiyingGroupProps {}
export function PiyingGroup2(_: PiyingGroupProps) {
  const field = useContext(PI_VIEW_FIELD_TOKEN)!;
  const attributes = useSignalToRef(field, (field) => field?.attributes());
  const children = useSignalToRef(field, (field) => field?.children!())!;

  return (
    <>
      <div {...attributes}>
        {children.map((field, index) => {
          return <PiyingFieldTemplate field={field} key={index}></PiyingFieldTemplate>;
        })}
      </div>
    </>
  );
}
