import { gql } from "apollo-server";

export default gql`
	type EditProfileResult {
		ok: Boolean!
		error: String
	}
	type Mutation {
		editProfile(
			username: String
			name: String
			location: String
			email: String
			password: String
			avartarURL: String
			githubUsername: String
		): EditProfileResult!
	}
`;
