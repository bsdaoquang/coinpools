import {CloseCircle, InfoCircle} from 'iconsax-react-native';
import React, {useState} from 'react';
import {Image, ImageBackground, ScrollView, View} from 'react-native';
import MarqueeText from 'react-native-marquee';
import {
  ButtonComponent,
  ButtonIcon,
  CardContent,
  Container,
  DividerComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TabbarComponent,
  TextComponent,
  TitleComponent,
} from '../../components';
import {appColors} from '../../constants/appColors';
import {appSize} from '../../constants/appSize';
import {fontFamilys} from '../../constants/fontFamlily';
import {global} from '../../styles/global';
import {ModalAlert} from '../../modals/ModalAlert';
import {showToast} from '../../utils/showToast';

const GrabOrders = () => {
  const [isVisibleModalInfo, setIsVisibleModalInfo] = useState(false);
  return (
    <Container top={0} backgroundColor={'#f5f5f5'}>
      <View style={{}}>
        <ImageBackground
          style={{
            paddingTop: 32,
            paddingHorizontal: 16,
          }}
          source={require('../../assets/images/ajdajd.png')}
          imageStyle={{
            width: appSize.width,
            height: 180,
            resizeMode: 'cover',
          }}>
          <RowComponent justify="space-between">
            <TitleComponent
              text="Commission 0.6%"
              color={appColors.white}
              flex={1}
            />
            <ButtonIcon
              icon={<InfoCircle size={20} color={appColors.white} />}
              onPress={() => setIsVisibleModalInfo(true)}
            />
          </RowComponent>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/images/lhjtb.png')}
              style={{
                width: '90%',
                resizeMode: 'contain',
              }}
            />

            <View
              style={{
                width: '90%',
                paddingVertical: 12,
                position: 'absolute',
                top: '50%',
                padding: 12,
              }}>
              <RowComponent justify="space-around">
                <Image
                  source={{
                    uri: 'https://xxxx.coinpools.me/upload/ca42193c068769d2/505d69c7e5b5e69f.jpg',
                  }}
                  style={{width: 64, height: 64, resizeMode: 'contain'}}
                />
                <Image
                  source={{
                    uri: 'https://xxxx.coinpools.me/upload/580c06a129d9c930/d727ec9de3003e59.jpg',
                  }}
                  style={{width: 64, height: 64, resizeMode: 'cover'}}
                />
                <Image
                  source={{
                    uri: 'https://xxxx.coinpools.me/upload/ef673e0c8caf815c/95ea040f2d5460e0.jpg',
                  }}
                  style={{width: 64, height: 64, resizeMode: 'contain'}}
                />
              </RowComponent>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{flex: 1}}>
        <RowComponent styles={{paddingHorizontal: 16}}>
          <Image
            source={require('../../assets/images/gg.png')}
            style={{
              width: 30,
              height: 30,
              resizeMode: 'contain',
              marginRight: 12,
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: appColors.gray7,
              padding: 8,
            }}>
            <MarqueeText
              style={[global.text, {flex: 0}]}
              speed={1}
              delay={10000}
              loop>
              Lorem Ipsum is industry.Lorem Ipsum is industry.Lorem Ipsum is
              industry.Lorem Ipsum is industry.Lorem Ipsum is industry.
            </MarqueeText>
          </View>
        </RowComponent>

        <SectionComponent>
          <RowComponent>
            <ButtonComponent
              text="Automatic matching"
              onPress={() =>
                showToast(
                  'There are unfinished orders in this account, unable to continue matching orders!',
                )
              }
              flex={1}
              color={appColors.info4}
            />
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <TabbarComponent title="Matching quantity (60)" />
          <CardContent>
            <TextComponent
              text="Total assets (usdt)"
              flex={0}
              size={12}
              color={appColors.gray}
            />
            <TitleComponent text={`USDT: -5539.93`} flex={0} />
            <SpaceComponent height={12} />
            <DividerComponent />
            <SpaceComponent height={12} />
            <View>
              <RowComponent
                styles={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 8,
                }}>
                <TextComponent
                  text="Today commission"
                  flex={0}
                  size={12}
                  font={fontFamilys.medium}
                  styles={{textAlign: 'center'}}
                />
                <TitleComponent text="0" flex={0} color={appColors.primary} />
              </RowComponent>
              <RowComponent
                styles={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 8,
                }}>
                <TextComponent
                  text="Total tasks"
                  flex={0}
                  size={12}
                  font={fontFamilys.medium}
                  styles={{textAlign: 'center'}}
                />
                <TitleComponent text="60" flex={0} />
              </RowComponent>
              <RowComponent
                styles={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 8,
                }}>
                <TextComponent
                  text="Remaining tasks"
                  flex={0}
                  size={12}
                  font={fontFamilys.medium}
                  styles={{textAlign: 'center'}}
                />
                <TitleComponent text="12" flex={0} />
              </RowComponent>
              <RowComponent
                styles={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 8,
                }}>
                <TextComponent
                  text="Completed tasks"
                  flex={0}
                  size={12}
                  font={fontFamilys.medium}
                  styles={{textAlign: 'center'}}
                />
                <TitleComponent text="48" flex={0} />
              </RowComponent>
            </View>
          </CardContent>
        </SectionComponent>
      </View>
      <ModalAlert
        visible={isVisibleModalInfo}
        content={
          <ScrollView showsVerticalScrollIndicator={false}>
            <RowComponent>
              <TitleComponent text="Descrição das regras" />
              <ButtonIcon
                icon={<CloseCircle size={22} color={appColors.text} />}
                onPress={() => setIsVisibleModalInfo(false)}
              />
            </RowComponent>
            <SpaceComponent height={8} />
            <TextComponent
              text="A Amazon libera muitos pedidos de tarefas todos os dias, e os usuários podem receber pedidos livremente e ganhar dinheiro executando tarefas."
              flex={0}
              styles={{textAlign: 'justify', marginBottom: 8}}
            />
            <TextComponent
              text="Diferentes tipos de tarefas têm diferentes benefícios na obtenção de pedidos da Amazon. Você pode escolher livremente de acordo com suas necessidades. Este software de recebimento de pedidos da Amazon também pode receber pedidos automaticamente para usuários, para que você tenha tarefas a serem concluídas o tempo todo."
              flex={0}
              styles={{textAlign: 'justify', marginBottom: 8}}
            />
            <TextComponent
              text="1. Tarefas de ganhos online, atualização 24 horas, sem preocupações em ganhar dinheiro;"
              flex={0}
              styles={{textAlign: 'justify', marginBottom: 8}}
            />
            <TextComponent
              text="2. Colete tarefas gratuitamente online, você pode obter recompensas correspondentes após concluir as tarefas e pode sacar dinheiro no mesmo dia;"
              flex={0}
              styles={{textAlign: 'justify', marginBottom: 8}}
            />
            <TextComponent
              text="3. Após 1 mês, você pode receber uma recompensa adicional de 100R$. Você pode ganhar dinheiro online sem investir. Você pode ser aquele que inicia a tarefa, ou aquele que a faz funcionar para sua satisfação. Várias tarefas são extremamente ricas e interessantes, e a operação é simples. Você pode mover o dedo e escolher sua criação favorita. Ganhe todos os tipos de ouro facilmente, não importa como amador ou em tempo integral, contanto que você trabalhe duro, você será recompensado"
              flex={0}
              styles={{textAlign: 'justify', marginBottom: 8}}
            />
            <TitleComponent text="Vantagem Amazon" flex={0} />
            <TextComponent
              text="1. Você não precisa procurar emprego em todos os lugares, pode saber todas as vagas locais no seu celular;"
              flex={0}
              styles={{textAlign: 'justify', marginBottom: 8}}
            />
            <TextComponent
              text="2. Se desejar, você pode iniciar o aplicativo com um clique sem rolar e aguardar a notificação da entrevista;"
              flex={0}
              styles={{textAlign: 'justify', marginBottom: 8}}
            />
            <TextComponent
              text="3. Existem muitos empregos de meio período na plataforma. Os usuários podem escolher seus trabalhos favoritos para ganhar dinheiro, e a renda é muito generosa."
              flex={0}
              styles={{textAlign: 'justify', marginBottom: 8}}
            />
          </ScrollView>
        }
      />
    </Container>
  );
};

export default GrabOrders;
