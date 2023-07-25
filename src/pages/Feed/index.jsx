import {
  Container,
  FeedContainer,
  FeedContent,
  RankingContainer
} from './styles';

import { HeaderAuth } from '../../components/HeaderAuth'
import { Footer } from '../../components/Footer'
import { CardFeed } from '../../components/CardFeed';
import { UserRanking } from '../../components/UserRanking';

export const Feed = () => {
  return (
    <div>
      <HeaderAuth />
      <Container>
        <FeedContainer>
          <h2>Feed</h2>
          <FeedContent>
            <CardFeed />
            <CardFeed />
            <CardFeed />
          </FeedContent>
        </FeedContainer>

        <RankingContainer>
          <h2>#RANKING 5 TOP DA SEMANA</h2>
          <div>
            <UserRanking url="https://github.com/TamuraFelipe.png" name="Felipe Diego" percent={90} />
            <UserRanking url="https://github.com/TamuraFelipe.png" name="Felipe Diego" percent={70} />
            <UserRanking url="https://github.com/TamuraFelipe.png" name="Felipe Diego" percent={60} />
            <UserRanking url="https://github.com/TamuraFelipe.png" name="Felipe Diego" percent={50} />
            <UserRanking url="https://github.com/TamuraFelipe.png" name="Felipe Diego" percent={20} />
          </div>
        </RankingContainer>
      </Container>
      <Footer />
    </div>
  )
}

