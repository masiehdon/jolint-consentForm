import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function DescriptionAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
              <strong>
                  Please read the previous information before proceeding. It contains important details for a better understanding.
        </strong>
      </Alert>
    </Stack>
  );
}