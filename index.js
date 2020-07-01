//IMPORTS*******************************************
require("dotenv/config");
const cors = require("cors");
const express = require("express");
const routes = require("./server/src/routes");
const path = require("path");
const baseDir = path.resolve("client", "build");

//DEFINE APP*****************************************
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(express.static(`${baseDir}`));

//RETURN FRONT-END ***********************************
app.get("*", (request, response) => {
	if (process.env.ENV === "prod") {
		response.sendFile("index.html", { root: baseDir });
	} else {
		return response.json({
			Environment: "Development",
		});
	}
});

//CATCH INTERNAL ERROR*******************************
app.use((error, request, response, next) => {
	response.status(error.status || 500);
	response.json({ error: error.message });
});

app.use((request, response, next) => {
	const eroor = new Error("Not Found");
	error.status = 404;
	next(error);
});

//LISTEN PORT*****************************************
app.listen(process.env.PORT);
