import React from 'react';

import { FitzyLeft, FitzyRight } from './Navigation.styled';

const Right = ({ children }) => <FitzyRight>{children}</FitzyRight>;
const Left = ({ children }) => <FitzyLeft>{children}</FitzyLeft>;

const Layout = () => <div>lol</div>;

Layout.Right = Right;
Layout.Left = Left;

export default Layout;
