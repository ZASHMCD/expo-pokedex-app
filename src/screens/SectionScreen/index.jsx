// Dependencies
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import {
  TouchableOpacity, StatusBar, ScrollView, SafeAreaView
} from 'react-native';

// Apollo Client
import { useQuery } from '@apollo/client';

// Apollo Client Queries
import { POKEMON_QUERY } from '../../apollo/queries';

// Components
import { PokemonInfo } from '../../components/PokemonInfo';

// Styled Components
import {
  Container, Cover, Image, Title, Caption, CloseView, Wrapper, Logo, Subtitle, Content, Message
} from './styles';

// Shared Components
import { SharedSubtitle } from '../../components/shared';

// Utils
import { nameCapitalized } from '../../utils';

export const SectionScreen = ({ navigation }) => {
  const section = navigation.getParam('section');

  const gqlVariables = {
    name: section.name
  };

  const { loading, error, data } = useQuery(POKEMON_QUERY, {
    variables: gqlVariables
  });

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    // Effect for componentWillUnmount
    return function cleanUp() {
      StatusBar.setBarStyle('dark-content', true);
    };
  }, []);

  const handleCloseSection = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      {loading ? (
        <Message>Loading...</Message>
      ) : data ? (
        <Container>
          <StatusBar hidden />
          <Cover>
            <Image source={{ uri: section.artwork }} />
            <Title>{nameCapitalized(data.pokemon.name)}</Title>
            <Caption>{`ID: ${data.pokemon.id}`}</Caption>
          </Cover>
          <TouchableOpacity
            style={{ position: 'absolute', top: 20, right: 20 }}
            onPress={handleCloseSection}
          >
            <CloseView>
              <Ionicons
                name="ios-close"
                size={36}
                color="#4775f2"
                style={{ marginTop: -1 }}
              />
            </CloseView>
          </TouchableOpacity>
          <Content>
            <SharedSubtitle>Game Versions</SharedSubtitle>
            <ScrollView horizontal style={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false}>
              {data?.pokemon?.game_indices?.map(index => (
                <PokemonInfo key={index?.version?.name} info={nameCapitalized(index?.version?.name)} color='#ff7979' />
              ))}
            </ScrollView>
            <SharedSubtitle>Base Stats</SharedSubtitle>
            <ScrollView horizontal style={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false}>
              {data?.pokemon?.stats?.map(stat => (
                <PokemonInfo key={stat?.stat?.name} info={`${nameCapitalized(stat?.stat?.name)}: ${stat?.base_stat}`} color='#74b9ff' />
              ))}
            </ScrollView>
            <SharedSubtitle>Type(s)</SharedSubtitle>
            <ScrollView horizontal style={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false}>
              {data?.pokemon?.types?.map(type => (
                <PokemonInfo key={type?.type?.name} info={`${type?.slot} ${nameCapitalized(type?.type?.name)}`} color='#7bed9f' />
              ))}
            </ScrollView>
            <SharedSubtitle>Abilities</SharedSubtitle>
            <ScrollView horizontal style={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false}>
              {data?.pokemon?.abilities.map(ability => (
                <PokemonInfo key={ability?.ability?.name} info={`${ability.slot} ${ability.ability.name} ${ability.is_hidden ? '(hidden)' : ''}`} color='#f9ca24' />
              ))}
            </ScrollView>
            <SharedSubtitle>Moves</SharedSubtitle>
            <ScrollView horizontal style={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false}>
              {data?.pokemon?.moves?.map(move => (
                <PokemonInfo key={move?.move?.name} info={move?.move?.name} color='#ced6e0' />
              ))}
            </ScrollView>
          </Content>
          <Wrapper>
            <Logo source={{ uri: section.image }} />
            <Subtitle>{`Base Exp: ${data.pokemon.base_experience} | Height: ${data.pokemon.height}`}</Subtitle>
          </Wrapper>
        </Container>
      ) : error ? <Message>Error!</Message> : null}
    </ScrollView>
  );
};

SectionScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any)
};
