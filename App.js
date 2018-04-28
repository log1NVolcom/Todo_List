import React from 'react';
import { Container, Header, Left, Body, Title, Right, Content, Textarea, Form } from 'native-base';
import { AppFontLoader } from './utils/AppFontLoader';

const App = () => (
  <AppFontLoader>
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Textarea</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Form>
          <Textarea rowSpan={5} bordered placeholder="Textarea" />
        </Form>
      </Content>
    </Container>
  </AppFontLoader>
);

export default App;
