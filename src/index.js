import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import styles from './styles.css';

import App from './components/App/App';

function render(Component) {
    ReactDOM.render(
      <AppContainer>
          <Component/>
      </AppContainer>,
      document.getElementById('root')
    );
}

render(App);

if (module.hot) {
    module.hot.accept(App, () => {
        const NextApp = App;
        render(NextApp);
    });
}
