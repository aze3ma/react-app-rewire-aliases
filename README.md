# Rewire create-react-app to add Webpack aliases to your project!

Add webpack aliases to your project without ejecting so you don't need to import realtively paths,
so you can check [Webapck Aliases](https://webpack.js.org/configuration/resolve/) this can be done easy with this package.

# Install

```bash
$ yarn add react-app-rewired react-app-rewire-aliases -D
$ npm install react-app-rewired react-app-rewire-aliases --save-dev
```

# Add it to your project

* [Rewire your app](https://github.com/timarney/react-app-rewired#how-to-rewire-your-create-react-app-project) than modify `config-overrides.js`

```javascript
const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');

/* config-overrides.js */
module.exports = function override(config, env) {
	config = rewireAliases.aliasesOptions({
		'@components': path.resolve(__dirname, `${paths.appSrc}/components/`)
	})(config, env);
  return config;
}
```

so in the example above I am prefixing my components folder with '@'.

after adding this you will be able to import you components like that

```javascript
import ComponentA from '@components/ComponentA';
```

instead of for example relatively write

```javascript
import ComponentA from '../../../components/ComponentA';
```
