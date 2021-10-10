import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import useStyles from "./styles";
import ButtonGrp from "./ButtonGrp";
import Form from "./Form";
import Results from "./Results";

const initialState = {
  url: "",
  depth: 0,
  keyword: "",
};

const DarkWeb = () => {
  const classes = useStyles();
  const location = useLocation();
  const [isKeyword, setIsKeyword] = useState(false);
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    setForm(initialState);
  }, [location]);

  const changeHandler = (event) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div data-aos="fade-up" data-aos-duration="2000" className={classes.root}>
      <ButtonGrp
        isKeyword={isKeyword}
        setIsKeyword={setIsKeyword}
        initialState={initialState}
        setForm={setForm}
      />
      <Form
        isKeyword={isKeyword}
        form={form}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
      />
      {/* <Results /> */}
    </div>
  );
};

export default DarkWeb;
