import { Text, Tile, Link, GridWrapper, H3 } from "./styled";

const GitSuccess = ({ repositories }) => {
  return (
    <GridWrapper>
      {
        repositories.map(({name, description, html_url, homepage}, index) =>
      <Tile key={index}>
        <H3>{name}</H3>
        <Text>
          {description}
        </Text>
        <Text>
          DEMO: <Link href={homepage}>{homepage} rel="noopener noreferrer"</Link>
        </Text>
        <Text>
          CODE: <Link href={html_url}>{html_url} rel="noopener noreferrer"</Link>
        </Text>
      </Tile>
      )
      }
      
    </GridWrapper>
  );
}
export default GitSuccess;