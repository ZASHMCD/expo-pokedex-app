// Dependencies
import { gql } from '@apollo/client';

export const POKEMONS_QUERY = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        url
        name
        image
        artwork
        dreamworld
      }
    }
  }
`;

export const POKEMON_QUERY = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      base_experience
      height
      game_indices {
        game_index
        version {
          name
        }
      }
      types {
        slot
        type {
          name
        }
      }
      stats {
        base_stat
        effort
        stat {
          name
        }
      }
      abilities {
        ability {
          name
        }
        is_hidden
        slot
      }
      forms {
        name
      }
      moves {
        move {
          name
        }
      }
    }
  }
`;
