import { Outlet, useSearchParams } from 'react-router-dom'
import './Users.css'

export const Users = () => {

  const [SearchParams, SetSearchParams] = useSearchParams();
  const ShowActiveUsers = SearchParams.get('filter') === 'active';

  return (
    <div className="UsersPage">
        <div className="Title">
            Users Page ...
        </div>
        <div className="Data">
            <h1>User 1</h1>
            <h1>User 2</h1>
            <h1>User 3</h1>
        </div>
        <hr />
        <div className="Buttons">
          <button onClick={() => SetSearchParams({filter: 'active'})}>Active users</button>
          <button onClick={() => SetSearchParams({})}>Reset Filter</button>
        </div>
        <hr />
        <div>
          {
            ShowActiveUsers ? <h1>Showing Active Users</h1> : <h2>Showing All users</h2>
          }
          {/* <Outlet /> */} {/* the Data from Nested Route */}
        </div>
    </div>
  )
}
