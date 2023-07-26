import {Notification, SearchNormal1, Setting4} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  CardProduct,
  Container,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TabbarComponent,
  TextComponent,
} from '../components';
import {appColors} from '../constants/appColors';
import {Product} from '../models/Product';
import firestore from '@react-native-firebase/firestore';
import {LoadingComponent} from '../components/LoadingComponent';

const HomeScreen = ({navigation}: any) => {
  const [hotProducts, setHotProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getHotProducts();
  }, []);

  const getHotProducts = async () => {
    await firestore()
      .collection('products')
      .get()
      .then(snap => {
        if (snap.empty) {
          console.log('products not found!');
        } else {
          setIsLoading(true);
          const items: Product[] = [];

          snap.forEach((item: any) => {
            items.push({
              id: item.id,
              ...item.data(),
            });
          });

          setIsLoading(false);
          setHotProducts(items);
        }
      });
  };

  return (
    <Container
      title="DuDu"
      right={
        <TouchableOpacity>
          <Notification size={22} color={appColors.text} />
        </TouchableOpacity>
      }
      isScroll>
      <SectionComponent>
        <RowComponent onPress={() => navigation.navigate('SearchScreen')}>
          <RowComponent
            styles={{
              flex: 1,
              backgroundColor: appColors.white,
              padding: 8,
              borderRadius: 8,
              marginRight: 8,
            }}>
            <SearchNormal1 size={18} color={appColors.gray} />
            <SpaceComponent width={8} />
            <TextComponent
              text="What do you want to search"
              flex={1}
              color={appColors.gray}
              size={12}
            />
          </RowComponent>
          <Setting4 size={22} color={appColors.text} />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <TabbarComponent
          title="Hot Products"
          seemore
          onPress={() => navigation.navigate('Products')}
        />
        {hotProducts.length > 0 ? (
          <RowComponent
            styles={{flexWrap: 'wrap', justifyContent: 'space-between'}}>
            {hotProducts.map(item => (
              <CardProduct
                key={item.id}
                item={item}
                onPress={() => navigation.navigate('Detail', {product: item})}
              />
            ))}
          </RowComponent>
        ) : (
          <LoadingComponent isLoading={isLoading} value={hotProducts.length} />
        )}
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;
