import { gql } from "apollo-server";

export default gql`
	type User {
		id: String!
		username: String!
		name: String!
		location: String
		email: String!
		password: String!
		avartarURL: String
		githubUsername: String
		createdAt: String!
		updatedAt: String!
	}
`;
