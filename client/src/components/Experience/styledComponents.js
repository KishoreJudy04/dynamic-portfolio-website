import styled from "styled-components";

const ExperienceSection = styled.section`
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`;

const ChronoWrapper = styled.div`
  .timeline-card-content {
    border-radius: 15px;
    border-left: 4px solid rgba(12, 12, 12, 1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border-left: 4px solid #00bcd4;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
      border-left-color: #ff4081;
    }
  }

  .timeline-card-title {
    font-weight: 600;
    font-size: 1.2rem;
  }

  .timeline-card-content {
    line-height: 1.6;
  }
`;

const AccentText = styled.span`
  color: #00bcd4;
  font-weight: bold;
`;

export {
  ExperienceSection,
  Container,
  SectionTitle,
  ChronoWrapper,
  AccentText,
};
