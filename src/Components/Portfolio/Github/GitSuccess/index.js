import { ApiType, Block, H3, Link } from "./styled";

const GitSuccess = ({ repositories }) => {
  return (
    repositories.map(({ name, description, html_url, homepage }, index) =>
      <Block key={index}>
        <ApiType>
          <H3>{name}</H3>
        </ApiType>
        <ApiType>
          {description}
        </ApiType>
        <ApiType>
          DEMO: <Link href={homepage}>{homepage}</Link>
        </ApiType>
        <ApiType>
          CODE: <Link href={html_url}>{html_url}</Link>
        </ApiType>
      </Block>
    )
  );
}
export default GitSuccess;