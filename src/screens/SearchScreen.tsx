import {ArrowDown2, SearchNormal1, Setting4} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  CardProduct,
  Container,
  InputCompoment,
  RowComponent,
  SectionComponent,
  TextComponent,
} from '../components';
import {appColors} from '../constants/appColors';
import {Product} from '../models/Product';
import {showToast} from '../utils/showToast';

const SearchScreen = ({navigation}: any) => {
  const [searchKey, setSearchKey] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const handleSearch = () => {
    if (!searchKey) {
      showToast('What do you want to search?');
    } else {
      showToast(searchKey);
    }
  };

  const getProducts = () => {
    const products: Product[] = [];

    try {
      Array.from({length: 8}).map((_item, index) => {
        products.push({
          id: index + 1,
          images: [
            'https://goka.vn/wp-content/uploads/2023/02/macbook-pro-m2-16-space-gray-M2-PRO-1-1024x1024.jpg',
            'https://goka.vn/wp-content/uploads/2023/02/macbook-pro-m2-16-inch-space-gray-2-1024x786.png',
            'https://goka.vn/wp-content/uploads/2023/02/macbook-pro-m2-16-inch-space-gray-3-1024x786.png',
            'https://goka.vn/wp-content/uploads/2023/02/macbook-pro-m2-16-inch-space-gray-4-1024x786.png',
            'https://goka.vn/wp-content/uploads/2023/02/macbook-pro-m2-16-space-gray-M2-PRO-1-1024x1024.jpg',
            'https://goka.vn/wp-content/uploads/2023/02/macbook-pro-m2-16-inch-space-gray-2-1024x786.png',
            'https://goka.vn/wp-content/uploads/2023/02/macbook-pro-m2-16-inch-space-gray-3-1024x786.png',
            'https://goka.vn/wp-content/uploads/2023/02/macbook-pro-m2-16-inch-space-gray-4-1024x786.png',
          ],
          title: 'MacBook Pro 16 inch M2 Pro 16GB 512GB',
          type: 'Mobile',
          description: 'desciption',
          price: 60990000,
          star: 4.5,
          discount: 5,
          sold: 1250,
          location: 'Ho Chi Minh, Viet Nam',
          detail:
            '<ul><li>SUPERCHARGED BY M2 PRO OR M2 MAX — Take on demanding projects with the M2 Pro or M2 Max chip. M2 Pro has 12 CPU cores, 19 GPU cores, and up to 32GB unified memory. M2 Max has 12 CPU cores, up to 38 GPU cores, and up to 96GB unified memory.</li><li>SUPERCHARGED BY M2 PRO OR M2 MAX — Take on demanding projects with the M2 Pro or M2 Max chip. M2 Pro has 12 CPU cores, 19 GPU cores, and up to 32GB unified memory. M2 Max has 12 CPU cores, up to 38 GPU cores, and up to 96GB unified memory.</li><li>SUPERCHARGED BY M2 PRO OR M2 MAX — Take on demanding projects with the M2 Pro or M2 Max chip. M2 Pro has 12 CPU cores, 19 GPU cores, and up to 32GB unified memory. M2 Max has 12 CPU cores, up to 38 GPU cores, and up to 96GB unified memory.</li><li>SUPERCHARGED BY M2 PRO OR M2 MAX — Take on demanding projects with the M2 Pro or M2 Max chip. M2 Pro has 12 CPU cores, 19 GPU cores, and up to 32GB unified memory. M2 Max has 12 CPU cores, up to 38 GPU cores, and up to 96GB unified memory.</li><li>SUPERCHARGED BY M2 PRO OR M2 MAX — Take on demanding projects with the M2 Pro or M2 Max chip. M2 Pro has 12 CPU cores, 19 GPU cores, and up to 32GB unified memory. M2 Max has 12 CPU cores, up to 38 GPU cores, and up to 96GB unified memory.</li></ul>',
        });
      });

      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      isScroll
      back
      backgroundColor={appColors.white}
      search={
        <InputCompoment
          value={searchKey}
          onChange={val => setSearchKey(val)}
          onEnd={handleSearch}
          flex={1}
          clear
          autoFocus
          placeholder="What do you want to search"
          prefix={<SearchNormal1 size={18} color={appColors.gray} />}
        />
      }>
      <RowComponent>
        <View style={styles.selected}>
          <Setting4 size={20} color={appColors.info4} />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.selected}>
            <TextComponent
              text="Near Me"
              flex={0}
              color={appColors.info4}
              size={12}
            />
          </TouchableOpacity>

          <RowComponent styles={styles.selected} onPress={() => {}}>
            <TextComponent
              text="Low Price"
              flex={0}
              color={appColors.info4}
              size={12}
            />
            <ArrowDown2 size={14} color={appColors.info4} />
          </RowComponent>
          <TouchableOpacity style={styles.unSelected}>
            <TextComponent
              text="Official Store"
              flex={0}
              color={appColors.gray}
              size={12}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.unSelected}>
            <TextComponent
              text="Free shiping"
              flex={0}
              color={appColors.gray}
              size={12}
            />
          </TouchableOpacity>
        </ScrollView>
      </RowComponent>
      <SectionComponent styles={{}}>
        {products.length > 0 ? (
          <RowComponent
            styles={{flexWrap: 'wrap', justifyContent: 'space-between'}}>
            {products.map(item => (
              <CardProduct
                key={item.id}
                item={item}
                onPress={() => navigation.navigate('Detail', {product: item})}
              />
            ))}
          </RowComponent>
        ) : (
          <></>
        )}
      </SectionComponent>
    </Container>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  selected: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: appColors.info4,
    paddingVertical: 4,
    paddingHorizontal: 6,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unSelected: {
    borderRadius: 6,
    backgroundColor: appColors.gray7,
    paddingVertical: 6,
    paddingHorizontal: 6,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
