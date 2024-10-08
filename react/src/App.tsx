import type { IBitrix24Library } from 'bitrix24-library';
import { loadStyles } from '..';
import '@/storybook/stories.css';

function App(props: { BX24?: IBitrix24Library }) {
  loadStyles(props.BX24);
  return <></>;
}

export default App;
