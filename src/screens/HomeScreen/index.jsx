// Dependencies
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, SafeAreaView, Animated, Easing, StatusBar, TouchableOpacity
} from 'react-native';
import { useSelector } from 'react-redux';

// Apollo Client
import { useQuery } from '@apollo/client';

// Apollo Client Queries
import { POKEMONS_QUERY } from '../../apollo/queries';

// Components
import { Card } from '../../components/Card';
import { Logo } from '../../components/Logo';
import { TopBar } from '../../components/TopBar';
import { Menu } from '../../components/Menu';

// Shared Components
import { SharedSubtitle } from '../../components/shared';

// Styled Components
import {
  RootView, AnimatedContainer, Message, CardsContainer
} from './styles';

export const HomeScreen = ({ navigation }) => {
  const pokemonLogo = 'https://res.cloudinary.com/jesuskata/image/upload/v1627770799/pokemon/pokemon-logo_bfaacz.png';
  const isOpen = useSelector(state => state.isOpen.isOpen);
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const gqlVariables = {
    limit: 151,
    offset: 0,
  };

  const { loading, error, data } = useQuery(POKEMONS_QUERY, {
    variables: gqlVariables
  });

  useEffect(() => {
    toggleMenu();
  }, [isOpen]);

  const toggleMenu = () => {
    if (isOpen) {
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: false
      }).start();
      Animated.spring(opacity, {
        toValue: 0.5,
        useNativeDriver: false
      }).start();

      StatusBar.setBarStyle('light-content', true);
    } else {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: false
      }).start();
      Animated.spring(opacity, {
        toValue: 1,
        useNativeDriver: false
      }).start();

      StatusBar.setBarStyle('dark-content', true);
    }
  };

  const handleNavigation = (card) => {
    navigation.push('Section', {
      section: card
    });
  };

  return (
    <RootView>
      <Menu />
      <AnimatedContainer
        style={{
          transform: [{ scale }],
          opacity
        }}
      >
        <SafeAreaView>
          <ScrollView>
            <TopBar />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ padding: 20, paddingLeft: 12, paddingTop: 30 }}
            >
              <Logo
                image={pokemonLogo}
              />
            </ScrollView>
            <SharedSubtitle>Pokémon List</SharedSubtitle>
            <ScrollView horizontal style={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false}>
              {loading ? (
                <Message>Loading...</Message>
              ) : data ? (
                <CardsContainer>
                  {data?.pokemons?.results.map(item => (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => handleNavigation(item)}
                    >
                      <Card
                        image={item.artwork}
                        title={item.name}
                        id={item.id}
                      />
                    </TouchableOpacity>
                  ))}
                </CardsContainer>
              ) : error ? <Message>Error!</Message> : null}
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </AnimatedContainer>
    </RootView>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any)
};
