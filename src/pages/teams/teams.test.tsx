/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import 'jest';
import React from 'react';
import '@testing-library/jest-dom'
import {jest} from '@jest/globals';
import { render, fireEvent, screen, act } from '@testing-library/react';
import { useAuth } from '../../hooks';
import { Teams } from './Teams';


// Sample mocked data for data array
const mockDataArray = [
  {
    id: 1,
    email: 'evey@gmail.com',
    firstname: 'Evey',
    lastname: 'Alabi',
  },
  // Add other mock data here
];
