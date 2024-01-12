import { gql } from '@apollo/client';

export const AllUsersQuery = gql`
    query {
        users {
            id
            name
            email
        }
    }
`;