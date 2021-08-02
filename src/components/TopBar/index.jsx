/* eslint-disable react/style-prop-object */
// Dependencies
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';

// Redux Actions
import { toggleMenuAction } from '../../store/actions/toggleMenu.action';

// Components
import { AppIcon } from '../AppIcon';

// Styled Components
import {
  TitleBar, TitleWrapper, Title, Name
} from './styles';

export const TopBar = () => {
  const dispatch = useDispatch();
  const pokemonIcon = 'https://res.cloudinary.com/jesuskata/image/upload/v1627770799/pokemon/pokeball-icon_ap5yfh.png';
  const openMenu = () => {
    dispatch(toggleMenuAction(true));
  };

  return (
    <TitleBar>
      <TouchableOpacity onPress={openMenu}>
        <AppIcon photo={pokemonIcon} />
      </TouchableOpacity>
      <TitleWrapper>
        <Title>Pokemon List App</Title>
        <Name>@jesuskata 2021</Name>
      </TitleWrapper>
      <StatusBar style="auto" />
    </TitleBar>
  );
};
