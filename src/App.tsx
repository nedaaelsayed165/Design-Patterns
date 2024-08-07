import { Button } from './components/Button';
import { ToastContainer } from './components/ToastContainer';
import { toast } from './components/utils';
import {testRange} from './components/Range/generator'

function App() {

  testRange();


  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-7xl font-bold text-center">Hello, World</h1>

      <div className="space-x-2">
        <Button onClick={() => toast('Toast with Default message')}>
          Default
        </Button>
        <Button onClick={() => toast.success('Toast with Success message')}>
          Success ✅
        </Button>
        <Button onClick={() => toast.error('Toast with Error message')}>
          Error ❌
        </Button>
        <Button onClick={() => toast.warning('Toast with Warning message')}>
          Warning ⚠️
        </Button>
        <Button onClick={() => toast.dismissAll()}>
          Dismiss All
        </Button>
        
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
