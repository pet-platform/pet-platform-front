'use client';

import styled from 'styled-components';

interface PopularPostProps {
  title: string;
  content: string;
}

const PopularPost: React.FC<PopularPostProps> = ({ title, content }) => {
  return (
    <PopularPostCSS>
      <p>{title}</p>
      <p>{content}</p>
    </PopularPostCSS>
  );
};

const PopularPostCSS = styled.div`
  display: flex;
  width: 15vw;
  height: 35vh;
  align-items: center;
  justify-content: center;
  border: 1px solid;
`;

export default PopularPost;
