import { ApiType, Block, H3 } from "./styled";

const GitSuccess = ({repositories}) => {
  return (
    repositories.map(({name, description, html_url, homepage}, index) => 
      <Block key={index}>
       <ApiType>
        <H3>{name}</H3>
        </ApiType> 
        <ApiType>
          {description}
        </ApiType>
        <ApiType>
          DEMO: {homepage}
        </ApiType>
        <ApiType>
          CODE: {html_url}
        </ApiType>
      </Block>
     
      )
  );
}
export default GitSuccess;