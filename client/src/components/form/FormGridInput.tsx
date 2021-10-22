import { Grid, Paper } from "@mui/material";
import Input from "../common/Input";

const FormGridInput = (props: InputPropsI): JSX.Element => {
  return (
    <Grid item xs={12}>
      <Paper>
        <Input
          sx={props.sx}
          type={props.type}
          InputProps={props.InputProps}
          label={props.label}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          multiline={props.multiline}
          rows={props.rows}
          required={props.required}
          onChange={props.onChange}
        />
      </Paper>
    </Grid>
  );
};

export default FormGridInput;
