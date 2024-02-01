import {
  Icon, Item, ItemInner, Time,
} from './Timeline.styled';
import { type TimelineItemProps } from './Timeline.types';
import * as icons from '@/icons';

export const TimelineItem = ({
  date, icon, text,
}: TimelineItemProps) => {
  const IconComponent = icons[icon];

  const iconClass = icon.toLowerCase();

  return (
    <Item>
      <Icon className="portrait">
        <IconComponent className={iconClass} />
      </Icon>
      <Time className="portrait">
        {date}
      </Time>
      <ItemInner>
        <p>
          {text}
        </p>
        <Icon>
          <IconComponent className={iconClass} />
        </Icon>
      </ItemInner>
      <Time>
        {date}
      </Time>
    </Item>
  );
};
