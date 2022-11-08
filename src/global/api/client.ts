import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://172.22.19.59:4000/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsOThzMnVtdjAwMDB1Mzk4M2ZrcW05bDYiLCJpYXQiOjE2Njc5Mjk2MjMsImV4cCI6MTY2ODAxNjAyMywic3ViIjoiXCJjbDk4czJ1bXYwMDAwdTM5ODNma3FtOWw2XCIifQ.UX54EOXQ9W8T7kJ1f2WRKGsGxB66E7vGpiWJKWtxy2s',
  },
});
