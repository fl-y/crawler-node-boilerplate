import fs from "fs";

//  file IO

const FILE_DIR = "output/";

export const saveFile = (name, data) => {
	fs.writeFile(`${FILE_DIR}${name}`, data, 'utf8', err => {
		if(err) {
			console.log("error occured while writing file - ", name);
			console.err(err);
		} else console.log(`file successfully written - ${name}`);
	})
}