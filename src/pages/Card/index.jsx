import PlaceHolderValues from "../../components/placeholde";
import { Contaier } from "./styled";

function CardResult({ DataArray }) {
  return (
    <Contaier>
      <h1>Você receberá:</h1>
      <div>
        {Object.keys(DataArray).length !== 0 ? (
          Object.keys(DataArray).map((element, index) => (
            <p key={index}>
              Em: {element} dias: R$
              {Object.keys(DataArray).length !== 0
                ? DataArray[`${element}`]?.toFixed(2)
                : "00,00"}
            </p>
          ))
        ) : (
          <PlaceHolderValues DataArray={DataArray} />
        )}
      </div>
    </Contaier>
  );
}

export default CardResult;
