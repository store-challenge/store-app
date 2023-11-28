import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { CustomFormControl, CustomTextField } from './OrderSection.styled';

import { SubTitle } from '../Title/Title';

import BaseField from './BaseField';

const Comment = props => {
  const { userData, onCommentSubmit, breakpoint, tabletBreakpoint } = props;

  const commentSection = {
    key: 'comment',
    number: '4',
    title: 'Ваш коментар до замовлення',
    fields: [{ id: 'comment', value: userData.comment }],
    placeholder: 'Ваш коментар',
  };

  const handleChange = (field, value) => {
    const updatedUserData = {
      ...userData,
      [field]: value,
    };
    onCommentSubmit(updatedUserData);
  };

  return (
    <BaseField number={commentSection.number} title={commentSection.title} breakpoint={breakpoint}>
      <CustomFormControl
        fullWidth
        sx={{
          '& .MuiOutlinedInput-input': {
            padding: '24px 50px',
          },
        }}>
        {commentSection.fields.map(field => (
          <Grid key={field.id} padding={0}>
            {field.label && (
              <SubTitle
                text={`${field.label}*`}
                sx={{ color: 'var(--mainColor)', marginBottom: breakpoint ? 6.25 : 2.5 }}
              />
            )}
            <CustomTextField
              required
              id={field.id}
              value={field.value}
              multiline
              rows={breakpoint ? 3.5 : 5}
              style={{
                minWidth: breakpoint ? '654px' : tabletBreakpoint ? '355px' : '206px',
                borderRadius: '30px',
                border: '1px solid var(--mainColor)',
                boxShadow: 'none',
              }}
              placeholder={commentSection.placeholder}
              onChange={event => handleChange(field.id, event.target.value)}
            />
          </Grid>
        ))}
      </CustomFormControl>
    </BaseField>
  );
};

export default Comment;
