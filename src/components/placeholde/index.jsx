function PlaceHolderValues({ DataArray }) {
  return (
    <>
      <p>
        Em 15 dias: R$
        {Object.keys(DataArray).length !== 0
          ? DataArray["15"]?.toFixed(2)
          : "00,00"}
      </p>
      <p>
        Em 30 dias: R$
        {Object.keys(DataArray).length !== 0
          ? DataArray["30"]?.toFixed(2)
          : "00,00"}
      </p>
      <p>
        Em 90 dias: R$
        {Object.keys(DataArray).length !== 0
          ? DataArray["90"]?.toFixed(2)
          : "00,00"}
      </p>
    </>
  );
}

export default PlaceHolderValues;
