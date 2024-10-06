import React from 'react';
import { Box, Typography, Card, IconButton, Stack } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import { PageHeader } from 'components/common/Header';

const Logs = () => {
  return (
    <Stack spacing={3}>
      <PageHeader title="Logs" backBtn />
      {[
        {
          Day: 'Today',
          Problem: [
            {
              Icon: SignalCellularAltIcon,
              InterNetProblem: 'Internet Connectivity Log',
            },
            {
              Icon: StorageOutlinedIcon,
              InterNetProblem: 'Server Connectivity Log',
            },
          ],
        },
        {
          Day: 'Yesterday',
          Problem: [
            {
              Icon: SignalCellularAltIcon,
              InterNetProblem: 'Internet Connectivity Log',
            },
            {
              Icon: StorageOutlinedIcon,
              InterNetProblem: 'Server Connectivity Log',
            },
            {
              Icon: PsychologyOutlinedIcon,
              InterNetProblem: 'Functional Error Log',
            },
          ],
        },
        {
          Day: '22-06-22',
          Problem: [
            {
              Icon: SignalCellularAltIcon,
              InterNetProblem: 'Internet Connectivity Log',
            },
            {
              Icon: StorageOutlinedIcon,
              InterNetProblem: 'Server Connectivity Log',
            },
            {
              Icon: PsychologyOutlinedIcon,
              InterNetProblem: 'Server Connectivity Log',
            },
          ],
        },
        {
          Day: '22-06-21',
          Problem: [
            {
              Icon: SignalCellularAltIcon,
              InterNetProblem: 'Internet Connectivity Log',
            },
            {
              Icon: StorageOutlinedIcon,
              InterNetProblem: 'Server Connectivity Log',
            },
          ],
        },
        {
          Day: '22-06-20',
          Problem: [
            {
              Icon: SignalCellularAltIcon,
              InterNetProblem: 'Internet Connectivity Log',
            },
            {
              Icon: StorageOutlinedIcon,
              InterNetProblem: 'Server Connectivity Log',
            },
            {
              Icon: PsychologyOutlinedIcon,
              InterNetProblem: 'Server Connectivity Log',
            },
          ],
        },
        {
          Day: '22-06-19',
          Problem: [
            {
              Icon: SignalCellularAltIcon,
              InterNetProblem: 'Internet Connectivity Log',
            },
            {
              Icon: StorageOutlinedIcon,
              InterNetProblem: 'Server Connectivity Log',
            },
            {
              Icon: PsychologyOutlinedIcon,
              InterNetProblem: 'Server Connectivity Log',
            },
          ],
        },
        {
          Day: '22-06-21',
          Problem: [
            {
              Icon: SignalCellularAltIcon,
              InterNetProblem: 'Internet Connectivity Log',
            },
            {
              Icon: StorageOutlinedIcon,
              InterNetProblem: 'Server Connectivity Log',
            },
            {
              Icon: PsychologyOutlinedIcon,
              InterNetProblem: 'Server Connectivity Log',
            },
          ],
        },
      ].map((Items, index) => {
        return (
          <Box
            component={Card}
            display="flex"
            border="1px solid #DAE1E7"
            height="150px"
            key={index}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography
              variant="body2"
              width="150px"
              height="80%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {Items.Day}
            </Typography>
            {Items.Problem.map((item, index) => {
              return (
                <Box
                  key={index}
                  height="80%"
                  width="28%"
                  display="flex"
                  alignItems="center"
                >
                  <Box
                    width="320px"
                    display="flex"
                    height="100%"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ border: '1px solid #DAE1E7' }}
                    component={Card}
                    position="relative"
                  >
                    <Box
                      sx={{ position: 'absolute', top: '8px', right: '8px' }}
                    >
                      <IconButton>
                        <VisibilityOutlinedIcon />
                      </IconButton>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box display="flex" alignItems="center" gap={2}>
                        <item.Icon />
                        <Typography variant="body2">
                          {item.InterNetProblem}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Logs;
