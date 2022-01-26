import bcrypt from "bcrypt";
import client from "../client";

export default {
	Mutation: {
		createAccount: async (
			_,
			{ username, email, name, location, password, avatarURL, githubUsername },
		) => {
			//check if username or email are already on DB
			try {
				const existingUser = await client.user.findFirst({
					where: { OR: [{ username }, { email }] },
				});
				console.log("The user is already existing", existingUser);
				if (existingUser) {
					throw new Error("This username/email is already taken.");
				}
				const uglyPassword = await bcrypt.hash(password, 10);
				const newUser = client.user.create({
					data: {
						username,
						email,
						name,
						location,
						password: uglyPassword,
						avatarURL,
						githubUsername,
					},
				});
				if (newUser) {
					console.log("ok:true");
					return newUser;
				} else {
					console.log("ok:false");
					return "ok:false";
				}
			} catch (e) {
				return e;
			}
		},
	},
};
