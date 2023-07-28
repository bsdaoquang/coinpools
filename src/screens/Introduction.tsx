import {View, Text} from 'react-native';
import React from 'react';
import {
  Container,
  SectionComponent,
  TextComponent,
  TitleComponent,
} from '../components';

const Introduction = () => {
  return (
    <Container
      barStyle="dark-content"
      title="Introdução à plataforma"
      back
      isScroll>
      <SectionComponent>
        <TextComponent
          styles={{textAlign: 'justify'}}
          text="Amazon é software de meio período no telefone. Existem muitas tarefas de meio período neste software. O software também lista novas atribuições de meio período a qualquer momento. Os usuários podem escolher de acordo com suas habilidades. Somos o software de ganhos de comércio eletrônico da divisão SHOP NOW. Está nas prateleiras há quatro anos, e a sede e os escritórios da empresa estão localizados nos Estados Unidos. O software da Amazon tem um estilo de design de interface muito limpo, facilitando a localização da tarefa de meio período que melhor se adapta à sua situação real. Em vez disso, os últimos empregos de meio período são atualizados regularmente todos os dias. Você pode ter mais opções e convidar amigos para ganhar dinheiro. Você pode ganhar dinheiro com os fundos da sua conta. Você pode pagar automaticamente pelas atribuições de trabalho certas com base em suas necessidades de trabalho. Em caso de dúvidas, você também pode consultar diretamente o atendimento ao cliente, facilitando a localização de tarefas. Um dos benefícios de usar nossa plataforma é que você pode convidar amigos para ganhar mais dinheiro juntos. Através do tempo e do espaço, basta usar a plataforma para inserir e concluir tarefas para colher os benefícios da experimentação. Nós preparamos uma variedade de tarefas, então não se preocupe que não há tarefas para completar, contanto que você se atreva a fazê-lo, você pode completar e ganhar dinheiro. Você também pode ver quantas tarefas foram concluídas e quanto precisa ser feito com base em alterações diárias de tarefas e estatísticas detalhadas de tarefas. Você pode ativar várias funções livremente. Cada tarefa tem suas próprias necessidades e limitações. Facilite para você, e você também pode encontrar mais amigos para se juntar e cumprir os requisitos da missão. Com apenas um toque, você pode colocar seu dinheiro no bolso. Somos software de criação de dinheiro a tempo parcial para telemóveis. Você pode ver muitas tarefas nele e, se concluir essas tarefas, poderá obter recompensas da plataforma. Se você estiver interessado, faça o download agora!"
        />
      </SectionComponent>
    </Container>
  );
};

export default Introduction;
