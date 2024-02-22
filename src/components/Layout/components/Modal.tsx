import { forwardRef } from 'react';
import { type ModalProps } from '../Layout.types';
import {
  ImageWrapper,
  Item, List, ModalWrapper,
} from './Modal.styled';
import { useLayout } from '@/hooks';
import { ButtonLink, WPImage } from '@/components';
import { SectionHeading } from '@/components/styled';

export const Modal = forwardRef<HTMLDialogElement, ModalProps>(({ heading, items }, ref) => {
  const { toggleModal } = useLayout();

  return (
    <ModalWrapper ref={ref}>
      <ButtonLink aria-label="zamknij okno modalne" onClick={toggleModal}>╳</ButtonLink>
      <SectionHeading>
        {heading}
      </SectionHeading>
      <List>
        {items.map(item => (
          <Item key={item.name}>
            <ImageWrapper>
              <WPImage alt={`logo ${item.name}`} imageData={item.image} />
            </ImageWrapper>
            <h3>{item.name}</h3>
            <ButtonLink href={item.link.url} size="small">Sprawdź dostępność</ButtonLink>
          </Item>
        ))}
      </List>
    </ModalWrapper>
  );
});

Modal.displayName = 'Modal';
