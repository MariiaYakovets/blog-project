const { type } = require("os");

module.exports = function (plop) {
	plop.setGenerator("React component generator", {
		prompts: [
			{ type: "input", name: "name", message: "Component name" },
			{ type: "input", name: "path", message: "Component path" },
			{ type: "input", name: "tag", message: "Component tag" },
		],

		actions: [
			{
				type: "addMany",
				destination: "./src/{{path}}/{{name}}",
				base: "./plop/template/component",
                templateFiles: './plop/template/component/*'
			},
			
		],
	});
};
