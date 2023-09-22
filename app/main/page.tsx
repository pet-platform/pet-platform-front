'use client';

import styled from 'styled-components';

export default function MainPage() {
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
        <PopularPost>
          <p>8. 반려동물 정보 인기글 /</p>
          <p>카드 형식</p>
        </PopularPost>

        <PopularPost>
          <p>8. 반려동물 정보 인기글 /</p>
          <p>카드 형식</p>
        </PopularPost>

        <PopularPost>
          <p>8. 반려동물 정보 인기글 /</p>
          <p>카드 형식</p>
        </PopularPost>
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

const PopularPost = styled.div`
  display: flex;
  width: 15vw;
  height: 35vh;
  align-items: center;
  justify-content: center;
  border: 1px solid;
`;
