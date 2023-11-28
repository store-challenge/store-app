import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Radio, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { CustomPaper, CustomFormControl, CustomTypography, CustomFormControlLabel } from './OrderSection.styled';

import { VisaIcon, MastercardIcon, GooglePayIcon, ApplePayIcon } from '../../data/images/index';

import { SubTitle } from '../Title/Title';

import BaseField from './BaseField';

const Payment = props => {
  const { userData, onPaymentSubmit, breakpoint, tabletBreakpoint } = props;

  const [selectedPayment, setSelectedPayment] = useState([]);

  const paymentSection = {
    key: 'payment',
    number: '3',
    title: 'Спосіб оплати',
    fields: [{ id: 'typePayment', label: 'Оберіть спосіб оплати', value: userData.typePayment }],
    placeholder: [
      {
        id: 'byCard',
        label: 'Карткою на сайті',
        value: userData.byCard,
        images: [{ Visa: VisaIcon }, { Mastercard: MastercardIcon }],
      },
      { id: 'byReceive', label: 'При отриманні', value: userData.byReceive, images: [] },
      {
        id: 'byPay',
        label: 'GooglePay / ApplePay',
        value: userData.byPay,
        images: [{ GooglePay: GooglePayIcon }, { ApplePay: ApplePayIcon }],
      },
    ],
  };

  const handleRadioChange = item => {
    setSelectedPayment(item.id);
    const selectedPaymentKey = paymentSection.key;
    const payload = { [selectedPaymentKey]: item.id };
    onPaymentSubmit(payload);
  };

  return (
    <BaseField number={paymentSection.number} title={paymentSection.title} breakpoint={breakpoint}>
      <CustomFormControl fullWidth>
        <Grid width={'100%'} xs={2} padding={0}>
          <SubTitle
            text={'Оберіть спосіб доставки*'}
            sx={{ fontWeight: breakpoint && 300, color: 'var(--mainColor)', marginBottom: breakpoint ? 6.25 : 2.5 }}
          />
          <CustomPaper>
            {paymentSection.placeholder.map(item => (
              <CustomFormControlLabel
                key={item.id}
                control={
                  <Radio
                    checked={selectedPayment === item.id}
                    onChange={() => handleRadioChange(item)}
                    id={item.id}
                    sx={{
                      padding: 0,
                      color: 'var(--mainColor)',
                      '&.Mui-checked': {
                        color: 'var(--mainColor)',
                      },
                    }}
                  />
                }
                label={
                  <CustomTypography
                    component="div"
                    style={{
                      minWidth: breakpoint ? '506px' : tabletBreakpoint ? '355px' : '172px',
                      gap: '0px',
                      justifyContent: 'space-between',
                      opacity: selectedPayment === item.id && 1,
                    }}>
                    {item.label}
                    <Stack style={{ flexDirection: 'row', gap: breakpoint ? '10px' : '5px' }}>
                      {item.images &&
                        item.images.map((imageObject, index) => {
                          const [imageKey, imageValue] = Object.entries(imageObject)[0];

                          return selectedPayment === item.id ? (
                            <Link
                              key={index}
                              to={`/${imageKey.toLowerCase()}`}
                              style={{ textDecoration: 'none', width: breakpoint ? '50px' : '30px' }}>
                              <img
                                src={imageValue}
                                alt={imageKey}
                                width="100%"
                                height="100%"
                                stroke="var(--priceTextColor)"
                              />
                            </Link>
                          ) : (
                            <span key={index} style={{ width: breakpoint ? '50px' : '30px' }}>
                              <img
                                src={imageValue}
                                alt={imageKey}
                                width="100%"
                                height="100%"
                                stroke="var(--priceTextColor)"
                              />
                            </span>
                          );
                        })}
                    </Stack>
                  </CustomTypography>
                }
              />
            ))}
          </CustomPaper>
        </Grid>
      </CustomFormControl>
    </BaseField>
  );
};

export default Payment;
