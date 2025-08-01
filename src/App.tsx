import './App.css';
import { Applyvalidation } from './views/Apply-validation';
import { Example } from './views/Example';
import { Handleerrors } from './views/Handle-errors';
import { Integratinganexistingform } from './views/Integrating-an-existing-form';
import { IntegratingwithUIlibraries } from './views/Integrating-with-UI-libraries';
import { UsingComponentAPI } from './views/Using-Component-API';
import { UsingHooksAPI } from './views/Using-Hooks-API';
const List = [
  {
    label: 'Example',
    from: 'https://react-hook-form.com/get-started',
    to: '/views/Basic-Example',
    Component: Example,
  },
  {
    label: 'Apply validation',
    from: 'https://react-hook-form.com/get-started#Applyvalidation',
    to: '/views/Apply-validation',
    Component: Applyvalidation,
  },
  {
    label: 'Integrating an existing form',
    from: 'https://react-hook-form.com/get-started#Integratinganexistingform',
    to: '/views/Integrating-an-existing-form',
    Component: Integratinganexistingform,
  },
  {
    label: 'Integrating with UI libraries',
    from: 'https://react-hook-form.com/get-started#IntegratingwithUIlibraries',
    to: '/views/Integrating-with-UI-libraries',
    Component: IntegratingwithUIlibraries,
  },
  {
    label: 'Using Component API',
    from: 'https://react-hook-form.com/get-started#IntegratingControlledInputs',
    to: '/views/Using-Component-API',
    Component: UsingComponentAPI,
  },
  {
    label: 'Using Hooks API',
    from: 'https://react-hook-form.com/get-started#IntegratingControlledInputs',
    to: '/views/Using-Hooks-API',
    Component: UsingHooksAPI,
  },
  {
    label: 'Handle errors',
    from: 'https://react-hook-form.com/get-started#Handleerrors',
    to: '/views/Handle-errors',
    Component: Handleerrors,
  },
];
function App() {
  return (
    <>
      <div className="flex flex-col gap-4">
        {List.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex gap-4 *:flex-1 items-center *:first:flex-0">
                <label className="label">{item.label}</label>
                <a href={item.from} className="link-primary btn" target="_blank">
                  Formik Page
                </a>
                <a
                  href={'https://github.com/piying-org/formik-migration/tree/main/src' + item.to + '.tsx'}
                  className="link-secondary btn"
                  target="_blank"
                >
                  Piying Code
                </a>
              </div>
              <item.Component key={index}></item.Component>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
