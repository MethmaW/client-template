import React, { Suspense } from "react";
import {
	HashRouter,
	Redirect,
	Route,
	Switch,
	BrowserRouter as Router,
} from "react-router-dom";
import publicPaths from "./publicPaths";
import privatePaths from "./privatePaths";
import ProtectedRoute from "./ProtectedRoute";
import { LoadingOutlined } from "@ant-design/icons";

const AllRoutes = () => {
	//varaibles
	const loading = <LoadingOutlined />;

	//redux state

	//state

	//useEffect calls

	//methods and statements

	//global logs

	return (
		<>
			<HashRouter>
				<Suspense fallback={loading}>
					<Router>
						<Switch>
							{publicPaths.map((route, i) => {
								return (
									route.component && (
										<Route
											key={i}
											path={route.path}
											exact={route.exact}
											name={route.name}
											component={route.component}
										/>
									)
								);
							})}

							{privatePaths.map((route, i) => {
								return (
									<ProtectedRoute
										key={i}
										path={route.path}
										exact={route.exact}
										component={route.component}
										isAuth={true}
									/>
								);
							})}

							<Redirect from='/' to='/' />
						</Switch>
					</Router>
				</Suspense>
			</HashRouter>
		</>
	);
};

export default AllRoutes;
