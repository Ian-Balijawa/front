/** 
  All of the routes for the React app should be added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

import SignUp from './components/AccountsComponent/SignUp';
import PassReset from './components/AccountsComponent/PassReset';
import Signin from './components/AccountsComponent/Signin';
import Home from './components/DashboardsComponents/pages/Home';
import Inventory from './components/DashboardsComponents/pages/Inventory';
import Reports from './components/DashboardsComponents/pages/Reports';
import Settings from './components/DashboardsComponents/pages/Settings';
import AddRole from './components/Settings/pages/AddRole';

//mui icons 
import Icon from "@mui/material/Icon";

const routes = [
	{
		type:"collapse",
		name:"Dashboard",
		key:"dashboard",
		icon:<Icon fontSize="small">dashboard</Icon>,
		path:"/dashboard",
		component:<Home/>
	},	
	{
		type:"collapse",
		name:"Signin",
		key:"Signin",
		icon:<Icon fontSize="small">login</Icon>,
		path:"/signin",
		component:<Signin/>
	},
	{
		type:"collapse",
		name:"SignUp",
		key:"SignUp",
		icon:<Icon fontSize="small">login</Icon>,
		path:"/signup",
		component:<SignUp/>
	},
	{
		type:"PassReset",
		name:"PassReset",
		key:"passReset",
		icon:<Icon fontSize="small">login</Icon>,
		path:"/passreset",
		component:<PassReset/>
	},
	{
		type:"Inventory",
		name:"Inventory",
		key:"Inventory",
		icon:<Icon fontSize="small">login</Icon>,
		path:"/inventory",
		component:<Inventory/>
	},
	{
		type:"Settings",
		name:"Settings",
		key:"Settings",
		icon:<Icon fontSize="small">login</Icon>,
		path:"/Settings",
		component:<Settings/>
	},
	{
		type:"AddRole",
		name:"AddRole",
		key:"AddRole",
		icon:<Icon fontSize="small">login</Icon>,
		path:"/AddRole",
		component:<AddRole/>
	},
	{
		type:"Reports",
		name:"Reports",
		key:"Reports",
		icon:<Icon fontSize="small">login</Icon>,
		path:"/Reports",
		component:<Reports/>
	},
];

export default routes;