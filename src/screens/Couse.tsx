import {View, Text} from 'react-native';
import React from 'react';
import {
  Container,
  SectionComponent,
  TextComponent,
  TitleComponent,
} from '../components';

const Couse = () => {
  return (
    <Container barStyle="dark-content" title="Announcement" back isScroll>
      <SectionComponent>
        <TextComponent
          styles={{textAlign: 'justify', marginBottom: 8}}
          text="Software de ganhar dinheiro online para celular"
        />
        <TextComponent
          styles={{textAlign: 'justify', marginBottom: 8}}
          text="1. As tarefas diárias da plataforma são atualizadas, e você pode clicar nas tarefas online para receber pedidos."
        />
        <TextComponent
          styles={{textAlign: 'justify', marginBottom: 8}}
          text="2. As dez principais plataformas no ranking de tarefas mensais receberão moedas de ouro adicionais como recompensas"
        />
        <TextComponent
          styles={{textAlign: 'justify', marginBottom: 8}}
          text="3. Convide novos membros para participar e conclua tarefas para obter recompensas extras"
        />
      </SectionComponent>
    </Container>
  );
};

export default Couse;
