import { useEffect, useRef } from 'react';
import { type ModalProps } from '../Layout.types';
import {
  ImageWrapper,
  Item, List, ModalWrapper,
} from './Modal.styled';
import { useLayout } from '@/hooks';
import { ButtonLink, WPImage } from '@/components';
import { SectionHeading } from '@/components/styled';

export const Modal = ({ heading, items }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const { isModalOpen, toggleModal } = useLayout();

  useEffect(() => {
    const { current: dialogNode } = modalRef;

    if (dialogNode) {
      if (isModalOpen) {
        dialogNode.showModal();
      } else {
        dialogNode.close();
      }
    }
  }, [isModalOpen, modalRef]);

  return (
    <ModalWrapper ref={modalRef}>
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
};
