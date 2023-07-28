import {View, Text} from 'react-native';
import React from 'react';
import {
  Container,
  SectionComponent,
  TextComponent,
  TitleComponent,
} from '../components';

const Faq = () => {
  return (
    <Container
      barStyle="dark-content"
      title="Descrição das regras"
      back
      isScroll>
      <SectionComponent>
        <TextComponent
          styles={{textAlign: 'justify', marginBottom: 8}}
          text="A Amazon libera muitos pedidos de tarefas todos os dias, e os usuários podem receber pedidos livremente e ganhar dinheiro executando tarefas."
        />
        <TextComponent
          styles={{textAlign: 'justify', marginBottom: 8}}
          text="Diferentes tipos de tarefas têm diferentes benefícios na obtenção de pedidos da Amazon. Você pode escolher livremente de acordo com suas necessidades. Este software de recebimento de pedidos da Amazon também pode receber pedidos automaticamente para usuários, para que você tenha tarefas a serem concluídas o tempo todo."
        />
        <TextComponent
          styles={{textAlign: 'justify', marginBottom: 8}}
          text="1. Tarefas de ganhos online, atualização 24 horas, sem preocupações em ganhar dinheiro;"
        />
        <TextComponent
          styles={{textAlign: 'justify', marginBottom: 8}}
          text="2. Colete tarefas gratuitamente online, você pode obter recompensas correspondentes após concluir as tarefas e pode sacar dinheiro no mesmo dia;"
        />
        <TextComponent
          styles={{textAlign: 'justify', marginBottom: 8}}
          text="3. Após 1 mês, você pode receber uma recompensa adicional de 100R$. Você pode ganhar dinheiro online sem investir. Você pode ser aquele que inicia a tarefa, ou aquele que a faz funcionar para sua satisfação. Várias tarefas são extremamente ricas e interessantes, e a operação é simples. Você pode mover o dedo e escolher sua criação favorita. Ganhe todos os tipos de ouro facilmente, não importa como amador ou em tempo integral, contanto que você trabalhe duro, você será recompensado."
        />
        <TitleComponent text="Vantagem Amazon" />
        <TextComponent
          styles={{textAlign: 'justify', marginBottom: 8}}
          text="1. Você não precisa procurar emprego em todos os lugares, pode saber todas as vagas locais no seu celular;"
        />
        <TextComponent
          styles={{textAlign: 'justify', marginBottom: 8}}
          text="2. Se desejar, você pode iniciar o aplicativo com um clique sem rolar e aguardar a notificação da entrevista;"
        />
        <TextComponent
          styles={{textAlign: 'justify', marginBottom: 8}}
          text="3. Existem muitos empregos de meio período na plataforma. Os usuários podem escolher seus trabalhos favoritos para ganhar dinheiro, e a renda é muito generosa."
        />
      </SectionComponent>
    </Container>
  );
};

export default Faq;
