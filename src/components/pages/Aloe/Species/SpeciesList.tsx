import sanitize from 'sanitize-html';
import { List, SingleSpecies } from './Species.styled';
import { type SpeciesListProps } from './Species.types';
import { WPImage } from '@/components/WPImage/WPImage';

export const SpeciesList = ({ species }: SpeciesListProps) => (
  <List>
    {species.map(item => {
      const sanitizedName = sanitize(item.name, { allowedTags: ['i'] });

      return (
        <SingleSpecies key={item.name}>
          <WPImage
            alt={item.name} className="species-item"
            imageData={{ url: item.image }}
          />
          <h3 dangerouslySetInnerHTML={{ __html: sanitizedName }} key={item.name} />
        </SingleSpecies>
      );
    })}
  </List>
);
