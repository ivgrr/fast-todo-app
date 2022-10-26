import React from 'react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { IProgressProps } from './Progress.interface';

export const Progress: React.FC<IProgressProps> = ({ progress }) => {
  return (
    <CircularProgress value={progress} color='green.400'>
      <CircularProgressLabel>{progress}%</CircularProgressLabel>
    </CircularProgress>
  );
};
