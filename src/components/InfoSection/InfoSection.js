import React from 'react'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img, MvpBanner } from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'

const InfoSection = ({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
  mvp,
  link // ✅ NEW PROP
}) => {
  return (
    <InfoSec lightBg={lightBg}>
      {/* MVP Banner */}
      {mvp && <MvpBanner>{mvp}</MvpBanner>}
      <Container>
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            <TextWrapper>
              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>

              {link ? (
                // ✅ External link
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </a>
              ) : (
                // ✅ Default internal link
                <Link to="/about">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              )}
            </TextWrapper>
          </InfoColumn>
          <InfoColumn>
            <ImgWrapper start={start}>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  )
}

export default InfoSection
