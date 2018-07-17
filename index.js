function createRewireAliases(aliasesOptions = {}) {
	return function(config, env) {
		config.resolve.alias = { ...config.resolve.alias, ...aliasesOptions };
		return config;
	};
}

const rewireAliases = createRewireAliases();
rewireAliases.aliasesOptions = createRewireAliases;

module.exports = rewireAliases;
