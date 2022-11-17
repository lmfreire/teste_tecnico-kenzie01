import Input from "../../components/input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Contaier, StyledContainer } from "./styled";
import CardResult from "../Card";
import axios from "axios";
import { useState } from "react";
function Card() {
  const [dataArray, setData] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formSchema = yup.object().shape({
    saleValue: yup
      .string()
      .required("Valor de venda obrigatório")
      .typeError("O valor tem que ser um número"),
    installments: yup
      .number()
      .required("Quantidade de parcelas é obrigatório")
      .max(10)
      .typeError("O valor tem que ser um número"),
    percentageMdr: yup
      .number()
      .required("Procentagem de MDR é obrigatório")
      .typeError("O valor tem que ser um número"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    const url = "https://frontend-challenge-7bu3nxh76a-uc.a.run.app";

    let cont = 1;
    const arr = [];
    while (cont <= data.installments) {
      arr.push(cont * 10);
      cont++;
    }

    axios
      .post(url, {
        amount: data.saleValue.replace(".", ""),
        installments: data.installments,
        mdr: data.percentageMdr,
        days: arr,
      })
      .then(function (response) {
        setData(response.data);
        setError(false);
        setErrorMessage("");
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response.data);
        setError(true);
        setErrorMessage(error.response.data);
      });
  };

  return (
    <Contaier>
      <StyledContainer>
        <h1>Simule sua Antecipação</h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          {error && <span>{errorMessage}</span>}
          <Input
            label="Informe valor de venda *"
            name="saleValue"
            register={register}
            error={errors.saleValue?.message}
          />
          <Input
            label="Em quantas parcelas *"
            name="installments"
            register={register}
            error={errors.installments?.message}
          />
          <span className="spanMax">Máximo de 10 parcelas</span>
          <Input
            label="Informe o percentual de MDR *"
            name="percentageMdr"
            register={register}
            error={errors.percentageMdr?.message}
          />
          <button type="submit">Simular!</button>
        </form>
      </StyledContainer>
      <CardResult DataArray={dataArray} />
    </Contaier>
  );
}

export default Card;
