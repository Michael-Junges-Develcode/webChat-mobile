import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://192.168.0.2:4000/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsOThzMnVtdjAwMDB1Mzk4M2ZrcW05bDYiLCJpYXQiOjE2NjgzMDQ4NDksImV4cCI6MTY2ODM5MTI0OSwic3ViIjoiXCJjbDk4czJ1bXYwMDAwdTM5ODNma3FtOWw2XCIifQ.wo6pvJXXGcWbCBBfx4Isgx4mSo-fCXlJ3erT-N3C1AY',
  },
});
