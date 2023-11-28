import { Stack } from '@mui/material';

import { CustomPaper } from './OrderSection.styled';

import { SubTitle } from '../Title/Title';
import NumberCircle from './NumberCircle';

const BaseField = props => {
  const { number, title, children, breakpoint } = props;

  return (
    <Stack alignItems={!breakpoint && 'center'}>
      <CustomPaper variant="outlined">
        <Stack flexDirection={'row'} alignItems={'center'} gap={breakpoint ? 6.25 : 2.5}>
          {number && <NumberCircle breakpoint number={number} />}
          <SubTitle text={title} sx={{ fontSize: '15px', color: 'var(--mainColor)' }} />
        </Stack>
        <Stack gap={3}>{children}</Stack>
      </CustomPaper>
    </Stack>
  );
};

export default BaseField;
