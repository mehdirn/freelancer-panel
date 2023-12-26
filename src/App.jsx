import {Route, Routes} from 'react-router-dom';
import Auth from './pages/Auth';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Toaster} from 'react-hot-toast';
import CompleteProfile from './pages/CompleteProfile';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App () {
  const queryClient =  new QueryClient ();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster/>
        <div className="container  xl:max-w-screen-xl">
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path='/complete-profile' element={<CompleteProfile/>} />
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <a href='https://github.com/mehdirn' className='flex justify-center mt-10'>GITHUB:Mehdi-Deris</a>
      </div>
    </QueryClientProvider>
  );
}
