import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

import Main from './containers/Main';
import Home from './components/Home';
import NotFound from './components/NotFound';

export default () => {
	<Main>
		<Switch>
			<Route path="/" component={Home} />
			<Route component={ NotFound } />
		</Switch>
	</Main>
};