'use client';

import styled from 'styled-components';
import PopularPost from '../../src/clientComponent/main/popularPost';

export default function MainPage() {
  /** 인기글 더미 데이터 */
  const popularPostsData = [
    { title: '제목 1', content: '내용 1' },
    { title: '제목 2', content: '내용 2' },
    { title: '제목 3', content: '내용 3' },
  ];

  return (
    <Main>
      <MainLotationBanner>
        <p>3. 메인 로테이션 배너/</p>
        <p>최소2 ~ 최대5</p>
      </MainLotationBanner>

      <SubBannar>
        <Bannar>
          <p>4. 월드컵 바로가기 배너(IdealTypeTournament)</p>
        </Bannar>

        <Bannar>
          <p>5. 중고 거래 바로가기 배너(UsedTrade)</p>
        </Bannar>

        <Bannar>
          <p>6. 구인구직 바로가기 배너(JobVacancy)</p>
        </Bannar>
      </SubBannar>

      <PetMap>
        <p>7. 펫지도</p>
      </PetMap>

      <PetPopularPosts>
        {popularPostsData.map((post, index) => (
          <PopularPost key={index} title={post.title} content={post.content} />
        ))}
      </PetPopularPosts>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainLotationBanner = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height: 40vh;
  margin-top: 5vh;
  border: 1px solid;
`;

const SubBannar = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90vw;
  height: 25vh;
  margin-top: 5vh;
  border: 1px solid;
`;

const Bannar = styled.div`
  display: flex;
  width: 20vw;
  height: 20vh;
  align-items: center;
  justify-content: center;
  border: 1px solid;
`;

const PetMap = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height: 40vh;
  margin-top: 5vh;
  border: 1px solid;
`;

const PetPopularPosts = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90vw;
  height: 40vh;
  margin-top: 5vh;
  border: 1px solid;
`;
