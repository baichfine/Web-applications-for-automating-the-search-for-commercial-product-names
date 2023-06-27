import React from 'react';
import { render } from "react-dom";
import { hasRole, isAllowed } from './Auth';

const user = {
  roles: ['user'],
  rights: ['can_view_articles']
};

const admin = {
  roles: ['user', 'admin'],
  rights: ['can_view_articles', 'can_view_users']
};

const App = ({ user }) => (
  <div>
    {hasRole(user, ['user']) && <p>Is User</p>}
    {hasRole(user, ['admin']) && <p>Is Admin</p>}
    {isAllowed(user, ['can_view_articles']) && <p>Can view Articles</p>}
    {isAllowed(user, ['can_view_users']) && <p>Can view Users</p>}
  </div>
);

render(
  <App user={user} />,
  document.getElementById('root')
);
