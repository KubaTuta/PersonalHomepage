import { Text, Tile, Link, GridWrapper, H3 } from "./styled";

interface Repository {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
}

interface Repositories {
  repositories: Repository[];
}

const GitSuccess = ({ repositories }: Repositories) => (
  <GridWrapper>
    {
      repositories.map(({ name, description, html_url, homepage }, index) =>
      <Tile key={index}>
          <H3>{name}</H3>
          <Text>
            {description}
          </Text>
          <Text>
            DEMO: <Link href={homepage} rel="noopener noreferrer">{homepage} </Link>
          </Text>
          <Text>
            CODE: <Link href={html_url} rel="noopener noreferrer">{html_url}</Link>
          </Text>
        </Tile>
      )
    }
  </GridWrapper>
);

export default GitSuccess;