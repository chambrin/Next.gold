import { gql } from '@apollo/client';

export const AllPostsQuery = gql`
    query {
        posts {
            content
            published
            title
            author {
                email
            }
        }
    }
`;