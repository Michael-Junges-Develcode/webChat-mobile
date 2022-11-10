import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://192.168.0.9:4000/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsOThzMnVtdjAwMDB1Mzk4M2ZrcW05bDYiLCJpYXQiOjE2NjgwMDQ3MDUsImV4cCI6MTY2ODA5MTEwNSwic3ViIjoiXCJjbDk4czJ1bXYwMDAwdTM5ODNma3FtOWw2XCIifQ.J-Qcv2XO2u9OFTgH1yjWUiVzat76My8b6db4x0ncjDA',
  },
});
