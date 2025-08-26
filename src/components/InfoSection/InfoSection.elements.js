import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  padding: 105px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};

  @media screen and (max-width: 768px) {
    flex-direction: column; /* Stack on mobile */
  }
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 40px;
    text-align: center; /* Better look on mobile */
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  max-width: 100%;   /* ✅ Responsive fix */
  height: auto;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};

  @media screen and (max-width: 768px) {
    font-size: 32px; /* Smaller heading on mobile */
  }
`;

export const Subtitle = styled.p`
  max-width: 540px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 1.6;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
  white-space: pre-line;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const MvpBanner = styled.div`
  width: fit-content;
  max-width: 90%;
  margin: -90px auto 1px auto;
  background-color: #ffcc00;
  color: black;
  font-weight: bold;
  padding: 6px 40px;   /* ✅ Reduced padding */
  font-size: 16px;
  border-left: 5px solid #ffeeba;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  text-align: center;
  display: block;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    padding: 6px 12px; /* ✅ Mobile safe padding */
  }
`;
