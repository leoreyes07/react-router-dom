import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './Menu';
import { AuthProvider, AuthRoute } from './auth';
import { HomePage } from './HomePage';
import { BlogPage } from './BlogPage';
import { BlogPost } from './BlogPost';
import { BlogPostEdit } from './BlogPostEdit';
import { BlogEditRoute } from './BlogEditRoute';
import { ProfilePage } from './ProfilePage';
import { LoginPage } from './LoginPage';
import { LogoutPage } from './LogoutPage';


function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />


          <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path='/blog' element={<BlogPage />}>
              <Route path=':slug' element={<BlogPost />} />
              <Route path=':slug/edit' element={
                <AuthRoute>
                  <BlogEditRoute>
                    <BlogPostEdit />
                  </BlogEditRoute>
                </AuthRoute>
              } />
            </Route>

            <Route path='/login' element={<LoginPage />} />
            <Route
              path='/logout'
              element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              }
            />
            <Route
              path='/profile'
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }
            />

            <Route path='*' element={<p>not found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
};

export default App;
