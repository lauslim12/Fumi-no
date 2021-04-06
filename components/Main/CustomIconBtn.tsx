import { IconButton } from '@chakra-ui/react';
import { memo, ReactElement } from 'react';

type Props = {
  ariaLabel: string;
  customIcon: ReactElement;
};

const IconBtn = ({ ariaLabel, customIcon }: Props) => (
  <IconButton
    variant="outline"
    colorScheme="red"
    aria-label={ariaLabel}
    size="sm"
    icon={customIcon}
  />
);

export default memo(IconBtn);
